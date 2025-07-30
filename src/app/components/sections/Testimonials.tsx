"use client"
import { useState, useEffect } from "react"
import type React from "react"

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useScrollAnimation } from "@/app/components/hooks/useScrollAnimation"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    content:
      "ADmyBRAND AI Suite transformed our marketing strategy completely. We saw a 300% increase in engagement within the first month.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
    companyLogo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=40&fit=crop",
  },
  {
    name: "Marcus Rodriguez",
    role: "CEO",
    company: "GrowthLab",
    content:
      "The AI-powered insights are incredible. We can now predict customer behavior with 95% accuracy and optimize campaigns in real-time.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    companyLogo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop",
  },
  {
    name: "Emily Watson",
    role: "Brand Manager",
    company: "Creative Studios",
    content:
      "Finally, a tool that understands our brand voice. The content generation feature saves us 20+ hours per week while maintaining quality.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    companyLogo: "https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?w=120&h=40&fit=crop",
  },
  {
    name: "David Kim",
    role: "VP of Marketing",
    company: "InnovateCorp",
    content:
      "The automation capabilities are game-changing. We've reduced manual work by 80% while improving campaign performance.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    companyLogo: "https://images.unsplash.com/photo-1611095973362-4c5cd1b4c4b3?w=120&h=40&fit=crop",
  },
  {
    name: "Lisa Thompson",
    role: "Digital Marketing Lead",
    company: "FutureScale",
    content:
      "ADmyBRAND's predictive analytics helped us identify new market opportunities. The platform pays for itself within the first month.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
    companyLogo: "https://images.unsplash.com/photo-1611095790632-b5d7c4c6c4b3?w=120&h=40&fit=crop",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const visibleElements = useScrollAnimation()

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextTestimonial()
    } else if (isRightSwipe) {
      prevTestimonial()
    }
  }

  return (
    <section id="testimonials" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="testimonials-header"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${visibleElements.has("testimonials-header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Loved by
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Marketing Teams
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join thousands of successful brands who trust ADmyBRAND AI Suite to power their marketing success.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          id="testimonials-carousel"
          data-animate
          className={`relative transition-all duration-1000 delay-300 ${visibleElements.has("testimonials-carousel") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Main Carousel */}
          <div
            className="relative overflow-hidden rounded-3xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500 group max-w-2xl mx-auto">
                    {/* Background gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative text-center">
                      {/* Profile section*/}
                      <div className="flex flex-col items-center mb-6">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={`${testimonial.name} - ${testimonial.role} at ${testimonial.company}`}
                          className="w-16 h-16 rounded-full border-3 border-white/20 shadow-xl mb-4 object-cover"
                        />
                        <div>
                          <div className="font-bold text-lg text-white mb-1">{testimonial.name}</div>
                          <div className="text-sm text-white/70 mb-2">
                            {testimonial.role} at {testimonial.company}
                          </div>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      {/* Content */}
                      <div className="relative">
                        <Quote className="w-8 h-8 text-blue-400/30 mb-3 mx-auto" />
                        <p className="text-base text-white/90 leading-relaxed font-medium max-w-md mx-auto">
                          "{testimonial.content}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
          <button
            onClick={prevTestimonial}
            className="hidden lg:flex absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors duration-300" />
          </button>

          <button
            onClick={nextTestimonial}
            className="hidden lg:flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors duration-300" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-blue-400 to-purple-400 scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-500"
                style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex lg:hidden justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3 transition-all duration-300 hover:scale-105 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors duration-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3 transition-all duration-300 hover:scale-105 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors duration-300" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div
          id="testimonials-stats"
          data-animate
          className={`mt-16 transition-all duration-1000 delay-500 ${visibleElements.has("testimonials-stats") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                50K+
              </div>
              <div className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                Happy Customers
              </div>
            </div>
            <div className="text-center group">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                4.9/5
              </div>
              <div className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                Average Rating
              </div>
            </div>
            <div className="text-center group">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                300%
              </div>
              <div className="text-white/70 group-hover:text-white/90 transition-colors duration-300">ROI Increase</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-white/70 group-hover:text-white/90 transition-colors duration-300">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
