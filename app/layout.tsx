import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Technology Consultancy - Complete IT Solutions in Goa | Computer Repair, CCTV, Biometric Systems",
  description:
    "Goa's leading IT service provider offering computer repairs, laptop services, CCTV installation, biometric attendance systems, network setup, and data recovery. Professional IT solutions with 6-month warranty. Call +91 98237 07997",
  keywords:
    "IT services Goa, computer repair Goa, laptop repair, CCTV installation, biometric systems, network setup, data recovery, technology consultancy, IT support Goa",
  authors: [{ name: "Technology Consultancy" }],
  creator: "Technology Consultancy",
  publisher: "Technology Consultancy",
  robots: "index, follow",
  openGraph: {
    title: "Technology Consultancy - Complete IT Solutions in Goa",
    description:
      "Professional IT services including computer repairs, CCTV installation, biometric systems, and network solutions across Goa. 6-month warranty guaranteed.",
    url: "https://technologyconsultancy.com",
    siteName: "Technology Consultancy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology Consultancy - Complete IT Solutions in Goa",
    description:
      "Professional IT services with 6-month warranty. Computer repairs, CCTV, biometric systems across Goa.",
  },
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
