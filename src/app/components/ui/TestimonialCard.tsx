import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import Card from './Card';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export default function TestimonialCard({ 
  name, 
  role, 
  company, 
  content, 
  avatar, 
  rating 
}: TestimonialCardProps) {
  return (
    <Card className="text-center min-w-[300px] mx-4">
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
        ))}
      </div>
      <p className="text-white/90 mb-6 italic leading-relaxed">"{content}"</p>
      <div className="flex items-center justify-center">
        <Image 
          src={avatar} 
          alt={name} 
          width={48}
          height={48}
          className="rounded-full mr-4 border-2 border-white/20" 
        />
        <div className="text-left">
          <div className="text-white font-semibold">{name}</div>
          <div className="text-white/60 text-sm">{role} at {company}</div>
        </div>
      </div>
    </Card>
  );
}