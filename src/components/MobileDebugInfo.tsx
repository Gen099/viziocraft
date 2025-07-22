import React from 'react';

const MobileDebugInfo: React.FC = () => {
  const isMobile = window.innerWidth <= 768;
  const userAgent = navigator.userAgent;
  
  if (!isMobile) return null;

  return (
    <div className="fixed top-20 left-4 right-4 bg-red-900 text-white p-4 rounded-lg z-50 text-xs">
      <h3 className="font-bold mb-2">🔧 MOBILE DEBUG INFO</h3>
      <p><strong>Screen:</strong> {window.innerWidth}x{window.innerHeight}</p>
      <p><strong>User Agent:</strong> {userAgent.substring(0, 50)}...</p>
      <p><strong>Three.js:</strong> Disabled</p>
      <p><strong>P5.js:</strong> Disabled</p>
      <p className="mt-2 text-yellow-300">
        If you see this but no main content, there's a CSS/React issue.
      </p>
    </div>
  );
};

export default MobileDebugInfo;

