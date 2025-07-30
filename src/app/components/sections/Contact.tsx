'use client';

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Card from '@/app/components/ui/Card';
import ContactForm from '@/app/components/ui/ContactForm';
import { useScrollAnimation } from '@/app/components/hooks/useScrollAnimation';

export default function ContactSection() {
  const visibleElements = useScrollAnimation();

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="contact-header"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${visibleElements.has('contact-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get In
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Touch</span>
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Ready to transform your business? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div 
            id="contact-info"
            data-animate
            className={`transition-all duration-1000 delay-300 ${visibleElements.has('contact-info') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-white/80">hello@saaspro.com</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-white/80">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-white/80">123 Business Ave, Suite 100<br />San Francisco, CA 94105</div>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            id="contact-form"
            data-animate
            className={`transition-all duration-1000 delay-500 ${visibleElements.has('contact-form') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Card>
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              <ContactForm />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}