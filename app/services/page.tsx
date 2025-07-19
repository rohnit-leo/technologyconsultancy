"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Monitor,
  Laptop,
  Shield,
  Wrench,
  HardDrive,
  Printer,
  Wifi,
  Phone,
  CheckCircle,
  Star,
  ArrowRight,
  Settings,
  Zap,
  Clock,
  Award,
  UserCheck,
} from "lucide-react"
import AnnouncementBar from "@/components/announcement-bar"
import Header from "@/components/header"
import Footer from "@/components/footer"

const services = [
  {
    icon: Monitor,
    title: "Computer Sales & Support",
    description:
      "Providing a wide range of high-quality computers and laptops for personal and business needs. Offering exceptional after-sales support, including repair and maintenance services.",
    features: [
      "Desktop computers for home and office",
      "Business workstations and servers",
      "Custom PC builds and configurations",
      "Hardware upgrades and installations",
      "Performance optimization",
      "Regular maintenance services",
    ],
    color: "from-blue-500 to-blue-600",
    price: "Starting from ₹25,000",
    image: "/images/computer-components.jpg",
  },
  {
    icon: Laptop,
    title: "Laptop Sales & Repairs",
    description:
      "Professional laptop repair services and sales of latest models with comprehensive warranty support and quick turnaround times.",
    features: [
      "Screen replacement and repair",
      "Keyboard and touchpad fixes",
      "Battery replacement services",
      "Motherboard repair and diagnostics",
      "Software troubleshooting",
      "Data transfer and backup",
    ],
    color: "from-purple-500 to-purple-600",
    price: "Repairs from ₹500",
    image: "/images/laptop-motherboard-repair.jpg",
  },
  {
    icon: Shield,
    title: "CCTV Systems & Security Solutions",
    description:
      "Supplying advanced CCTV systems for home, office, and industrial security. Expert installation and maintenance services for optimal security coverage.",
    features: [
      "HD and 4K camera installations",
      "DVR/NVR system setup",
      "Remote monitoring solutions",
      "Night vision cameras",
      "Motion detection systems",
      "Mobile app integration",
    ],
    color: "from-green-500 to-green-600",
    price: "Packages from ₹15,000",
    image: "/images/cctv-installation.jpg",
  },
  {
    icon: Settings,
    title: "Customized IT Solutions",
    description:
      "Tailored technology solutions to meet the unique requirements of businesses and individuals. Consultation services to ensure seamless integration of IT infrastructure.",
    features: [
      "Network design and setup",
      "Server installation and configuration",
      "Cloud migration services",
      "IT infrastructure planning",
      "System integration",
      "Technology consulting",
    ],
    color: "from-orange-500 to-orange-600",
    price: "Custom quotes available",
    image: "/images/network-infrastructure.jpg",
  },
  {
    icon: Wrench,
    title: "Technical Support & Maintenance",
    description:
      "Comprehensive technical support for hardware and software issues. Regular maintenance services to ensure uninterrupted performance.",
    features: [
      "24/7 technical support",
      "Remote assistance available",
      "Preventive maintenance",
      "System health monitoring",
      "Performance optimization",
      "Emergency repair services",
    ],
    color: "from-red-500 to-red-600",
    price: "AMC from ₹2,000/year",
    image: "/images/repair-team.jpg",
  },
  {
    icon: HardDrive,
    title: "Data Recovery & Backup",
    description:
      "Professional data recovery services and backup solutions to protect your valuable information from loss or corruption.",
    features: [
      "Hard drive data recovery",
      "SSD recovery services",
      "Deleted file restoration",
      "Automated backup solutions",
      "Cloud backup setup",
      "RAID recovery services",
    ],
    color: "from-cyan-500 to-cyan-600",
    price: "Recovery from ₹1,500",
    image: "/images/service-center.jpg",
  },
  {
    icon: Printer,
    title: "Printer Support",
    description:
      "Comprehensive printer repair, maintenance, and troubleshooting services for all major brands including HP, Canon, Epson, and Brother.",
    features: [
      "Printer repair and servicing",
      "Cartridge refilling services",
      "Network printer setup",
      "Driver installation",
      "Print quality optimization",
      "Maintenance contracts",
    ],
    color: "from-pink-500 to-pink-600",
    price: "Service from ₹300",
    image: "/images/comprehensive-repair.jpg",
  },
  {
    icon: Wifi,
    title: "Network Setup & Accessories",
    description:
      "Complete network solutions and latest accessories to keep your technology infrastructure updated and running smoothly.",
    features: [
      "WiFi router installation",
      "Network cable management",
      "Internet connectivity setup",
      "Network security configuration",
      "Range extender installation",
      "Network troubleshooting",
    ],
    color: "from-indigo-500 to-indigo-600",
    price: "Setup from ₹1,000",
    image: "/images/cisco-equipment.jpg",
  },
  {
    icon: UserCheck,
    title: "Attendance Systems & Biometric Solutions",
    description:
      "Modern biometric attendance systems, access control solutions, and time tracking systems for businesses of all sizes. Fingerprint, face recognition, and card-based systems.",
    features: [
      "Fingerprint attendance systems",
      "Face recognition technology",
      "RFID card access control",
      "Time tracking and reporting",
      "Mobile app integration",
      "Payroll system integration",
    ],
    color: "from-orange-500 to-orange-600",
    price: "Starting from ₹8,000",
    image: "/images/access-control.jpg",
  },
]

const whyChooseUs = [
  {
    icon: Award,
    title: "5+ Years Experience",
    description: "Proven track record in IT services across Goa",
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "Same-day service available for urgent repairs",
  },
  {
    icon: CheckCircle,
    title: "Quality Guarantee",
    description: "6-month warranty on all repairs and installations",
  },
  {
    icon: Star,
    title: "Customer Satisfaction",
    description: "4.9/5 rating from 500+ happy customers",
  },
]

export default function ServicesPage() {
  const handleWhatsAppContact = (service: string) => {
    const message = `Hi! I'm interested in ${service}. Please provide more details and pricing.`
    const whatsappUrl = `https://wa.me/919823707997?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <AnnouncementBar
        messages={[
          "🔧 Professional IT services with 6-month warranty guarantee!",
          "💻 Free diagnostic check for all computer and laptop issues!",
          "📹 CCTV installation packages starting from ₹15,000 only!",
        ]}
      />

      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">Complete IT Solutions</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Services
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8">
              Comprehensive technology solutions for homes and businesses across Goa. From computer repairs to CCTV
              installations, we've got you covered.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold"
              onClick={() => handleWhatsAppContact("general inquiry")}
            >
              <Phone className="mr-2 h-5 w-5" />
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>

      <AnnouncementBar
        messages={[
          "⚡ Emergency repair services available - Call +91 98237 07997",
          "🏠 On-site service available across Goa for your convenience",
          "💡 Free consultation for all IT infrastructure planning!",
        ]}
        direction="right"
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>

                <div className="grid md:grid-cols-2 gap-6 p-6">
                  {/* Service Image */}
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <div className="text-lg font-semibold text-green-600 mb-3">{service.price}</div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm">What's Included:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {service.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                            <span className="text-xs text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        className={`flex-1 bg-gradient-to-r ${service.color} hover:opacity-90`}
                        onClick={() => handleWhatsAppContact(service.title)}
                      >
                        <Phone className="mr-1 h-3 w-3" />
                        Book Now
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-transparent"
                        onClick={() => handleWhatsAppContact(`${service.title} - Need more information`)}
                      >
                        Learn More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Why Choose Technology Consultancy</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Your Trusted IT Partner in Goa</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We combine technical expertise with exceptional customer service to deliver reliable IT solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Need IT Support?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Contact us today for a free consultation. Our expert team is ready to solve all your technology challenges!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
              onClick={() => handleWhatsAppContact("I need IT support")}
            >
              <Phone className="mr-2 h-5 w-5" />
              WhatsApp: +91 98237 07997
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold"
              onClick={() => handleWhatsAppContact("I need emergency support")}
            >
              <Zap className="mr-2 h-5 w-5" />
              Emergency Support
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
