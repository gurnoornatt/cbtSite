"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/hooks/use-toast"
import { Eye, EyeOff, Save, LogOut } from "lucide-react"
import type { SiteConfig } from "@/lib/site-config"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [config, setConfig] = useState<SiteConfig | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Check if already authenticated
    const isAuth = localStorage.getItem("adminAuth") === "true"
    if (isAuth) {
      setIsAuthenticated(true)
      loadConfig()
    }
  }, [])

  const loadConfig = async () => {
    try {
      const response = await fetch("/api/admin/config")
      if (response.ok) {
        const data = await response.json()
        setConfig(data)
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load configuration",
        variant: "destructive",
      })
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (username === "brar" && password === "monkas21") {
      setIsAuthenticated(true)
      localStorage.setItem("adminAuth", "true")
      await loadConfig()
      toast({
        title: "Success",
        description: "Welcome to the admin portal!",
      })
    } else {
      toast({
        title: "Error",
        description: "Invalid credentials",
        variant: "destructive",
      })
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem("adminAuth")
    setUsername("")
    setPassword("")
  }

  const handleSave = async () => {
    if (!config) return
    
    setLoading(true)
    try {
      const response = await fetch("/api/admin/config", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(config),
      })

      if (response.ok) {
        toast({
          title: "Success",
          description: "Configuration saved successfully!",
        })
      } else {
        throw new Error("Failed to save")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save configuration",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const updateConfig = (path: string[], value: any) => {
    if (!config) return
    
    const newConfig = { ...config }
    let current: any = newConfig
    
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]]
    }
    current[path[path.length - 1]] = value
    
    setConfig(newConfig)
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-center text-white">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username" className="text-gray-300">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password" className="text-gray-300">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <Button type="submit" className="w-full bg-primary text-black hover:bg-primary/90">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!config) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Admin Portal</h1>
          <div className="flex gap-2">
            <Button onClick={handleSave} disabled={loading} className="bg-primary text-black hover:bg-primary/90">
              <Save className="mr-2 h-4 w-4" />
              {loading ? "Saving..." : "Save Changes"}
            </Button>
            <Button onClick={handleLogout} variant="outline" className="border-gray-600 text-gray-300">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>

        <Tabs defaultValue="contact" className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-gray-800">
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
            <TabsTrigger value="business">Business</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
          </TabsList>

          <TabsContent value="contact" className="space-y-4">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Phone Number</Label>
                  <Input
                    value={config.contact.phone}
                    onChange={(e) => updateConfig(["contact", "phone"], e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input
                    value={config.contact.email}
                    onChange={(e) => updateConfig(["contact", "email"], e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label>Street Address</Label>
                  <Input
                    value={config.contact.address.street}
                    onChange={(e) => updateConfig(["contact", "address", "street"], e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <Label>City</Label>
                    <Input
                      value={config.contact.address.city}
                      onChange={(e) => updateConfig(["contact", "address", "city"], e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <Label>State</Label>
                    <Input
                      value={config.contact.address.state}
                      onChange={(e) => updateConfig(["contact", "address", "state"], e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <Label>ZIP</Label>
                    <Input
                      value={config.contact.address.zip}
                      onChange={(e) => updateConfig(["contact", "address", "zip"], e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                </div>
                <div>
                  <Label>Business Hours</Label>
                  <Input
                    value={config.contact.hours}
                    onChange={(e) => updateConfig(["contact", "hours"], e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pricing" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>CDL Class A</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Price</Label>
                    <Input
                      value={config.pricing.classA.price}
                      onChange={(e) => updateConfig(["pricing", "classA", "price"], e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <Label>Class Time</Label>
                    <Input
                      value={config.pricing.classA.classTime}
                      onChange={(e) => updateConfig(["pricing", "classA", "classTime"], e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <Label>Transmission Options</Label>
                    <Input
                      value={config.pricing.classA.transmission}
                      onChange={(e) => updateConfig(["pricing", "classA", "transmission"], e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle>CDL Class B</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Price</Label>
                    <Input
                      value={config.pricing.classB.price}
                      onChange={(e) => updateConfig(["pricing", "classB", "price"], e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <Label>Class Time</Label>
                    <Input
                      value={config.pricing.classB.classTime}
                      onChange={(e) => updateConfig(["pricing", "classB", "classTime"], e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <Label>Transmission Options</Label>
                    <Input
                      value={config.pricing.classB.transmission}
                      onChange={(e) => updateConfig(["pricing", "classB", "transmission"], e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="social" className="space-y-4">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle>Social Media Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>TikTok URL</Label>
                  <Input
                    value={config.social.tiktok}
                    onChange={(e) => updateConfig(["social", "tiktok"], e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label>Instagram URL</Label>
                  <Input
                    value={config.social.instagram}
                    onChange={(e) => updateConfig(["social", "instagram"], e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label>YouTube URL</Label>
                  <Input
                    value={config.social.youtube}
                    onChange={(e) => updateConfig(["social", "youtube"], e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="business" className="space-y-4">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle>Business Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Business Name</Label>
                  <Input
                    value={config.business.name}
                    onChange={(e) => updateConfig(["business", "name"], e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label>Business Description</Label>
                  <Input
                    value={config.business.description}
                    onChange={(e) => updateConfig(["business", "description"], e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label>Pass Rate</Label>
                  <Input
                    value={config.business.passRate}
                    onChange={(e) => updateConfig(["business", "passRate"], e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-4">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle>Training Schedule</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(config.schedule).map(([day, hours]) => (
                  <div key={day}>
                    <Label className="capitalize">{day}</Label>
                    <Input
                      value={hours}
                      onChange={(e) => updateConfig(["schedule", day], e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 