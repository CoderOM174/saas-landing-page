'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, ArrowRight, Play } from 'lucide-react';

import Navigation from '@/app/components/sections/Navigation';
import HeroSection from '@/app/components/sections/Hero';
import FeaturesSection from '@/app/components/sections/Features';
import PricingSection from '@/app/components/sections/Pricing';
import TestimonialsSection from '@/app/components/sections/Testimonials';
import FAQSection from '@/app/components/sections/FAQ';
import ContactSection from '@/app/components/sections/Contact';
import Footer from '@/app/components/ui/Footer';
import Modal from '@/app/components/ui/Modal';
import Button from '@/app/components/ui/Button';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
   <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />

      <Navigation />
      <HeroSection onStartTrial={() => setModalOpen(true)} />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />

      {/* Sign Up Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Start Your Free Trial</h3>
          <p className="text-white/80 mb-6">
            Join thousands of companies already transforming their business with SaaSPro.
          </p>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="w-full">
              Start Free Trial
            </Button>
          </div>
          <p className="text-white/60 text-sm mt-4">
            No credit card required • 14-day free trial
          </p>
        </div>
      </Modal>
    </div>
  );
}