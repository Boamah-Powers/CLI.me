import { create } from 'zustand';
import { Theme, themes, defaultTheme } from './themes';

type ThemeStore = {
  currentTheme: Theme;
  setTheme: (themeId: string) => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  currentTheme: defaultTheme,
  setTheme: (themeId) => {
    const theme = themes.find(t => t.id === themeId) || defaultTheme;
    set({ currentTheme: theme });
  },
})); 