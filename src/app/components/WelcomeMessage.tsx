'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function WelcomeMessage() {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const welcomeText = `Welcome to Kwaaku Boamah-Powers' Terminal Portfolio!
Type 'help' to see available commands.
`;

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < welcomeText.length) {
        setDisplayedText(welcomeText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-terminal-green font-mono whitespace-pre-wrap"
      >
        {displayedText}
        {isTyping && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block w-2 h-5 bg-terminal-green ml-1"
          />
        )}
      </motion.div>
    </div>
  );
}
