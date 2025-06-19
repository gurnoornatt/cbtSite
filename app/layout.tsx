import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Get Your CDL Fast | Central Truck Driving School Fresno | Start Your New Career Today",
  description:
    "Ready to change your life? Get your CDL in just 30 hours with Central Truck Driving School in Fresno. Job placement assistance, flexible schedules, and one-on-one training. Call (559) 905-0496 today!",
  keywords:
    "truck driving school near me, CDL training Fresno, how to become a truck driver, affordable CDL classes, truck driver career, CDL school Fresno CA, commercial driver license training, truck driving jobs, CDL permit help, trucking career change",
  openGraph: {
    title: "Get Your CDL Fast | Central Truck Driving School Fresno",
    description:
      "Ready to change your life? Get your CDL in just 30 hours. Job placement assistance, flexible schedules, and one-on-one training in Fresno, CA.",
    url: "https://centralcdl.com",
    siteName: "Central Truck Driving School",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Central Truck Driving School - CDL Training in Fresno",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [
    {
      name: "Central Truck Driving School",
    },
  ],
  alternates: {
    canonical: "https://centralcdl.com",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
