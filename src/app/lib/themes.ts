import { ComponentType } from 'react';
import TerminalWindow from '@/app/components/TerminalWindow';
import PlainTheme from '@/app/components/PlainTheme';

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
  }
];

export const defaultTheme = themes[0]; 