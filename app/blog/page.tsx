"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, Monitor, Shield, HardDrive, Wifi, Laptop, Settings } from "lucide-react"
import AnnouncementBar from "@/components/announcement-bar"
import Header from "@/components/header"
import Footer from "@/components/footer"

const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Computer Maintenance: Keep Your PC Running Smoothly",
    excerpt:
      "Learn essential computer maintenance tips to extend your PC's lifespan, improve performance, and prevent costly repairs. From cleaning to software updates.",
    category: "Computer Maintenance",
    icon: Monitor,
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/placeholder.svg?height=300&width=500",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "CCTV Installation Guide: Securing Your Home and Business in Goa",
    excerpt:
      "Step-by-step guide to CCTV installation, camera placement strategies, and choosing the right security system for your property in Goa.",
    category: "Security Systems",
    icon: Shield,
    date: "2024-01-10",
    readTime: "12 min read",
    image: "/placeholder.svg?height=300&width=500",
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Data Recovery Essentials: How to Protect and Recover Your Important Files",
    excerpt:
      "Understanding data recovery processes, backup strategies, and what to do when your hard drive fails. Professional tips from our experts.",
    category: "Data Recovery",
    icon: HardDrive,
    date: "2024-01-05",
    readTime: "10 min read",
    image: "/placeholder.svg?height=300&width=500",
    color: "bg-cyan-500",
  },
  {
    id: 4,
    title: "Setting Up Your Home Network: WiFi Optimization and Security Tips",
    excerpt:
      "Complete guide to setting up a secure and fast home network. Router placement, security configuration, and troubleshooting common issues.",
    category: "Networking",
    icon: Wifi,
    date: "2023-12-28",
    readTime: "7 min read",
    image: "/placeholder.svg?height=300&width=500",
    color: "bg-purple-500",
  },
  {
    id: 5,
    title: "Laptop Repair vs Replacement: Making the Right Decision",
    excerpt:
      "When should you repair your laptop and when is it time for a replacement? Cost analysis and decision factors to help you choose wisely.",
    category: "Laptop Services",
    icon: Laptop,
    date: "2023-12-20",
    readTime: "6 min read",
    image: "/placeholder.svg?height=300&width=500",
    color: "bg-orange-500",
  },
  {
    id: 6,
    title: "IT Infrastructure Planning for Small Businesses in Goa",
    excerpt:
      "Essential IT infrastructure components for growing businesses. Planning, budgeting, and implementation strategies for sustainable growth.",
    category: "Business IT",
    icon: Settings,
    date: "2023-12-15",
    readTime: "15 min read",
    image: "/placeholder.svg?height=300&width=500",
    color: "bg-red-500",
  },
]

const categories = [
  "All Posts",
  "Computer Maintenance",
  "Security Systems",
  "Data Recovery",
  "Networking",
  "Laptop Services",
  "Business IT",
]

export default function BlogPage() {
  const handleWhatsAppContact = (topic: string) => {
    const message = `Hi! I read your blog post about "${topic}" and would like to know more about your services.`
    const whatsappUrl = `https://wa.me/919823707997?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <AnnouncementBar
        messages={[
          "📚 Read our latest IT guides and tips for better technology management!",
          "💡 Expert insights on computer maintenance, security, and repairs!",
          "🔧 Learn from Goa's trusted IT professionals - Technology Consultancy!",
        ]}
      />

      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">Knowledge Hub</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              IT{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Blog</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8">
              Expert insights, guides, and tips from Goa's leading IT service providers. Stay updated with the latest in
              technology.
            </p>
          </div>
        </div>
      </section>

      <AnnouncementBar
        messages={[
          "📞 Need help with any IT issue? Call +91 98237 07997 for expert assistance!",
          "🏠 On-site IT services available across all areas in Goa!",
          "⚡ Emergency computer repair services - Same day solutions!",
        ]}
        direction="right"
      />

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Categories Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 ${
                  index === 0
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="mb-4 bg-white/20 text-white border-white/30 w-fit">Featured Post</Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">{blogPosts[0].title}</h2>
                  <p className="text-blue-100 mb-6 text-lg">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 mb-6 text-blue-100">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">Jan 15, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                      <Link href={`/blog/${blogPosts[0].id}`}>
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                      onClick={() => handleWhatsAppContact(blogPosts[0].title)}
                    >
                      Get Help
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden"></div>
                </div>
              </div>
            </Card>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card
                key={post.id}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    className={`absolute top-4 left-4 w-12 h-12 ${post.color} rounded-lg flex items-center justify-center`}
                  >
                    <post.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit mb-3">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed">{post.excerpt}</CardDescription>

                  <div className="flex gap-2">
                    <Button
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      asChild
                    >
                      <Link href={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleWhatsAppContact(post.title)}>
                      Ask Expert
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 bg-transparent"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Stay Updated with IT Tips</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Get the latest IT guides, maintenance tips, and technology insights delivered to your WhatsApp!
          </p>

          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
            onClick={() => handleWhatsAppContact("I want to receive IT tips and updates")}
          >
            Subscribe via WhatsApp
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
