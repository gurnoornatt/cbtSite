"use client"

import { useState } from "react"
import { MapPin, Phone, ExternalLink, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function GoogleMapsEmbed() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="rounded-xl overflow-hidden h-[400px] relative">
        {/* Google Maps Embed */}
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBKv8w8T-0VohKmGTGsUgnKo8dZ71IzcPg&q=4045+S+CHERRY+AVE,+FRESNO,+CA,+93706&zoom=15`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl"
        />

        {/* Info Button */}
        <button
          onClick={() => setShowModal(true)}
          className="absolute top-4 right-4 bg-primary text-black p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
        >
          <MapPin className="h-5 w-5" />
        </button>
      </div>

      {/* Modal */}
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
              <h3 className="text-xl font-bold mb-4">Central Bus & Truck Driving School</h3>
              <div className="space-y-3 mb-6">
                <p className="text-gray-300">4045 S CHERRY AVE</p>
                <p className="text-gray-300">FRESNO, CA, 93706</p>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <p className="text-gray-300">(559) 905-0496</p>
                </div>
              </div>
              <div className="space-y-3">
                <Button className="w-full bg-primary text-black hover:bg-primary/90" asChild>
                  <Link
                    href="https://maps.google.com/?q=4045+S+CHERRY+AVE,+FRESNO,+CA,+93706"
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
                  <Link href="tel:+15599050496">
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
