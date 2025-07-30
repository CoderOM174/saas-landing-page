"use client"
import Image from "next/image"
import { ArrowRight, Play, Zap, Target, TrendingUp } from "lucide-react"
import Button from "@/app/components/ui/Button"
import { useScrollAnimation } from "@/app/components/hooks/useScrollAnimation"

interface HeroSectionProps {
  onStartTrial: () => void
}

export default function HeroSection({ onStartTrial }: HeroSectionProps) {
  const visibleElements = useScrollAnimation()

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div
            id="hero-content"
            data-animate
            className={`transition-all duration-1000 ${visibleElements.has("hero-content") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Premium badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-white/90">AI-Powered Marketing Revolution</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">Transform Your</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent block animate-gradient">
                Brand with AI
              </span>
            </h1>

            <p className="text-xl text-white/80 mb-8 max-w-lg leading-relaxed">
              Revolutionize your marketing strategy with our comprehensive AI suite. Create, optimize, and scale your
              brand presence like never before.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                onClick={onStartTrial}
                className="group shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 cursor-pointer"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="group backdrop-blur-sm border-white/20 hover:border-white/40 cursor-pointer"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </Button>
            </div>

            {/* Enhanced stats */}
            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                  50K+
                </div>
                <div className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                  Brands Transformed
                </div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                  300%
                </div>
                <div className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                  ROI Increase
                </div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">
                  24/7
                </div>
                <div className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                  AI Support
                </div>
              </div>
            </div>
          </div>

          <div
            id="hero-visual"
            data-animate
            className={`mt-16 lg:mt-0 transition-all duration-1000 delay-300 ${visibleElements.has("hero-visual") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative group">
              {/* Enhanced glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

              {/* Main dashboard image */}
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-1 shadow-2xl">
                <Image
                  src="/hero.png"
                  alt="ADmyBRAND AI Suite Dashboard showing marketing analytics, campaign performance, and AI-powered insights"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-xl"
                  priority
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-xl animate-float">
                <Target className="w-8 h-8 text-blue-400 mb-2" />
                <div className="text-sm font-semibold text-white">AI Targeting</div>
                <div className="text-xs text-white/60">+127% CTR</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-xl animate-float delay-1000">
                <TrendingUp className="w-8 h-8 text-purple-400 mb-2" />
                <div className="text-sm font-semibold text-white">Growth</div>
                <div className="text-xs text-white/60">+89% Revenue</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
