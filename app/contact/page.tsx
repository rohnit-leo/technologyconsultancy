"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from "lucide-react"
import AnnouncementBar from "@/components/announcement-bar"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappMessage = `
*New Contact Form Submission*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Service Interested:* ${formData.service}
*Message:* ${formData.message}

Please get back to me with more details.
    `.trim()

    const whatsappUrl = `https://wa.me/919823707997?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleDirectWhatsApp = () => {
    const message = "Hi! I'd like to inquire about your IT services. Please provide more information."
    const whatsappUrl = `https://wa.me/919823707997?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const services = [
    "Computer Sales & Support",
    "Laptop Sales & Repairs",
    "CCTV Systems & Security",
    "Network Setup & Accessories",
    "Printer Support",
    "Data Recovery & Backup",
    "Technical Support & Maintenance",
    "Customized IT Solutions",
    "Other",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <AnnouncementBar
        messages={[
          "📞 Call us now at +91 98237 07997 for immediate assistance!",
          "💬 WhatsApp us for quick responses and instant quotes!",
          "🏠 Visit our office in Ucassaim, Guirim, Goa for consultation!",
        ]}
      />

      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">Get In Touch</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Us</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8">
              Ready to solve your technology challenges? Get in touch with our expert team for personalized IT
              solutions.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold"
              onClick={handleDirectWhatsApp}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Now
            </Button>
          </div>
        </div>
      </section>

      <AnnouncementBar
        messages={[
          "⚡ Emergency IT support available 24/7 - Contact us anytime!",
          "🔧 Free diagnostic check for all computer and laptop issues!",
          "📍 Serving all areas across Goa with on-site services!",
        ]}
        direction="right"
      />

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-2xl bg-white">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you via WhatsApp
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="h-12"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="h-12"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="h-12"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="Describe your requirements or issue in detail..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg font-semibold"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send via WhatsApp
                  </Button>

                  <div className="text-center text-sm text-gray-500">
                    By submitting this form, you'll be redirected to WhatsApp to complete your inquiry.
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold mb-2">Get In Touch</CardTitle>
                  <CardDescription className="text-blue-100">
                    Multiple ways to reach us for your convenience
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone Numbers</h3>
                      <p className="text-blue-100">Primary: +91 98237 07997</p>
                      <p className="text-blue-100">Alternate: +91 82089 45133</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-blue-100">ashane10@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-blue-100">
                        Ground Floor House No. R/57/2-A,
                        <br />
                        Opp. Sateri Temple, Ucassaim,
                        <br />
                        Guirim, Durgavado, Goa – 403507
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-blue-100">Mon - Sat: 9:00 AM - 7:00 PM</p>
                      <p className="text-blue-100">Sunday: 10:00 AM - 5:00 PM</p>
                      <p className="text-blue-100 text-sm mt-1">Emergency support available 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    className="w-full justify-start h-12 bg-green-600 hover:bg-green-700"
                    onClick={handleDirectWhatsApp}
                  >
                    <MessageCircle className="mr-3 h-5 w-5" />
                    WhatsApp Chat
                  </Button>

                  <Button
                    className="w-full justify-start h-12 bg-blue-600 hover:bg-blue-700"
                    onClick={() => (window.location.href = "tel:+919823707997")}
                  >
                    <Phone className="mr-3 h-5 w-5" />
                    Call Now
                  </Button>

                  <Button
                    className="w-full justify-start h-12 bg-purple-600 hover:bg-purple-700"
                    onClick={() => (window.location.href = "mailto:ashane10@gmail.com")}
                  >
                    <Mail className="mr-3 h-5 w-5" />
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Service Areas in Goa
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div>• Panaji</div>
                    <div>• Margao</div>
                    <div>• Vasco</div>
                    <div>• Mapusa</div>
                    <div>• Ponda</div>
                    <div>• Bicholim</div>
                    <div>• Curchorem</div>
                    <div>• Pernem</div>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">On-site services available across all major areas in Goa</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
