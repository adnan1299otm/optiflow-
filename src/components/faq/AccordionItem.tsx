'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
}

export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden transition-colors hover:border-[#00d4ff]/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 outline-none"
      >
        <span className={`font-bold font-heading text-lg transition-colors ${isOpen ? 'text-[#00d4ff]' : 'text-white'}`}>
          {question}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${isOpen ? 'border-[#00d4ff] text-[#00d4ff]' : 'border-white/20 text-white/50'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-89 text-white/70 leading-relaxed border-t border-white/5 mt-2 pt-89">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
