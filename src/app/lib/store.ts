import { create } from 'zustand';

type Output = {
  type: 'command' | 'output';
  content: string;
};

type TerminalStore = {
  outputs: Output[];
  addOutput: (output: Output) => void;
  clearOutputs: () => void;
};

export const useTerminalStore = create<TerminalStore>((set) => ({
  outputs: [],
  addOutput: (output) => set((state) => ({ outputs: [...state.outputs, output] })),
  clearOutputs: () => set({ outputs: [] }),
})); 