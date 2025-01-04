import React from 'react';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const [language, setLanguage] = React.useState('EN');

  return (
    <button 
      onClick={() => setLanguage(language === 'EN' ? 'ES' : 'EN')}
      className="flex items-center space-x-1 text-white hover:text-amber-500 transition"
    >
      <Globe className="h-4 w-4" />
      <span>{language}</span>
    </button>
  );
}