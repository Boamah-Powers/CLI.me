'use client';

import '@fontsource/fira-code';
import ThemeSelector from '@/app/components/ThemeSelector';
import { useThemeStore } from '@/app/lib/themeStore';
import { createElement } from 'react';

export default function Home() {
  const { currentTheme } = useThemeStore();

  return (
    <main className="min-h-screen">
      <ThemeSelector />
      {createElement(currentTheme.component)}
    </main>
  );
}
