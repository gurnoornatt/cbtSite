import { Check } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PricingCardProps {
  title: string
  price: string
  transmission: string
  classTime: string
  permitTraining: boolean
  oneOnOne: boolean
  endorsements: string[]
}

export function PricingCard({
  title,
  price,
  transmission,
  classTime,
  permitTraining,
  oneOnOne,
  endorsements,
}: PricingCardProps) {
  return (
    <Card className="bg-white/5 backdrop-blur-md border-white/10">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <div className="text-4xl font-bold text-primary">{price}</div>
        <p className="text-sm text-gray-300">Transmission: {transmission}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            <span className="text-gray-300">Class Time: {classTime}</span>
          </div>
          {permitTraining && (
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span className="text-gray-300">Permit Training: Yes</span>
            </div>
          )}
          {oneOnOne && (
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span className="text-gray-300">One-on-One Training: Yes</span>
            </div>
          )}
        </div>
        <div>
          <p className="font-medium mb-2">Endorsements:</p>
          <ul className="space-y-1">
            {endorsements.map((endorsement, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm text-gray-300">{endorsement}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-primary text-black hover:bg-primary/90" asChild>
          <Link href="#schedule">Enroll Now</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
