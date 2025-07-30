'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-white mb-4 inline-block">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SaaSPro
              </span>
            </Link>
            <p className="text-white/80 mb-6 leading-relaxed">
              Transforming businesses with cutting-edge technology and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300">
                <Facebook className="w-5 h-5 text-white" />
              </Link>
              <Link href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300">
                <Twitter className="w-5 h-5 text-white" />
              </Link>
              <Link href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300">
                <Instagram className="w-5 h-5 text-white" />
              </Link>
              <Link href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300">
                <Linkedin className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors duration-300">Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors duration-300">Help Center</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors duration-300">Contact</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors duration-300">Status</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors duration-300">Security</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2025 SaaSPro. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">Terms of Service</Link>
            <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
