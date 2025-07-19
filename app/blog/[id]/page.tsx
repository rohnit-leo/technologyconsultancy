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
    image: "/images/computer-components.jpg",
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
  2: {
    title: "CCTV Installation Guide: Securing Your Home and Business in Goa",
    category: "Security Systems",
    date: "2024-01-10",
    readTime: "12 min read",
    image: "/images/security-cameras.jpg",
    content: `
      <h2>Why CCTV Security is Essential</h2>
      <p>In today's world, security is paramount for both homes and businesses. CCTV systems provide 24/7 monitoring, deterrent effect, and valuable evidence in case of incidents.</p>
      
      <h2>Types of CCTV Cameras</h2>
      <h3>1. Dome Cameras</h3>
      <ul>
        <li>Discreet design that blends with surroundings</li>
        <li>Vandal-resistant housing</li>
        <li>360-degree rotation capability</li>
        <li>Ideal for indoor and outdoor use</li>
      </ul>
      
      <h3>2. Bullet Cameras</h3>
      <ul>
        <li>Long-range viewing capabilities</li>
        <li>Weather-resistant design</li>
        <li>Easy installation and maintenance</li>
        <li>Perfect for perimeter monitoring</li>
      </ul>
      
      <h2>Installation Best Practices</h2>
      <ul>
        <li>Strategic camera placement for maximum coverage</li>
        <li>Proper lighting considerations</li>
        <li>Secure cable management</li>
        <li>Network configuration for remote access</li>
        <li>Regular maintenance and updates</li>
      </ul>
      
      <h2>Professional Installation Services</h2>
      <p>Our expert team at Technology Consultancy provides complete CCTV installation services across Goa, including site survey, system design, professional installation, and ongoing support.</p>
    `,
  },
  3: {
    title: "Data Recovery Essentials: How to Protect and Recover Your Important Files",
    category: "Data Recovery",
    date: "2024-01-05",
    readTime: "10 min read",
    image: "/images/service-center.jpg",
    content: `
      <h2>Understanding Data Loss</h2>
      <p>Data loss can occur due to various reasons including hardware failure, software corruption, human error, or malicious attacks. Understanding these causes helps in prevention and recovery.</p>
      
      <h2>Common Causes of Data Loss</h2>
      <ul>
        <li>Hard drive mechanical failure</li>
        <li>Accidental deletion or formatting</li>
        <li>Virus and malware attacks</li>
        <li>Power surges and electrical issues</li>
        <li>Physical damage to storage devices</li>
      </ul>
      
      <h2>Data Recovery Process</h2>
      <h3>1. Assessment</h3>
      <p>Professional evaluation of the storage device to determine the extent of damage and recovery possibilities.</p>
      
      <h3>2. Recovery</h3>
      <p>Using specialized tools and techniques to recover data from damaged or corrupted storage devices.</p>
      
      <h3>3. Verification</h3>
      <p>Ensuring recovered data integrity and completeness before delivery to the client.</p>
      
      <h2>Prevention Strategies</h2>
      <ul>
        <li>Regular automated backups</li>
        <li>Cloud storage solutions</li>
        <li>RAID configurations for redundancy</li>
        <li>Antivirus protection</li>
        <li>Proper shutdown procedures</li>
      </ul>
    `,
  },
  4: {
    title: "Setting Up Your Home Network: WiFi Optimization and Security Tips",
    category: "Networking",
    date: "2023-12-28",
    readTime: "7 min read",
    image: "/images/network-infrastructure.jpg",
    content: `
      <h2>Home Network Fundamentals</h2>
      <p>A well-configured home network provides reliable internet access, enables device connectivity, and ensures security for all connected devices.</p>
      
      <h2>Router Placement and Setup</h2>
      <ul>
        <li>Central location for optimal coverage</li>
        <li>Elevated position away from obstacles</li>
        <li>Away from interference sources</li>
        <li>Proper ventilation for cooling</li>
      </ul>
      
      <h2>WiFi Optimization</h2>
      <h3>1. Channel Selection</h3>
      <p>Choose the least congested WiFi channel for better performance and reduced interference.</p>
      
      <h3>2. Security Configuration</h3>
      <ul>
        <li>WPA3 encryption (or WPA2 if WPA3 unavailable)</li>
        <li>Strong password creation</li>
        <li>Guest network setup</li>
        <li>Regular firmware updates</li>
      </ul>
      
      <h2>Network Security Best Practices</h2>
      <ul>
        <li>Change default admin credentials</li>
        <li>Disable WPS if not needed</li>
        <li>Enable firewall protection</li>
        <li>Monitor connected devices</li>
        <li>Regular security audits</li>
      </ul>
    `,
  },
  5: {
    title: "Laptop Repair vs Replacement: Making the Right Decision",
    category: "Laptop Services",
    date: "2023-12-20",
    readTime: "6 min read",
    image: "/images/laptop-motherboard-repair.jpg",
    content: `
      <h2>Factors to Consider</h2>
      <p>Deciding between laptop repair and replacement depends on several factors including age, cost, performance requirements, and future needs.</p>
      
      <h2>When to Repair</h2>
      <ul>
        <li>Laptop is less than 3 years old</li>
        <li>Repair cost is less than 50% of replacement cost</li>
        <li>Only minor issues like screen or keyboard problems</li>
        <li>Performance meets current needs</li>
        <li>Sentimental or specific software requirements</li>
      </ul>
      
      <h2>When to Replace</h2>
      <ul>
        <li>Laptop is over 5 years old</li>
        <li>Multiple hardware failures</li>
        <li>Repair cost exceeds 70% of new laptop price</li>
        <li>Performance no longer meets requirements</li>
        <li>Outdated technology and compatibility issues</li>
      </ul>
      
      <h2>Cost Analysis</h2>
      <h3>Repair Costs</h3>
      <ul>
        <li>Screen replacement: ₹3,000 - ₹8,000</li>
        <li>Keyboard replacement: ₹1,500 - ₹3,000</li>
        <li>Battery replacement: ₹2,000 - ₹5,000</li>
        <li>Motherboard repair: ₹5,000 - ₹15,000</li>
      </ul>
      
      <h2>Professional Assessment</h2>
      <p>Our technicians provide honest assessments and cost-effective solutions, helping you make the best decision for your specific situation.</p>
    `,
  },
  6: {
    title: "IT Infrastructure Planning for Small Businesses in Goa",
    category: "Business IT",
    date: "2023-12-15",
    readTime: "15 min read",
    image: "/images/cisco-equipment.jpg",
    content: `
      <h2>IT Infrastructure Essentials</h2>
      <p>A well-planned IT infrastructure is crucial for business growth, productivity, and competitiveness in today's digital landscape.</p>
      
      <h2>Core Components</h2>
      <h3>1. Network Infrastructure</h3>
      <ul>
        <li>Reliable internet connectivity</li>
        <li>Local area network (LAN) setup</li>
        <li>WiFi coverage for mobility</li>
        <li>Network security measures</li>
      </ul>
      
      <h3>2. Hardware Requirements</h3>
      <ul>
        <li>Servers for data storage and applications</li>
        <li>Workstations for employees</li>
        <li>Printers and peripherals</li>
        <li>Backup and storage solutions</li>
      </ul>
      
      <h2>Security Considerations</h2>
      <ul>
        <li>Firewall protection</li>
        <li>Antivirus and anti-malware</li>
        <li>Data encryption</li>
        <li>Access control systems</li>
        <li>Regular security audits</li>
      </ul>
      
      <h2>Scalability Planning</h2>
      <p>Design your IT infrastructure to grow with your business, considering future expansion, technology upgrades, and changing requirements.</p>
      
      <h2>Budget Considerations</h2>
      <ul>
        <li>Initial setup costs</li>
        <li>Ongoing maintenance expenses</li>
        <li>Upgrade and replacement cycles</li>
        <li>Support and training costs</li>
      </ul>
      
      <h2>Professional Consultation</h2>
      <p>Our IT consultants help small businesses in Goa design and implement cost-effective IT infrastructure solutions tailored to their specific needs and budget.</p>
    `,
  },
}

export default function BlogPost() {
  const params = useParams()
  const postId = Number.parseInt(params.id as string)
  const post = blogContent[postId as keyof typeof blogContent]

  const handleWhatsAppContact = () => {
    const message = `Hi! I read your blog post "${post?.title}" and would like to schedule a service related to this topic.`
    const whatsappUrl = `https://wa.me/919823707997?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        text: post?.title,
        url: window.location.href,
      })
    } else {
      // Fallback to copying URL to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
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
                <Button variant="outline" onClick={handleShare}>
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
                    <h3 className="text-2xl font-bold mb-4">Need Professional {post.category} Services?</h3>
                    <p className="text-blue-100 mb-6">
                      Our expert technicians provide comprehensive {post.category.toLowerCase()} services with a 6-month
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
                        Contact our experts for personalized assistance with your {post.category.toLowerCase()} needs.
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
                          "Professional Installation",
                          "Expert Consultation",
                          "Quality Components",
                          "Comprehensive Testing",
                          "Ongoing Support",
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
