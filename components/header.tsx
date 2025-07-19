"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MessageCircle, Home, Settings, BookOpen, Sparkles } from "lucide-react"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Settings },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Contact", href: "/contact", icon: MessageCircle },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleWhatsAppContact = () => {
    const message = "Hi! I'd like to know more about your IT services and get a free consultation."
    const whatsappUrl = `https://wa.me/919823707997?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Technology Consultancy Logo"
              className="h-10 w-auto md:h-12 lg:h-14 object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium group relative"
              >
                <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              onClick={handleWhatsAppContact}
              className="border-gray-600 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 hover:border-cyan-400 bg-transparent transition-all duration-300"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
            <Button
              onClick={handleWhatsAppContact}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              <span className="hidden lg:inline">WhatsApp</span>
              <Sparkles className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-gray-300 hover:text-cyan-400 hover:bg-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700 bg-gray-900/95 backdrop-blur-sm">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2 px-2 rounded-lg hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-700">
                <Button
                  variant="outline"
                  onClick={handleWhatsAppContact}
                  className="justify-start border-gray-600 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 hover:border-cyan-400 bg-transparent"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
                <Button
                  onClick={handleWhatsAppContact}
                  className="justify-start bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
