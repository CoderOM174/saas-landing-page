'use client';

import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-md w-full">
        <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-300">
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
}