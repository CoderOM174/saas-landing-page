'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';
import Button from '@/app/components/ui/Button';
import { useScrollAnimation } from '@/app/components/hooks/useScrollAnimation';

interface HeroSectionProps {
  onStartTrial: () => void;
}

export default function HeroSection({ onStartTrial }: HeroSectionProps) {
  const visibleElements = useScrollAnimation();

  return (
    <section className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div 
            id="hero-content"
            data-animate
            className={`transition-all duration-1000 ${visibleElements.has('hero-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                Business Today
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-lg leading-relaxed">
              Unlock unprecedented growth with our cutting-edge platform. Join thousands of companies already scaling their success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={onStartTrial}>
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
            <div className="mt-12 flex items-center space-x-8 text-white/60">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm">Support</div>
              </div>
            </div>
          </div>
          
          <div 
            id="hero-visual"
            data-animate
            className={`mt-12 lg:mt-0 transition-all duration-1000 delay-300 ${visibleElements.has('hero-visual') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-30 animate-pulse" />
              <Image 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop" 
                alt="Dashboard Preview" 
                width={800}
                height={600}
                className="relative rounded-3xl shadow-2xl border border-white/20"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}