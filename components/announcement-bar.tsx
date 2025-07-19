"use client"

import { useEffect, useState } from "react"

interface AnnouncementBarProps {
  messages: string[]
  direction?: "left" | "right"
  speed?: number
}

export default function AnnouncementBar({ messages, direction = "left", speed = 50 }: AnnouncementBarProps) {
  const [currentMessage, setCurrentMessage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [messages.length])

  // Create continuous content by repeating messages
  const continuousMessages = [...messages, ...messages, ...messages]

  return (
    <div className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-black py-2.5 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-red-400/20"></div>
      <div
        className={`whitespace-nowrap animate-scroll-${direction} flex items-center relative z-10`}
        style={{
          animationDuration: `${speed}s`,
          animationIterationCount: "infinite",
          animationTimingFunction: "linear",
        }}
      >
        {continuousMessages.map((message, index) => (
          <span key={index} className="font-semibold text-sm md:text-base px-12 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-black rounded-full animate-pulse"></span>
            {message}
          </span>
        ))}
      </div>
    </div>
  )
}
