'use client';

import { motion } from 'framer-motion';

interface Output {
  type: 'command' | 'output';
  content: string;
}

interface OutputDisplayProps {
  output: Output;
}

export default function OutputDisplay({ output }: OutputDisplayProps) {
  return (
    <div className="mb-4">
      {output.type === 'command' ? (
        <div className="text-terminal-green">$ {output.content}</div>
      ) : (
        <div className="text-white whitespace-pre-wrap">
          {output.content}
        </div>
      )}
    </div>
  );
} 