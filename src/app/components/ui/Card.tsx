import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 ${hover ? 'hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105' : ''} ${className}`}>
      {children}
    </div>
  );
}