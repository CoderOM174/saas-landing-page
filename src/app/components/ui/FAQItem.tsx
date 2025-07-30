import React from 'react';
import { ChevronDown } from 'lucide-react';
import Card from './Card';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export default function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <Card hover={false} className="mb-4">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={onClick}
      >
        <span className="text-white font-semibold pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-white/60 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="mt-4 pt-4 border-t border-white/10 text-white/80 leading-relaxed">
          {answer}
        </div>
      )}
    </Card>
  );
}