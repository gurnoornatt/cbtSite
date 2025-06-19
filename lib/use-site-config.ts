"use client"

import { useState, useEffect } from "react"
import { defaultSiteConfig, type SiteConfig } from "./site-config"

export function useSiteConfig() {
  const [config, setConfig] = useState<SiteConfig>(defaultSiteConfig)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadConfig = async () => {
      try {
        const response = await fetch("/api/admin/config")
        if (response.ok) {
          const data = await response.json()
          setConfig(data)
        }
      } catch (error) {
        console.error("Failed to load site config:", error)
        // Fall back to default config
      } finally {
        setLoading(false)
      }
    }

    loadConfig()
  }, [])

  return { config, loading }
} 