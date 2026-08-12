import { ComponentType } from 'react';
import TerminalWindow from '@/app/components/TerminalWindow';
import PlainTheme from '@/app/components/PlainTheme';
import MusicTheme from '@/app/components/MusicTheme';

export type Theme = {
  id: string;
  name: string;
  component: ComponentType;
  description: string;
};

export const themes: Theme[] = [
  {
    id: 'terminal',
    name: 'Terminal',
    component: TerminalWindow,
    description: 'Interactive terminal-style interface'
  },
  {
    id: 'plain',
    name: 'Plain',
    component: PlainTheme,
    description: 'Traditional portfolio layout'
  },
  {
    id: 'music',
    name: 'Music',
    component: MusicTheme,
    description: 'Brutalist music showcase'
  }
];

export const defaultTheme = themes[0]; 