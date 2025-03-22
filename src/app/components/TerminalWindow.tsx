'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import CommandInput from '@/app/components/CommandInput';
import OutputDisplay from '@/app/components/OutputDisplay';
import WelcomeMessage from '@/app/components/WelcomeMessage';
import { useTerminalStore } from '@/app/lib/store';

export default function TerminalWindow() {
  const { outputs, addOutput } = useTerminalStore();
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom when new output is added
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [outputs]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-screen bg-terminal-dark text-terminal-green font-mono p-4 overflow-hidden terminal-window"
    >
      <div
        ref={terminalRef}
        className="w-full h-full overflow-y-auto"
      >
        <div className="flex flex-col">
          <WelcomeMessage />
          {outputs.map((output, index) => (
            <OutputDisplay key={index} output={output} />
          ))}
          <CommandInput />
        </div>
      </div>
    </motion.div>
  );
} 