import { NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"
import { defaultSiteConfig, type SiteConfig } from "@/lib/site-config"

const CONFIG_FILE = path.join(process.cwd(), "data", "site-config.json")

// Ensure the data directory exists
async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), "data")
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
}

export async function GET() {
  try {
    await ensureDataDir()
    
    let config: SiteConfig
    try {
      const data = await fs.readFile(CONFIG_FILE, "utf-8")
      config = JSON.parse(data)
    } catch {
      // If file doesn't exist, use default config
      config = defaultSiteConfig
      await fs.writeFile(CONFIG_FILE, JSON.stringify(config, null, 2))
    }

    return NextResponse.json(config)
  } catch (error) {
    console.error("Error reading config:", error)
    return NextResponse.json({ error: "Failed to read configuration" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await ensureDataDir()
    
    const config: SiteConfig = await request.json()
    
    // Save the updated configuration
    await fs.writeFile(CONFIG_FILE, JSON.stringify(config, null, 2))
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error saving config:", error)
    return NextResponse.json({ error: "Failed to save configuration" }, { status: 500 })
  }
} 