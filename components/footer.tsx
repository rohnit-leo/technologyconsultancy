"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, MessageCircle, Clock, Shield, Award, Users, UserCheck, ExternalLink } from "lucide-react"

const services = [
  "Computer Sales & Support",
  "Laptop Sales & Repairs",
  "CCTV Systems & Security",
  "Attendance Systems & Biometric",
  "Network Setup & Infrastructure",
  "Data Recovery & Backup",
  "Printer Support & Maintenance",
  "Technical Support & AMC",
]

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export default function Footer() {
  const handleWhatsAppContact = () => {
    const message = "Hi! I'd like to know more about your IT services and get a free consultation."
    const whatsappUrl = `https://wa.me/919823707997?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>

      {/* Main Footer */}
      <div className="relative container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 lg:mb-6 group">
              <img
                src="/logo.png"
                alt="Technology Consultancy Logo"
                className="h-10 w-auto md:h-12 lg:h-16 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            <p className="text-gray-300 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">
              Goa's most trusted IT service provider offering comprehensive technology solutions for homes and
              businesses. Expert repairs, installations, and 24/7 support services.
            </p>

            <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-4 lg:mb-6">
              <div className="flex items-center gap-2">
                <Users className="h-3 w-3 lg:h-4 lg:w-4 text-cyan-400" />
                <span className="text-xs lg:text-sm">500+ Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-3 w-3 lg:h-4 lg:w-4 text-cyan-400" />
                <span className="text-xs lg:text-sm">5+ Years</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-3 w-3 lg:h-4 lg:w-4 text-cyan-400" />
                <span className="text-xs lg:text-sm">6M Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="h-3 w-3 lg:h-4 lg:w-4 text-cyan-400" />
                <span className="text-xs lg:text-sm">24/7 Support</span>
              </div>
            </div>

            <Button
              onClick={handleWhatsAppContact}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-sm lg:text-base"
            >
              <MessageCircle className="mr-2 h-3 w-3 lg:h-4 lg:w-4" />
              WhatsApp Us Now
            </Button>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-base lg:text-lg mb-4 lg:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Our Services
            </h3>
            <ul className="space-y-2 lg:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2 group text-sm lg:text-base"
                  >
                    <div className="w-1 h-1 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base lg:text-lg mb-4 lg:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Quick Links
            </h3>
            <ul className="space-y-2 lg:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center gap-2 text-sm lg:text-base"
                  >
                    <div className="w-1 h-1 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 lg:mt-8">
              <h4 className="font-semibold mb-3 lg:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-sm lg:text-base">
                Business Hours
              </h4>
              <div className="space-y-2 text-xs lg:text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Clock className="h-3 w-3 lg:h-4 lg:w-4 text-cyan-400" />
                  <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3 w-3 lg:h-4 lg:w-4 text-cyan-400" />
                  <span>Sunday: 10:00 AM - 5:00 PM</span>
                </div>
                <div className="text-cyan-400 text-xs mt-2 font-medium">🚨 Emergency support available 24/7</div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-base lg:text-lg mb-4 lg:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Contact Info
            </h3>
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold mb-1 text-sm lg:text-base">Phone Numbers</div>
                  <div className="text-gray-300 text-xs lg:text-sm space-y-1">
                    <div>Primary: +91 98237 07997</div>
                    <div>Alternate: +91 82089 45133</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold mb-1 text-sm lg:text-base">Email</div>
                  <div className="text-gray-300 text-xs lg:text-sm">ashane10@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold mb-1 text-sm lg:text-base">Address</div>
                  <div className="text-gray-300 text-xs lg:text-sm leading-relaxed">
                    Ground Floor House No. R/57/2-A,
                    <br />
                    Opp. Sateri Temple, Ucassaim,
                    <br />
                    Guirim, Durgavado, Goa – 403507
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 lg:mt-6 p-3 lg:p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
              <div className="text-xs lg:text-sm text-center">
                <div className="font-semibold text-cyan-400 mb-2">Need Immediate Help?</div>
                <Button
                  size="sm"
                  onClick={handleWhatsAppContact}
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-lg text-xs lg:text-sm"
                >
                  <MessageCircle className="mr-2 h-3 w-3 lg:h-4 lg:w-4" />
                  WhatsApp Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4 py-4 lg:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs lg:text-sm text-gray-300">© 2025 Technology Consultancy. All rights reserved.</div>

            {/* NextureX Credit */}
            <div className="flex items-center gap-2">
              <span className="text-xs lg:text-sm text-gray-300">Developed by</span>
              <Link
                href="https://nexturex.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 font-bold text-xs lg:text-sm hover:from-cyan-300 hover:via-blue-300 hover:to-purple-300 transition-all duration-300 group"
              >
                NextureX
                <ExternalLink className="h-3 w-3 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
              </Link>
            </div>

            <div className="flex items-center gap-4 lg:gap-6 text-xs lg:text-sm text-gray-300">
              <span className="flex items-center gap-1">
                <Shield className="h-3 w-3 text-cyan-400" />
                Serving all areas across Goa
              </span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1">
                <Award className="h-3 w-3 text-cyan-400" />
                Professional IT Services
              </span>
              <span className="hidden lg:inline">•</span>
              <span className="flex items-center gap-1 hidden lg:flex">
                <UserCheck className="h-3 w-3 text-cyan-400" />
                6-Month Warranty
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
