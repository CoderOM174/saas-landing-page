'use client';

import React from 'react';
import { Zap, Shield, Globe, Rocket, Users, BarChart3 } from 'lucide-react';
import FeatureCard from '@/app/components/ui/FeatureCard';
import { useScrollAnimation } from '@/app/components/hooks/useScrollAnimation';

export default function FeaturesSection() {
  const visibleElements = useScrollAnimation();

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology stack."
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your data is protected with enterprise-grade encryption and advanced security protocols."
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy worldwide with our global CDN and multi-region infrastructure for optimal performance."
    },
    {
      icon: Rocket,
      title: "Easy Integration",
      description: "Seamlessly connect with your existing tools through our comprehensive API and webhooks."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Empower your team with real-time collaboration tools and advanced permission management."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Make data-driven decisions with powerful analytics and customizable reporting dashboards."
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="features-header"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${visibleElements.has('features-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Modern Teams</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Everything you need to scale your business, streamline operations, and drive unprecedented growth.
          </p>
        </div>
        
        <div 
          id="features-grid"
          data-animate
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${visibleElements.has('features-grid') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}