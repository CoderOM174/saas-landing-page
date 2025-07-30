'use client';

import React, { useState } from 'react';
import FAQItem from '@/app/components/ui/FAQItem';
import { useScrollAnimation } from '@/app/components/hooks/useScrollAnimation';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const visibleElements = useScrollAnimation();

  const faqs = [
    {
      question: "How does the pricing work?",
      answer: "Our pricing is transparent and flexible. Choose from our three tiers based on your needs, with the ability to upgrade or downgrade at any time."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to get started."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide 24/7 customer support through chat, email, and phone. Our premium plans include dedicated account managers."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely. You can cancel your subscription at any time with no hidden fees or penalties. Your access continues until the end of your billing period."
    }
  ];

  return (
    <section id="faq" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="faq-header"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${visibleElements.has('faq-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Frequently Asked
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Questions</span>
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Everything you need to know about our platform and services.
          </p>
        </div>
        
        <div 
          id="faq-items"
          data-animate
          className={`transition-all duration-1000 delay-300 ${visibleElements.has('faq-items') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFAQ === index}
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
