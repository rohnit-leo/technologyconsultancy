"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Monitor,
  Laptop,
  Shield,
  Wrench,
  HardDrive,
  Wifi,
  Phone,
  Mail,
  Star,
  ArrowRight,
  CheckCircle,
  Zap,
  Users,
  Award,
  Clock,
  UserCheck,
  Camera,
  Sparkles,
  TrendingUp,
  Globe,
  Headphones,
  Settings,
  ChevronRight,
  Building,
  Home,
  Factory,
  ShoppingCart,
  PlayCircle,
  MessageCircle,
  Cpu,
  Database,
  Network,
  Lock,
} from "lucide-react"
import AnnouncementBar from "@/components/announcement-bar"
import Header from "@/components/header"
import Footer from "@/components/footer"

const services = [
  {
    icon: Monitor,
    title: "Computer Sales & Support",
    description:
      "High-quality computers, custom builds, and comprehensive support services for personal and business needs.",
    image: "/images/computer-components.jpg",
    color: "from-blue-600 to-cyan-500",
    features: ["Custom PC Builds", "Business Workstations", "Gaming Systems"],
    bgPattern: "bg-blue-50",
  },
  {
    icon: Laptop,
    title: "Laptop Sales & Repairs",
    description: "Professional laptop repair services with quick turnaround times and comprehensive warranty support.",
    image: "/images/laptop-components.jpg",
    color: "from-purple-600 to-pink-500",
    features: ["Screen Replacement", "Motherboard Repair", "Data Recovery"],
    bgPattern: "bg-purple-50",
  },
  {
    icon: Shield,
    title: "CCTV Systems & Security",
    description:
      "Advanced security solutions with HD cameras, remote monitoring, and professional installation services.",
    image: "/images/security-cameras.jpg",
    color: "from-emerald-600 to-teal-500",
    features: ["4K Cameras", "Night Vision", "Remote Monitoring"],
    bgPattern: "bg-emerald-50",
  },
  {
    icon: UserCheck,
    title: "Attendance & Biometric Systems",
    description: "Modern biometric attendance systems, access control, and time tracking solutions for businesses.",
    image: "/images/biometric-scanner.jpg",
    color: "from-orange-600 to-amber-500",
    features: ["Fingerprint Systems", "Face Recognition", "Card Access"],
    bgPattern: "bg-orange-50",
  },
  {
    icon: Wifi,
    title: "Network Setup & Infrastructure",
    description: "Complete network solutions, WiFi setup, and IT infrastructure planning for seamless connectivity.",
    image: "/images/network-infrastructure.jpg",
    color: "from-cyan-600 to-blue-500",
    features: ["Enterprise WiFi", "Network Security", "Server Setup"],
    bgPattern: "bg-cyan-50",
  },
  {
    icon: HardDrive,
    title: "Data Recovery & Backup",
    description: "Professional data recovery services and automated backup solutions to protect valuable information.",
    image: "/images/service-center.jpg",
    color: "from-red-600 to-rose-500",
    features: ["RAID Recovery", "Cloud Backup", "Disaster Recovery"],
    bgPattern: "bg-red-50",
  },
]

const stats = [
  { icon: Users, number: "500+", label: "Happy Clients", color: "from-blue-600 to-cyan-500", bg: "bg-blue-100" },
  {
    icon: Wrench,
    number: "1000+",
    label: "Repairs Completed",
    color: "from-emerald-600 to-teal-500",
    bg: "bg-emerald-100",
  },
  { icon: Award, number: "5+", label: "Years Experience", color: "from-purple-600 to-pink-500", bg: "bg-purple-100" },
  { icon: Star, number: "4.9", label: "Customer Rating", color: "from-amber-600 to-orange-500", bg: "bg-amber-100" },
]

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Business Owner",
    content:
      "Excellent CCTV installation service! Professional team and great after-sales support. Highly recommended!",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80&text=RS",
    company: "Sharma Enterprises",
  },
  {
    name: "Priya Desai",
    role: "Home User",
    content: "Quick laptop repair service. Fixed my laptop in just 2 hours with warranty! Amazing experience.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80&text=PD",
    company: "Residential Client",
  },
  {
    name: "Tech Solutions Pvt Ltd",
    role: "Corporate Client",
    content: "Reliable IT support for our office network. Professional service and competitive pricing. Great team!",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80&text=TS",
    company: "IT Company",
  },
]

const features = [
  {
    icon: Clock,
    title: "24/7 Emergency Support",
    description: "Round-the-clock technical support",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Guaranteed Satisfaction",
    description: "Your peace of mind is our priority",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Expert Technicians",
    description: "Certified professionals",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "Latest Technology",
    description: "Cutting-edge solutions",
    color: "from-orange-500 to-amber-500",
  },
]

const industries = [
  {
    icon: Building,
    title: "Corporate Offices",
    description: "Complete IT infrastructure for businesses",
    image: "/placeholder.svg?height=60&width=60&text=Corp",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Home,
    title: "Residential",
    description: "Home security and computer solutions",
    image: "/placeholder.svg?height=60&width=60&text=Home",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Factory,
    title: "Industrial",
    description: "Robust systems for manufacturing",
    image: "/placeholder.svg?height=60&width=60&text=Ind",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: ShoppingCart,
    title: "Retail",
    description: "POS systems and security solutions",
    image: "/placeholder.svg?height=60&width=60&text=Ret",
    color: "from-orange-500 to-amber-500",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Contact & Consultation",
    description: "Reach out via WhatsApp or call for free consultation",
    icon: Phone,
    color: "from-blue-500 to-cyan-500",
  },
  {
    step: "02",
    title: "Assessment & Quote",
    description: "Our experts assess your needs and provide detailed quote",
    icon: Settings,
    color: "from-emerald-500 to-teal-500",
  },
  {
    step: "03",
    title: "Professional Service",
    description: "Certified technicians deliver quality service with warranty",
    icon: Wrench,
    color: "from-purple-500 to-pink-500",
  },
  {
    step: "04",
    title: "Ongoing Support",
    description: "24/7 support and maintenance for peace of mind",
    icon: Headphones,
    color: "from-orange-500 to-amber-500",
  },
]

const techStack = [
  { icon: Cpu, name: "Hardware", color: "from-blue-500 to-cyan-500" },
  { icon: Database, name: "Storage", color: "from-emerald-500 to-teal-500" },
  { icon: Network, name: "Networking", color: "from-purple-500 to-pink-500" },
  { icon: Lock, name: "Security", color: "from-orange-500 to-amber-500" },
  { icon: Camera, name: "CCTV Surveillance", color: "from-green-550 to-lime-500" }, // Added CCTV Surveillance
]

export default function HomePage() {
  const [currentStat, setCurrentStat] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleWhatsAppContact = (service?: string) => {
    const message = service
      ? `Hi! I'm interested in ${service}. Please provide more details and pricing.`
      : "Hi! I'd like to know more about your IT services and get a free consultation."
    const whatsappUrl = `https://wa.me/919823707997?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <AnnouncementBar
        messages={[
          "🎉 Special Offer: 20% OFF on all CCTV installations + Free AMC for 1 year!",
          "💻 Free diagnostic check for all laptop repairs - Same day service available!",
          "🔧 Professional computer repair services with 6-month warranty guarantee!",
          "📱 New: Biometric attendance systems starting from ₹8,000 - Call now!",
          "⚡ Emergency IT support available 24/7 - We're always here to help!",
          "🏆 Goa's #1 rated IT service provider with 500+ satisfied customers!",
        ]}
      />

      <Header />

      {/* Fixed Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-cyan-500/30 to-purple-600/30"></div>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-400/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-32 w-48 h-48 bg-blue-400/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-purple-400/40 rounded-full blur-3xl animate-pulse delay-2000"></div>
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-emerald-400/40 rounded-full blur-3xl animate-pulse delay-3000"></div>
          </div>

          {/* Floating Tech Icons */}
          <div className="absolute inset-0 overflow-hidden">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className={`absolute animate-float bg-gradient-to-r ${tech.color} p-3 rounded-2xl shadow-2xl opacity-20`}
                style={{
                  top: `${20 + index * 15}%`,
                  left: `${10 + index * 20}%`,
                  animationDelay: `${index * 0.5}s`,
                }}
              >
                <tech.icon className="h-6 w-6 text-white" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-10">
              <div className="space-y-4 lg:space-y-8">
                <div className="flex items-center gap-3">
                  <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0 px-4 py-2 text-sm animate-pulse-glow">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Goa's #1 IT Service Provider
                  </Badge>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold leading-tight">
                  <span className="block text-white animate-fade-in">Transform Your</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-fade-in delay-300">
                    Digital Future
                  </span>
                  <span className="block text-lg sm:text-xl lg:text-2xl xl:text-4xl text-gray-300 font-normal mt-4 animate-fade-in delay-600">
                    with Expert IT Solutions
                  </span>
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed animate-fade-in delay-900">
                  From cutting-edge computer repairs to advanced security systems, we deliver technology solutions that
                  <span className="text-cyan-400 font-semibold"> power your success</span> and
                  <span className="text-blue-400 font-semibold"> secure your future</span>.
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-3 animate-fade-in delay-1200">
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-2 bg-gradient-to-r ${tech.color} px-4 py-2 rounded-full text-white text-sm font-medium shadow-lg hover:scale-105 transition-transform duration-300`}
                    >
                      <tech.icon className="h-4 w-4" />
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 animate-fade-in delay-1500">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-4 text-lg shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 group"
                  onClick={() => handleWhatsAppContact()}
                >
                  <Phone className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Get Free Consultation
                  <Sparkles className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/40 text-white hover:bg-white hover:text-gray-900 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg group"
                  asChild
                >
                  <Link href="/services">
                    <PlayCircle className="mr-2 h-5 w-5 group-hover:animate-spin" />
                    Watch Demo
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 pt-8 animate-fade-in delay-1800">
                {features.map((feature, index) => (
                  <div key={index} className="text-center group">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-3 shadow-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                    </div>
                    <div className="text-sm lg:text-base font-bold text-white">{feature.title}</div>
                    <div className="text-xs lg:text-sm text-gray-400 mt-1">{feature.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fixed Hero Visual - Removed white borders */}
            <div className="relative animate-fade-in delay-1000">
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-6 lg:p-10 border border-white/10 shadow-2xl">
                  <div className="relative">
                    <img
                      src="/images/service-center.jpg"
                      alt="Technology Consultancy Professional Service Center"
                      className="w-full h-64 sm:h-80 lg:h-96 rounded-2xl shadow-2xl object-cover border-0"
                    />

                    {/* Fixed Floating Action Buttons - No white borders */}
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-4 shadow-2xl animate-bounce border-0">
                      <Camera className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-4 shadow-2xl animate-bounce delay-500 border-0">
                      <UserCheck className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                    </div>
                    <div className="absolute top-1/2 -right-6 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-3 shadow-2xl animate-bounce delay-1000 border-0">
                      <Shield className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                    </div>

                    {/* Live Status Indicator */}
                    <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 animate-pulse border-0">
                      <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                      Live Support
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Background Effects */}
              <div className="absolute -top-8 -right-8 w-72 h-72 bg-gradient-to-r from-cyan-400/40 to-blue-400/40 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -left-12 w-48 h-48 bg-gradient-to-r from-emerald-400/40 to-teal-400/40 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>
          </div>
        </div>
      </section>

      <AnnouncementBar
        messages={[
          "📱 WhatsApp us at +91 98237 07997 for instant support and quick quotes!",
          "🏠 Visit our office in Ucassaim, Guirim, Goa for free consultation!",
          "⚡ Emergency IT support available 24/7 - We're always here to help!",
          "🎯 Serving all major areas across Goa with on-site services!",
          "🔒 Secure your business with our advanced CCTV and biometric systems!",
          "💾 Professional data recovery services with 95% success rate!",
        ]}
      />

      {/* Reverted Premium IT Solutions Section - Back to 2 columns mobile */}
      <section className="py-16 lg:py-28 bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-purple-600/10"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 lg:mb-24">
            <Badge className="mb-6 lg:mb-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0 px-6 py-3 text-base animate-pulse-glow">
              <Headphones className="mr-2 h-5 w-5" />
              Premium IT Services
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 lg:mb-10">
              Complete Technology
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 animate-gradient">
                Ecosystem
              </span>
            </h2>
            <p className="text-lg lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
              From basic computer repairs to advanced security systems and biometric solutions, we provide a
              <span className="text-blue-600 font-semibold"> comprehensive technology ecosystem </span>
              that grows with your business needs and secures your digital future.
            </p>
          </div>

          {/* Reverted Services Grid - 2 columns on mobile, 3 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-0 bg-white/90 backdrop-blur-sm overflow-hidden relative ${service.bgPattern} hover:bg-white`}
              >
                {/* Gradient Top Border */}
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${service.color}`}></div>

                {/* Corner Decoration */}
                <div
                  className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-r ${service.color} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                ></div>

                <div className="p-3 lg:p-6">
                  {/* Service Image with Enhanced Effects */}
                  <div className="relative overflow-hidden rounded-lg lg:rounded-xl mb-3 lg:mb-4 group-hover:shadow-2xl transition-shadow duration-300">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-24 sm:h-32 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Overlay with Icon */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="absolute top-2 left-2 lg:top-3 lg:left-3">
                      <div
                        className={`w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-r ${service.color} rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon className="h-4 w-4 lg:h-6 lg:w-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="space-y-2 lg:space-y-4">
                    <div>
                      <h3 className="text-sm lg:text-xl font-bold text-gray-900 mb-1 lg:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs lg:text-sm text-gray-600 leading-relaxed mb-2 lg:mb-4 hidden lg:block">
                        {service.description}
                      </p>
                    </div>

                    {/* Enhanced Features */}
                    <div className="space-y-1 lg:space-y-2">
                      <h4 className="font-semibold text-gray-900 text-xs lg:text-sm flex items-center gap-1 lg:gap-2">
                        <Sparkles className="h-3 w-3 lg:h-4 lg:w-4 text-blue-500" />
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-1 gap-1">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 group/feature">
                            <div
                              className={`w-4 h-4 lg:w-6 lg:h-6 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-300`}
                            >
                              <CheckCircle className="h-2 w-2 lg:h-3 lg:w-3 text-white" />
                            </div>
                            <span className="text-xs lg:text-sm text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Action Buttons */}
                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-3 pt-2 lg:pt-4">
                      <Button
                        size="sm"
                        className={`flex-1 bg-gradient-to-r ${service.color} hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 group/btn text-xs lg:text-sm py-1.5 lg:py-2`}
                        onClick={() => handleWhatsAppContact(service.title)}
                      >
                        <Phone className="mr-1 lg:mr-2 h-3 w-3 lg:h-4 lg:w-4 group-hover/btn:animate-bounce" />
                        Get Quote
                        <Sparkles className="ml-1 lg:ml-2 h-3 w-3 lg:h-4 lg:w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 hover:bg-gray-50 border bg-transparent group/btn2 text-xs lg:text-sm py-1.5 lg:py-2"
                        onClick={() => handleWhatsAppContact(`${service.title} - Need more information`)}
                      >
                        <MessageCircle className="mr-1 lg:mr-2 h-3 w-3 lg:h-4 lg:w-4 group-hover/btn2:animate-pulse" />
                        <span className="hidden sm:inline">Learn More</span>
                        <span className="sm:hidden">Info</span>
                        <ArrowRight className="ml-1 lg:ml-2 h-3 w-3 lg:h-4 lg:w-4 group-hover/btn2:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 lg:mt-20">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-2xl hover:shadow-blue-500/50 px-10 py-4 text-lg font-bold group"
              asChild
            >
              <Link href="/services">
                <Globe className="mr-2 h-6 w-6 group-hover:animate-spin" />
                Explore All Services
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Industries Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-cyan-500/5 to-purple-600/5"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12 lg:mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-6 py-3">
              <Building className="mr-2 h-4 w-4" />
              Industries We Serve
            </Badge>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
              Trusted Across
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                All Industries
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
              From small businesses to large enterprises, we provide tailored IT solutions that drive success across
              every industry sector.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="group text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/80 backdrop-blur-sm overflow-hidden relative"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${industry.color}`}></div>

                <CardContent className="p-6 lg:p-10">
                  <div className="relative mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${industry.color} rounded-3xl shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <industry.icon className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                    </div>

                    {/* Small placeholder image for mobile */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 lg:w-10 lg:h-10 rounded-full overflow-hidden border-2 border-white shadow-lg">
                      <img
                        src={industry.image || "/placeholder.svg"}
                        alt={industry.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <h3 className="text-base lg:text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{industry.description}</p>

                  <Button
                    size="sm"
                    variant="outline"
                    className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-transparent"
                    onClick={() => handleWhatsAppContact(`${industry.title} solutions`)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 via-blue-50/50 to-cyan-50/50"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12 lg:mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0 px-6 py-3">
              <Settings className="mr-2 h-4 w-4" />
              Our Process
            </Badge>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
              How We
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Transform Ideas
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
              Our streamlined process ensures seamless delivery from initial consultation to ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="text-center">
                  <div
                    className={`relative inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r ${step.color} rounded-full mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-black font-bold text-sm shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-base lg:text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full z-10">
                    <div className="flex items-center justify-center">
                      <ChevronRight className="h-6 w-6 text-gray-300" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Animated Stats Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-white/10 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-6 py-3">
              <Award className="mr-2 h-4 w-4" />
              Our Achievements
            </Badge>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              Trusted by
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Thousands
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that showcase our commitment to excellence and customer satisfaction across Goa.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 group ${
                  currentStat === index ? "scale-110" : "scale-100"
                }`}
              >
                <div
                  className={`relative inline-flex items-center justify-center w-20 h-20 lg:w-28 lg:h-28 bg-gradient-to-r ${stat.color} rounded-3xl mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="h-8 w-8 lg:h-12 lg:w-12 text-white" />

                  {/* Pulse Ring */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${stat.color} animate-ping opacity-20`}
                  ></div>
                </div>

                <div className="text-3xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-lg text-gray-300 font-medium">{stat.label}</div>

                {/* Progress Bar */}
                <div className="w-full bg-white/20 rounded-full h-1 mt-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 ${
                      currentStat === index ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12 lg:mb-20">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-6 py-3">
              <Users className="mr-2 h-4 w-4" />
              Client Testimonials
            </Badge>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              What Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Clients Say
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from satisfied customers who trust us with their technology needs across Goa.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-2xl border-white/20 text-white overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400"></div>

              <CardContent className="p-8 lg:p-12 text-center">
                <div className="flex justify-center mb-6 lg:mb-8">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 lg:h-8 lg:w-8 fill-yellow-400 text-yellow-400 mx-1" />
                  ))}
                </div>

                <blockquote className="text-xl lg:text-2xl xl:text-3xl font-medium mb-8 lg:mb-12 leading-relaxed italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                <div className="flex items-center justify-center gap-6">
                  <div className="relative">
                    <img
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-4 border-white/30 shadow-2xl"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                  </div>

                  <div className="text-left">
                    <div className="font-bold text-lg lg:text-xl">{testimonials[currentTestimonial].name}</div>
                    <div className="text-sm lg:text-base text-gray-300">{testimonials[currentTestimonial].role}</div>
                    <div className="text-xs lg:text-sm text-cyan-400 font-medium">
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-3 mt-8 lg:mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 ${
                    currentTestimonial === index
                      ? "bg-gradient-to-r from-purple-400 to-pink-400 scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fixed CTA Section - Proper Alignment */}
      <section className="py-16 lg:py-28 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30"></div>
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 lg:mb-8 bg-white/20 text-white border-white/30 px-6 py-3 text-base animate-pulse-glow">
              <Zap className="mr-2 h-5 w-5" />
              Ready to Transform?
            </Badge>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold mb-8 lg:mb-12 leading-tight">
              <span className="block">Start Your</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 animate-gradient">
                Digital Journey
              </span>
              <span className="block text-2xl lg:text-3xl xl:text-4xl font-normal text-blue-100 mt-4">Today</span>
            </h2>

            <p className="text-lg lg:text-2xl xl:text-3xl mb-12 lg:mb-16 text-blue-100 leading-relaxed max-w-5xl mx-auto">
              Join hundreds of satisfied customers who trust us with their IT needs. Get expert consultation,
              competitive pricing, and reliable service with our
              <span className="text-yellow-300 font-bold"> 6-month warranty guarantee</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 justify-center items-center mb-16 lg:mb-20">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-10 py-4 text-lg lg:text-xl shadow-2xl hover:shadow-white/50 transition-all duration-300 group"
                onClick={() => handleWhatsAppContact()}
              >
                <Phone className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                Call +91 98237 07997
                <Sparkles className="ml-3 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-white/10 backdrop-blur-sm px-10 py-4 text-lg lg:text-xl group"
                asChild
              >
                <Link href="/contact">
                  <MessageCircle className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                  WhatsApp Now
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Fixed Contact Grid - Proper Alignment */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 group">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Phone className="h-6 w-6 lg:h-8 lg:w-8 text-yellow-300" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-base lg:text-lg">Primary</div>
                  <div className="text-sm lg:text-base text-blue-100">+91 98237 07997</div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 group">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Phone className="h-6 w-6 lg:h-8 lg:w-8 text-yellow-300" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-base lg:text-lg">Alternate</div>
                  <div className="text-sm lg:text-base text-blue-100">+91 82089 45133</div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 group">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Mail className="h-6 w-6 lg:h-8 lg:w-8 text-yellow-300" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-base lg:text-lg">Email</div>
                  <div className="text-sm lg:text-base text-blue-100">ashane10@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
