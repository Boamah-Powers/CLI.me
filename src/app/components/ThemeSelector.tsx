'use client';

import { useThemeStore } from '@/app/lib/themeStore';
import { themes } from '@/app/lib/themes';

export default function ThemeSelector() {
  const { currentTheme, setTheme } = useThemeStore();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center gap-2 bg-terminal-dark/50 p-2 rounded-lg">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => setTheme(theme.id)}
            className={`px-3 py-1 rounded-md transition-colors ${
              currentTheme.id === theme.id
                ? 'bg-terminal-green text-terminal-dark'
                : 'text-terminal-green hover:bg-terminal-green/20'
            }`}
            title={theme.description}
          >
            {theme.name}
          </button>
        ))}
      </div>
    </div>
  );
} 