import React from 'react';
import { Check } from 'lucide-react';
import Card from './Card';
import Button from './Button';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export default function PricingCard({ 
  name, 
  price, 
  period, 
  features, 
  popular = false, 
  ctaText 
}: PricingCardProps) {
  return (
    <Card className={`text-center relative ${popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">${price}</span>
        <span className="text-white/60">/{period}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-white/80">
            <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <Button variant={popular ? "primary" : "secondary"} className="w-full">
        {ctaText}
      </Button>
    </Card>
  );
}
