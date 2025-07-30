"use client"
import { Brain, Zap, Target, BarChart3, Palette, MessageSquare } from "lucide-react"
import { useScrollAnimation } from "@/app/components/hooks/useScrollAnimation"

const features = [
  {
    icon: Brain,
    title: "AI Content Generation",
    description: "Create compelling copy, visuals, and campaigns with advanced AI that understands your brand voice.",
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    icon: Target,
    title: "Smart Targeting",
    description: "Reach the right audience with precision targeting powered by machine learning algorithms.",
    gradient: "from-purple-400 to-pink-400",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights into campaign performance with real-time analytics and predictive modeling.",
    gradient: "from-cyan-400 to-blue-400",
  },
  {
    icon: Palette,
    title: "Brand Consistency",
    description: "Maintain perfect brand consistency across all channels with AI-powered brand guidelines.",
    gradient: "from-pink-400 to-purple-400",
  },
  {
    icon: Zap,
    title: "Automation Suite",
    description: "Automate repetitive tasks and workflows to focus on strategy and creative excellence.",
    gradient: "from-yellow-400 to-orange-400",
  },
  {
    icon: MessageSquare,
    title: "Customer Insights",
    description: "Understand your customers better with AI-driven sentiment analysis and behavior prediction.",
    gradient: "from-green-400 to-teal-400",
  },
]

export default function FeaturesSection() {
  const visibleElements = useScrollAnimation()

  return (
    <section id="features" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="features-header"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${visibleElements.has("features-header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Powerful AI Features for
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Modern Marketing
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Transform your marketing strategy with cutting-edge AI tools designed to elevate your brand and drive
            unprecedented growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              id={`feature-${index}`}
              data-animate
              className={`group transition-all duration-1000 ${visibleElements.has(`feature-${index}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>

                <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
