'use client';

import React, { useState, useEffect } from 'react';
import TestimonialCard from '@/app/components/ui/TestimonialCard';
import { useScrollAnimation } from '@/app/components/hooks/useScrollAnimation';

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const visibleElements = useScrollAnimation();

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechCorp",
      content: "This platform transformed our business operations completely. The results exceeded our expectations.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "CTO",
      company: "InnovateLab",
      content: "Outstanding support and incredible features. Our productivity increased by 300% in just 2 months.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "StartupXYZ",
      content: "The best investment we've made for our company. Intuitive, powerful, and reliable.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="testimonials-header"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${visibleElements.has('testimonials-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Customers Say</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have transformed their businesses with our platform.
          </p>
        </div>
        
        <div 
          id="testimonials-carousel"
          data-animate
          className={`transition-all duration-1000 delay-300 ${visibleElements.has('testimonials-carousel') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 flex justify-center">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial ? 'bg-blue-500' : 'bg-white/30'
                }`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}