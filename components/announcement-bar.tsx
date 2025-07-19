"use client"

import { useEffect, useState } from "react"

interface AnnouncementBarProps {
  messages: string[]
  direction?: "left" | "right"
  speed?: number
}

export default function AnnouncementBar({ messages, direction = "left", speed = 40 }: AnnouncementBarProps) {
  const [currentMessage, setCurrentMessage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [messages.length])

  // Create continuous content by repeating messages multiple times to eliminate gaps
  const continuousMessages = [...messages, ...messages, ...messages, ...messages]

  return (
    <div className="bg-gradient-to-r from-rose-600 via-red-600 to-pink-600 text-white py-2.5 overflow-hidden relative shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-rose-500/30 via-red-500/30 to-pink-500/30"></div>
      <div
        className={`whitespace-nowrap animate-scroll-left flex items-center relative z-10`}
        style={{
          animationDuration: `${speed}s`,
          animationIterationCount: "infinite",
          animationTimingFunction: "linear",
        }}
      >
        {continuousMessages.map((message, index) => (
          <span key={index} className="font-semibold text-sm md:text-base px-6 flex items-center gap-2 flex-shrink-0">
            <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse flex-shrink-0"></span>
            {message}
          </span>
        ))}
      </div>
    </div>
  )
}
