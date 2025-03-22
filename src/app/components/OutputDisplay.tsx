'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Output {
  type: 'command' | 'output';
  content: string;
}

interface OutputDisplayProps {
  output: Output;
}

export default function OutputDisplay({ output }: OutputDisplayProps) {
  const [displayedContent, setDisplayedContent] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (output.type === 'command') {
      setDisplayedContent(`$ ${output.content}`);
      setIsTyping(false);
      return;
    }

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < output.content.length) {
        setDisplayedContent(output.content.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [output]);

  return (
    <div className="mb-4">
      {output.type === 'command' ? (
        <div className="text-terminal-green">{displayedContent}</div>
      ) : (
        <div className="text-white whitespace-pre-wrap">
          {displayedContent}
          {isTyping && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block w-2 h-5 bg-white ml-1"
            />
          )}
        </div>
      )}
    </div>
  );
} 