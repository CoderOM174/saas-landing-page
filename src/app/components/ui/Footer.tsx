"use client"
import Link from "next/link"
import { Sparkles, Twitter, Linkedin, Github, Mail } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    Product: ["Features", "Pricing", "API", "Integrations"],
    Company: ["About", "Blog", "Careers", "Press"],
    Resources: ["Documentation", "Help Center", "Community", "Status"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"],
  }

  return (
    <footer className="relative py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section - Takes 2 columns on large screens */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Sparkles className="w-8 h-8 text-blue-400" />
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                ADmyBRAND AI Suite
              </span>
            </Link>
            <p className="text-white/70 mb-6 max-w-md">
              Transform your marketing with AI-powered tools designed for modern brands. Join thousands of companies
              already scaling their success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-colors duration-300 group">
                <Twitter className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors duration-300" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-colors duration-300 group">
                <Linkedin className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors duration-300" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-colors duration-300 group">
                <Github className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-colors duration-300 group">
                <Mail className="w-5 h-5 text-white group-hover:text-purple-400 transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Links Sections - Each takes 1 column */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 inline-block transform transition-transform"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">© 2025 ADmyBRAND AI Suite. All rights reserved.</p>
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-white transition-colors duration-300">
                  Status
                </Link>
                <Link href="#" className="hover:text-white transition-colors duration-300">
                  Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
