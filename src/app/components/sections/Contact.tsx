"use client"
import { useState } from "react"
import type React from "react"

import { Mail, Phone, MapPin, Send, CheckCircle, X } from "lucide-react"
import Button from "@/app/components/ui/Button"
import { useScrollAnimation } from "@/app/components/hooks/useScrollAnimation"

interface FormData {
  firstName: string
  lastName: string
  email: string
  company: string
  message: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  company?: string
  message?: string
}

export default function ContactSection() {
  const visibleElements = useScrollAnimation()
  const [showAlert, setShowAlert] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required"
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
    })

    setErrors({})
    setIsSubmitting(false)
    setShowAlert(true)

    // Auto hide alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false)
    }, 5000)
  }

  const closeAlert = () => {
    setShowAlert(false)
  }

  return (
    <section id="contact" className="py-20 lg:py-32 relative">
      {/* Success Alert */}
      {showAlert && (
        <div className="fixed top-4 right-4 z-50 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-2xl shadow-2xl border border-green-400/20 backdrop-blur-sm animate-in slide-in-from-right duration-300">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-6 h-6 text-green-100" />
            <div>
              <div className="font-semibold">Message Sent Successfully!</div>
            </div>
            <button
              onClick={closeAlert}
              className="ml-4 text-green-100 hover:text-white transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="contact-header"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${visibleElements.has("contact-header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ready to Transform
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Your Marketing?
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Get in touch with our team to learn how ADmyBRAND AI Suite can revolutionize your marketing strategy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div
            id="contact-info"
            data-animate
            className={`transition-all duration-1000 ${visibleElements.has("contact-info") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-white/70">hello@admybrand.ai</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-white/70">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Office</div>
                    <div className="text-white/70">San Francisco</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="contact-form"
            data-animate
            className={`transition-all duration-1000 delay-300 ${visibleElements.has("contact-form") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      First Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full bg-white/10 border rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.firstName
                          ? "border-red-400 focus:border-red-400 focus:ring-red-400/20"
                          : "border-white/20 focus:border-blue-400 focus:ring-blue-400/20"
                      }`}
                      placeholder="John"
                    />
                    {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Last Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full bg-white/10 border rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.lastName
                          ? "border-red-400 focus:border-red-400 focus:ring-red-400/20"
                          : "border-white/20 focus:border-blue-400 focus:ring-blue-400/20"
                      }`}
                      placeholder="Doe"
                    />
                    {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-white/10 border rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.email
                        ? "border-red-400 focus:border-red-400 focus:ring-red-400/20"
                        : "border-white/20 focus:border-blue-400 focus:ring-blue-400/20"
                    }`}
                    placeholder="john@company.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Company <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={`w-full bg-white/10 border rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.company
                        ? "border-red-400 focus:border-red-400 focus:ring-red-400/20"
                        : "border-white/20 focus:border-blue-400 focus:ring-blue-400/20"
                    }`}
                    placeholder="Your Company"
                  />
                  {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full bg-white/10 border rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                      errors.message
                        ? "border-red-400 focus:border-red-400 focus:ring-red-400/20"
                        : "border-white/20 focus:border-blue-400 focus:ring-blue-400/20"
                    }`}
                    placeholder="Tell us about your marketing goals..."
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full group" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
