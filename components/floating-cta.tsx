"use client"

import { useState, useEffect } from "react"
import { Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useSiteConfig } from "@/lib/use-site-config"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const { config } = useSiteConfig()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000) // Show after 3 seconds

    return () => clearTimeout(timer)
  }, [])

  const formatPhoneForTel = (phone: string) => {
    return phone.replace(/[^\d]/g, "")
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isMinimized ? (
        <div className="bg-gradient-to-r from-primary to-yellow-500 text-black p-4 rounded-lg shadow-2xl max-w-sm animate-bounce">
          <button
            onClick={() => setIsMinimized(true)}
            className="absolute top-2 right-2 text-black hover:text-gray-700"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="pr-6">
            <p className="font-bold text-sm mb-2">🚛 Ready to Start Your New Career?</p>
            <p className="text-xs mb-3">Call now for a free consultation!</p>
            <Button size="sm" className="bg-black text-primary hover:bg-gray-800 w-full" asChild>
              <Link href={`tel:+1${formatPhoneForTel(config.contact.phone)}`}>
                <Phone className="mr-2 h-4 w-4" /> Call {config.contact.phone}
              </Link>
            </Button>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => setIsMinimized(false)}
          className="bg-primary text-black hover:bg-primary/90 rounded-full w-14 h-14 shadow-2xl"
        >
          <Phone className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}
