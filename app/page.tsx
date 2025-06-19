"use client"

import Link from "next/link"
import { ChevronRight, Clock, MapPin, Phone, Star, Award, BookOpen, Users, Youtube, Instagram } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { ContactForm } from "@/components/contact-form"
import { PricingCard } from "@/components/pricing-card"
import { GoogleMapsEmbed } from "@/components/google-maps-embed"
import { FloatingCTA } from "@/components/floating-cta"
import { FAQSection } from "@/components/faq-section"
import { useSiteConfig } from "@/lib/use-site-config"

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

export default function Home() {
  const { config, loading } = useSiteConfig()

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  const formatPhoneForTel = (phone: string) => {
    return phone.replace(/[^\d]/g, "")
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-950 text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-gray-950/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt={config.business.name}
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
                About
              </Link>
              <Link href="#courses" className="text-sm font-medium transition-colors hover:text-primary">
                Courses
              </Link>
              <Link href="#schedule" className="text-sm font-medium transition-colors hover:text-primary">
                Schedule
              </Link>
              <Link href="#locations" className="text-sm font-medium transition-colors hover:text-primary">
                Locations
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              <Link
                href={config.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <TikTokIcon className="h-5 w-5" />
              </Link>
              <Link
                href={config.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href={config.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
            <Link href={`tel:+1${formatPhoneForTel(config.contact.phone)}`} className="hidden md:flex items-center gap-2 text-primary font-medium">
              <Phone className="h-4 w-4" />
              {config.contact.phone}
            </Link>
            <Button asChild className="bg-primary text-black hover:bg-primary/90">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-instructors.jpeg"
              alt="Central instructors with successful graduate"
              fill
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/90"></div>
          </div>
          <div className="container relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Get Your CDL License Fast
                  </h1>
                  <p className="mt-4 text-gray-300 md:text-xl">
                    Master commercial driving with our comprehensive {config.pricing.classA.classTime.toLowerCase()} program. From permit training to road
                    testing, we'll get you job-ready with hands-on instruction from certified professionals.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="bg-primary text-black hover:bg-primary/90" asChild>
                    <Link href="#courses">
                      View Training Programs <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-black"
                    asChild
                  >
                    <Link href={`tel:+1${formatPhoneForTel(config.contact.phone)}`}>
                      <Phone className="mr-2 h-4 w-4" /> Call {config.contact.phone}
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-xl p-6">
                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <p className="font-medium">State-Certified Training Program</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <p className="font-medium">Complete CDL Permit Assistance</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <p className="font-medium">Personalized One-on-One Training</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <p className="font-medium">Flexible Day & Evening Classes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-900/50">
          <div className="container">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">CENTRAL PROVIDES THE HIGHEST QUALITY TRAINING</h2>
                <p className="text-gray-300">
                  We're a family-owned school that's been training drivers for over a decade. Our instructors don't just
                  teach - they mentor. You'll learn from experienced drivers who've been on the road and know what it
                  takes to succeed.
                </p>
                <p className="text-gray-300">
                  Every student gets personal attention. We work at your pace, answer your questions, and make sure
                  you're confident behind the wheel before you test. That's why {config.business.passRate} of our students pass on their first
                  try.
                </p>
                <div className="pt-4">
                  <Button asChild className="bg-primary text-black hover:bg-primary/90">
                    <Link href="#schedule">Meet Our Team</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/student-success.jpeg"
                  alt="Successful CDL graduate with Central training truck"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 rounded-xl"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <p className="text-white font-semibold">Another successful graduate!</p>
                  <p className="text-gray-200 text-sm">Ready for a rewarding trucking career</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-16 bg-gray-950">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter mb-2">Professional CDL Training Programs</h2>
              <p className="text-gray-300">Comprehensive training designed to get you job-ready fast</p>
            </div>

            <Tabs defaultValue="class-a" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-800">
                <TabsTrigger value="class-a">Class A CDL</TabsTrigger>
                <TabsTrigger value="class-b">Class B CDL</TabsTrigger>
              </TabsList>
              <TabsContent value="class-a">
                <div className="grid md:grid-cols-2 gap-8">
                  <PricingCard
                    title={config.pricing.classA.title}
                    price={config.pricing.classA.price}
                    transmission={config.pricing.classA.transmission}
                    classTime={config.pricing.classA.classTime}
                    permitTraining={true}
                    oneOnOne={true}
                    endorsements={config.pricing.classA.endorsements}
                  />
                  <div className="rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-xl p-6 h-full">
                    <h3 className="text-xl font-bold mb-4 text-primary">Complete Training Curriculum</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Pre-trip inspection mastery</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Backing and maneuvering techniques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Highway driving and city navigation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Coupling and uncoupling procedures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Air brake system operation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Load securement and weight distribution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>DOT regulations and safety compliance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="class-b">
                <div className="grid md:grid-cols-2 gap-8">
                  <PricingCard
                    title={config.pricing.classB.title}
                    price={config.pricing.classB.price}
                    transmission={config.pricing.classB.transmission}
                    classTime={config.pricing.classB.classTime}
                    permitTraining={true}
                    oneOnOne={true}
                    endorsements={config.pricing.classB.endorsements}
                  />
                  <div className="rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-xl p-6 h-full">
                    <h3 className="text-xl font-bold mb-4 text-primary">Complete Training Curriculum</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Pre-trip inspection procedures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Straight truck maneuvering</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>City and highway driving skills</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Air brake system knowledge</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Bus and delivery vehicle operation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 text-center">
              <p className="text-lg font-medium mb-4">AUTOMATIC/MANUAL TRANSMISSION (10 SPEED) AVAILABLE!</p>
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90" asChild>
                <Link href={`tel:+1${formatPhoneForTel(config.contact.phone)}`}>
                  <Phone className="mr-2 h-4 w-4" /> CALL NOW - {config.contact.phone}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="py-16 bg-gray-900/50">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">SCHEDULE A VISIT</h2>
                <p className="text-gray-300">
                  Take a 30-minute tour of our training facility and meet with our admissions team. We'll discuss the
                  best program for your career goals and answer all your questions about getting started.
                </p>
                <div className="flex items-start gap-2 mt-6">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{config.contact.address.street}</p>
                    <p className="text-gray-300">{config.contact.address.city}, {config.contact.address.state}, {config.contact.address.zip}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <p className="text-gray-300">{config.contact.hours}</p>
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-950">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">What Our Students Say</h2>
              <p className="text-xl text-gray-300">Real stories from real graduates</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">
                    "Awesome driving school. Came in having never drove a semi before and very little experience backing up a trailer. Stayed for a few weeks and passed the dmv driving test first try. Highly recommend!! They work with your schedule!!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-black font-medium">G</span>
                    </div>
                    <div>
                      <p className="font-medium">Garry</p>
                      <p className="text-sm text-gray-400">2 years ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">
                    "Had the best experience in learning how to drive a truck and really helpful and knowledgeable in all fields of getting a commercial license, would definitely recommend all women and men in coming and getting your license from them. Very professional and speak Punjabi, Hindi and English. Also offer truck repairs, it's like one stop shop for all your needs."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-black font-medium">SK</span>
                    </div>
                    <div>
                      <p className="font-medium">Sandy Kaur</p>
                      <p className="text-sm text-gray-400">2 years ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">
                    "I went to this Bus and Truck School to get my CDL license. I recommend this school because it's well detailed oriented from Inspection Part A, Part B and Part C. As well Coupling System. It's a Manual or Automatic transmission Trucks available, whatever you want. I got my CDL with Manual Transmission. Not restrictions on my driver license! It's a personalized learning. You will get what you need in order to get the commercial license. It was a positive experience to me going to this driving school. Thanks A-1, my instructor."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-black font-medium">RF</span>
                    </div>
                    <div>
                      <p className="font-medium">Raul Funes</p>
                      <p className="text-sm text-gray-400">2 years ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Maps Section */}
        <section id="locations" className="py-16 bg-gray-900/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Visit Our Training Facility</h2>
              <p className="text-xl text-gray-300">Located in the heart of Fresno for easy access</p>
            </div>
            <GoogleMapsEmbed />
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Section */}
        <section className="py-16 bg-primary/10">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Ready to Start Your CDL Training?</h2>
              <p className="text-gray-300 mb-6">
                Join hundreds of successful graduates who started their trucking careers at Central. Call today to
                schedule your campus visit and take the first step toward your new career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary text-black hover:bg-primary/90" asChild>
                  <Link href="#contact">Schedule Campus Visit</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-black"
                  asChild
                >
                  <Link href={`tel:+1${formatPhoneForTel(config.contact.phone)}`}>
                    <Phone className="mr-2 h-4 w-4" /> Call {config.contact.phone}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-gray-950">
        <div className="container py-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/logo.png"
                  alt={config.business.name}
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-300 mb-4">
                {config.business.description}
              </p>
              <div className="flex gap-4">
                <Link
                  href={config.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <TikTokIcon className="h-6 w-6" />
                </Link>
                <Link
                  href={config.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link
                  href={config.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <Youtube className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-gray-300 hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="text-gray-300 hover:text-primary transition-colors">
                    Training Programs
                  </Link>
                </li>
                <li>
                  <Link href="#schedule" className="text-gray-300 hover:text-primary transition-colors">
                    Schedule Visit
                  </Link>
                </li>
                <li>
                  <Link href="#locations" className="text-gray-300 hover:text-primary transition-colors">
                    Location
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    {config.contact.address.street}
                    <br />
                    {config.contact.address.city}, {config.contact.address.state}, {config.contact.address.zip}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <Link href={`tel:+1${formatPhoneForTel(config.contact.phone)}`} className="text-gray-300 hover:text-primary transition-colors">
                    {config.contact.phone}
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-gray-300">{config.contact.hours}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Training Hours</h3>
              <ul className="space-y-1">
                <li className="flex justify-between">
                  <span className="text-gray-300">Monday</span>
                  <span className="text-gray-300">{config.schedule.monday}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-300">Tuesday</span>
                  <span className="text-gray-300">{config.schedule.tuesday}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-300">Wednesday</span>
                  <span className="text-gray-300">{config.schedule.wednesday}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-300">Thursday</span>
                  <span className="text-gray-300">{config.schedule.thursday}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-300">Friday</span>
                  <span className="text-gray-300">{config.schedule.friday}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-gray-300">{config.schedule.saturday}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-gray-300">{config.schedule.sunday}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} {config.business.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <FloatingCTA />
    </div>
  )
}
