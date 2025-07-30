'use client';

import React from 'react';
import PricingCard from '@/app/components/ui/PricingCard';
import { useScrollAnimation } from '@/app/components/hooks/useScrollAnimation';

export default function PricingSection() {
  const visibleElements = useScrollAnimation();

  const pricingPlans = [
    {
      name: "Starter",
      price: "29",
      period: "month",
      features: [
        "Up to 5 team members",
        "10GB storage",
        "Basic analytics",
        "Email support",
        "Core integrations"
      ],
      ctaText: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "79",
      period: "month",
      features: [
        "Up to 25 team members",
        "100GB storage",
        "Advanced analytics",
        "Priority support",
        "All integrations",
        "Custom workflows",
        "API access"
      ],
      ctaText: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "199",
      period: "month",
      features: [
        "Unlimited team members",
        "Unlimited storage",
        "White-label solution",
        "24/7 phone support",
        "Custom integrations",
        "Advanced security",
        "Dedicated manager"
      ],
      ctaText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="pricing-header"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${visibleElements.has('pricing-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Choose Your
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Perfect Plan</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Flexible pricing that scales with your business. Start free and upgrade as you grow.
          </p>
        </div>
        
        <div 
          id="pricing-cards"
          data-animate
          className={`grid md:grid-cols-3 gap-8 max-w-5xl mx-auto transition-all duration-1000 delay-300 ${visibleElements.has('pricing-cards') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}