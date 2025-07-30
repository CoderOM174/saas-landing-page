'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Button from '@/app/components/ui/Button';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['Features', 'Pricing', 'Testimonials', 'FAQ', 'Contact'];

  return (
    <nav className="relative z-50 bg-white/5 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-white">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              SaaSPro
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
          
          <div className="hidden md:flex space-x-4">
            <Button variant="secondary" size="sm">Login</Button>
            <Button variant="primary" size="sm">Sign Up</Button>
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-4">
            {navItems.map(item => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="block text-white/80 hover:text-white transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="flex space-x-4 pt-4">
              <Button variant="secondary" size="sm">Login</Button>
              <Button variant="primary" size="sm">Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}