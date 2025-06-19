"use client"

import { useState } from "react"
import { MapPin, Phone, ExternalLink, X, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useSiteConfig } from "@/lib/use-site-config"

export function GoogleMapsEmbed() {
  const [showModal, setShowModal] = useState(false)
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const { config } = useSiteConfig()

  const formatPhoneForTel = (phone: string) => {
    return phone.replace(/[^\d]/g, "")
  }

  const getFullAddress = () => {
    return `${config.contact.address.street}, ${config.contact.address.city}, ${config.contact.address.state}, ${config.contact.address.zip}`
  }

  // Fallback if API key is not available
  if (!apiKey) {
    return (
      <div className="rounded-xl overflow-hidden h-[400px] relative bg-gray-800 flex items-center justify-center">
        <div className="text-center text-gray-300">
          <AlertCircle className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
          <p className="mb-2">Google Maps integration requires an API key</p>
          <Button className="bg-primary text-black hover:bg-primary/90" asChild>
            <Link
              href={`https://maps.google.com/?q=${encodeURIComponent(getFullAddress())}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View on Google Maps
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="rounded-xl overflow-hidden h-[400px] relative">
        {/* Google Maps Embed */}
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(getFullAddress())}&zoom=15`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl"
        />
        
        {/* Overlay button */}
        <div className="absolute top-4 right-4">
          <Button
            onClick={() => setShowModal(true)}
            className="bg-black/70 text-white hover:bg-black/90 backdrop-blur-sm"
            size="sm"
          >
            <MapPin className="mr-2 h-4 w-4" />
            Get Directions
          </Button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-white/10 p-6 rounded-xl max-w-sm w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">{config.business.name}</h3>
              <div className="space-y-3 mb-6">
                <p className="text-gray-300">{config.contact.address.street}</p>
                <p className="text-gray-300">{config.contact.address.city}, {config.contact.address.state}, {config.contact.address.zip}</p>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <p className="text-gray-300">{config.contact.phone}</p>
                </div>
              </div>
              <div className="space-y-3">
                <Button className="w-full bg-primary text-black hover:bg-primary/90" asChild>
                  <Link
                    href={`https://maps.google.com/?q=${encodeURIComponent(getFullAddress())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Get Directions
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-black"
                  asChild
                >
                  <Link href={`tel:+1${formatPhoneForTel(config.contact.phone)}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
