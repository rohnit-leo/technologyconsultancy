"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft, Phone, MessageCircle, Share2, BookOpen, CheckCircle } from "lucide-react"
import AnnouncementBar from "@/components/announcement-bar"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Sample blog content - in a real app, this would come from a CMS or database
const blogContent = {
  1: {
    title: "Complete Guide to Computer Maintenance: Keep Your PC Running Smoothly",
    category: "Computer Maintenance",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <h2>Why Computer Maintenance Matters</h2>
      <p>Regular computer maintenance is essential for optimal performance, longevity, and preventing costly repairs. Just like a car needs regular servicing, your computer requires consistent care to run smoothly.</p>
      
      <h2>Essential Maintenance Tasks</h2>
      <h3>1. Physical Cleaning</h3>
      <ul>
        <li>Clean dust from fans and vents monthly</li>
        <li>Wipe down keyboard and screen regularly</li>
        <li>Use compressed air for internal components</li>
        <li>Keep workspace clean and dust-free</li>
      </ul>
      
      <h3>2. Software Maintenance</h3>
      <ul>
        <li>Install operating system updates promptly</li>
        <li>Update drivers and software regularly</li>
        <li>Run antivirus scans weekly</li>
        <li>Clean temporary files and cache</li>
      </ul>
      
      <h3>3. Storage Management</h3>
      <ul>
        <li>Keep at least 15% of hard drive space free</li>
        <li>Defragment hard drives monthly (not needed for SSDs)</li>
        <li>Organize files and remove unnecessary data</li>
        <li>Use disk cleanup tools regularly</li>
      </ul>
      
      <h2>Warning Signs Your PC Needs Attention</h2>
      <ul>
        <li>Slow startup or shutdown times</li>
        <li>Frequent crashes or freezing</li>
        <li>Unusual noises from fans or hard drive</li>
        <li>Overheating issues</li>
        <li>Blue screen errors</li>
      </ul>
      
      <h2>Professional Maintenance Services</h2>
      <p>While basic maintenance can be done at home, professional servicing ensures thorough cleaning, hardware diagnostics, and performance optimization. Our technicians at Technology Consultancy provide comprehensive maintenance services including:</p>
      <ul>
        <li>Deep cleaning of internal components</li>
        <li>Hardware diagnostics and testing</li>
        <li>Performance optimization</li>
        <li>Preventive maintenance schedules</li>
        <li>6-month warranty on all services</li>
      </ul>
    `,
  },
  // Add more blog posts here
}

export default function BlogPost() {
  const params = useParams()
  const postId = Number.parseInt(params.id as string)
  const post = blogContent[postId as keyof typeof blogContent]

  const handleWhatsAppContact = () => {
    const message = `Hi! I read your blog post "${post?.title}" and would like to schedule a computer maintenance service.`
    const whatsappUrl = `https://wa.me/919823707997?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <AnnouncementBar
        messages={[
          "📚 Expert IT guides and maintenance tips from Technology Consultancy!",
          "🔧 Need help with computer maintenance? Call +91 98237 07997!",
          "💡 Professional computer servicing with 6-month warranty!",
        ]}
      />

      <Header />

      {/* Article Header */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" className="mb-6 hover:bg-blue-50 hover:text-blue-600" asChild>
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <div className="mb-6">
              <Badge className="mb-4 bg-blue-100 text-blue-800">{post.category}</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>

              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Technology Consultancy</span>
                </div>
              </div>

              <div className="flex gap-3 mb-8">
                <Button
                  onClick={handleWhatsAppContact}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Get This Service
                </Button>
                <Button variant="outline">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Article
                </Button>
              </div>
            </div>

            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-xl mb-12"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* CTA Section */}
                <Card className="mt-12 border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Need Professional Computer Maintenance?</h3>
                    <p className="text-blue-100 mb-6">
                      Our expert technicians provide comprehensive computer maintenance services with a 6-month
                      warranty.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        size="lg"
                        className="bg-white text-blue-600 hover:bg-gray-100"
                        onClick={handleWhatsAppContact}
                      >
                        <Phone className="mr-2 h-5 w-5" />
                        Book Service Now
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                        asChild
                      >
                        <Link href="/services">View All Services</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Contact Card */}
                  <Card className="border-0 shadow-xl">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 text-gray-900">Need Help?</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Contact our experts for personalized assistance with your computer maintenance needs.
                      </p>
                      <div className="space-y-3">
                        <Button
                          className="w-full justify-start bg-green-600 hover:bg-green-700"
                          onClick={handleWhatsAppContact}
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          WhatsApp
                        </Button>
                        <Button
                          className="w-full justify-start"
                          onClick={() => (window.location.href = "tel:+919823707997")}
                        >
                          <Phone className="mr-2 h-4 w-4" />
                          Call Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Service Highlights */}
                  <Card className="border-0 shadow-xl">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 text-gray-900">Our Services Include</h3>
                      <div className="space-y-3">
                        {[
                          "Computer Cleaning & Maintenance",
                          "Performance Optimization",
                          "Hardware Diagnostics",
                          "Software Updates",
                          "Virus Removal",
                          "6-Month Warranty",
                        ].map((service, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{service}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
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
