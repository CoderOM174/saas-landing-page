"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sparkles } from "lucide-react"
import Button from "@/app/components/ui/Button"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = ["Features", "Pricing", "Testimonials", "FAQ", "Contact"]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase())
    if (element) {
      const navHeight = 80 // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    // Close mobile menu after clicking
    setMobileMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    setMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-2xl"
          : "bg-white/5 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button onClick={scrollToTop} className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-blue-400 group-hover:text-purple-400 transition-colors duration-300" />
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg group-hover:bg-purple-400/20 transition-colors duration-300" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              ADmyBRAND AI Suite
            </span>
          </button>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative text-white/80 hover:text-white transition-all duration-300 group py-2 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          <div className="hidden md:flex space-x-4">
            <Button variant="secondary" size="sm" className="backdrop-blur-sm cursor-pointer">
              Login
            </Button>
            <Button variant="primary" size="sm" className="shadow-lg shadow-blue-500/25 cursor-pointer">
              Start Free Trial
            </Button>
          </div>

          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          mobileMenuOpen ? "max-h-110 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/10 backdrop-blur-xl border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-white/80 hover:text-white transition-all duration-300 py-2 px-4 rounded-lg hover:bg-white/10 cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item}
              </button>
            ))}
            <div className="flex flex-col space-y-3 pt-4">
              <Button variant="secondary" size="sm" className="backdrop-blur-sm">
                Login
              </Button>
              <Button variant="primary" size="sm" className="shadow-lg shadow-blue-500/25">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
