import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

interface Language {
  code: string;
  flag: string;
}

const langs: Language[] = [
  { code: 'vi', flag: '🇻🇳' },
  { code: 'en', flag: '🇺🇸' },
  { code: 'ja', flag: '🇯🇵' }
];

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);

  const current = langs.find(l => l.code === i18n.language) || langs[0];

  const changeLang = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center text-sm font-medium text-white focus:outline-none"
      >
        <span className="mr-1">{current.flag}</span>
        {t(`language.${current.code}`)}
        <ChevronDown className="w-4 h-4 ml-1" />
      </button>

      {open && (
        <ul className="absolute right-0 mt-2 w-32 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50">
          {langs.map(l => (
            <li key={l.code}>
              <button
                onClick={() => changeLang(l.code)}
                className="flex w-full items-center px-3 py-2 text-sm text-white hover:bg-gray-700"
              >
                <span className="mr-2">{l.flag}</span>
                {t(`language.${l.code}`)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
