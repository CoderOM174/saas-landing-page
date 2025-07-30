"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useScrollAnimation } from "@/app/components/hooks/useScrollAnimation"

const faqs = [
  {
    question: "How does ADmyBRAND AI Suite work?",
    answer:
      "Our AI Suite uses advanced machine learning algorithms to analyze your brand, audience, and market trends. It then generates personalized content, optimizes campaigns, and provides actionable insights to improve your marketing performance.",
  },
  {
    question: "Can I integrate with my existing marketing tools?",
    answer:
      "Yes! ADmyBRAND AI Suite integrates seamlessly with popular platforms like Google Ads, Facebook Ads, HubSpot, Salesforce, and many more. Our API also allows for custom integrations.",
  },
  {
    question: "Is there a free trial available?",
    answer: "We offer a 14-day free trial with full access to all features. No credit card required to get started.",
  },
  {
    question: "How accurate is the AI-generated content?",
    answer:
      "Our AI is trained on millions of high-performing marketing campaigns and maintains a 95% accuracy rate. All content is also reviewed by our quality assurance system before delivery.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer 24/7 support through chat, email, and phone. Professional and Enterprise plans include dedicated account managers and priority support.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your access will continue until the end of your current billing period.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const visibleElements = useScrollAnimation()

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="faq-header"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${visibleElements.has("faq-header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Frequently Asked
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-white/80">Everything you need to know about ADmyBRAND AI Suite</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              id={`faq-${index}`}
              data-animate
              className={`transition-all duration-1000 ${visibleElements.has(`faq-${index}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/60 flex-shrink-0" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-6">
                    <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
