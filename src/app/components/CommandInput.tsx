'use client';

import { useState, useEffect, useRef } from 'react';
import { useTerminalStore } from '@/app/lib/store';
import { executeCommand } from '@/app/lib/commands';

export default function CommandInput() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const { addOutput } = useTerminalStore();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add command to history
    setHistory(prev => [...prev, input]);
    setHistoryIndex(-1);

    // Add command to output
    addOutput({ type: 'command', content: input });

    // Execute command
    const result = await executeCommand(input);
    addOutput({ type: 'output', content: result });

    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center py-2">
      <span className="mr-2 text-terminal-green">$</span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-transparent border-none outline-none font-mono text-terminal-green"
        autoFocus
        placeholder=""
      />
    </form>
  );
} 