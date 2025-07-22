import { useState, useCallback } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

interface ChatSession {
  id: string;
  messages: Message[];
  userInfo?: {
    name?: string;
    email?: string;
    company?: string;
  };
  createdAt: Date;
}

export const useAIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSession, setCurrentSession] = useState<ChatSession | null>(null);

  const toggleAssistant = useCallback(() => {
    setIsOpen(prev => !prev);
    
    // Create new session if opening for the first time
    if (!isOpen && !currentSession) {
      const newSession: ChatSession = {
        id: Date.now().toString(),
        messages: [],
        createdAt: new Date()
      };
      setCurrentSession(newSession);
    }
  }, [isOpen, currentSession]);

  const sendMessageToAPI = useCallback(async (message: string): Promise<string> => {
    try {
      // Call actual backend API
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          sessionId: currentSession?.id,
          timestamp: new Date().toISOString()
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Error sending message to API:', error);
      throw error;
    }
  }, [currentSession]);

  const saveSessionToDatabase = useCallback(async (session: ChatSession) => {
    try {
      await fetch('http://localhost:5000/api/chat/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(session),
      });
    } catch (error) {
      console.error('Error saving session:', error);
    }
  }, []);

  const sendNotification = useCallback(async (session: ChatSession) => {
    try {
      await fetch('http://localhost:5000/api/notifications/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'new_chat',
          session,
          timestamp: new Date().toISOString()
        }),
      });
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  }, []);

  return {
    isOpen,
    toggleAssistant,
    currentSession,
    setCurrentSession,
    sendMessageToAPI,
    saveSessionToDatabase,
    sendNotification
  };
};

