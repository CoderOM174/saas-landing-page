import React from 'react';
import { LucideIcon } from 'lucide-react';
import Card from './Card';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="text-center group">
      <div className="mb-4 flex justify-center">
        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/80 leading-relaxed">{description}</p>
    </Card>
  );
}
