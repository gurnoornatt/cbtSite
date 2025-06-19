import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to get my CDL?",
    answer:
      "Our program takes just 30 hours to complete. Most students finish in 2-4 weeks depending on their schedule. We offer flexible scheduling including evenings and weekends to work around your current job.",
  },
  {
    question: "Do you help with job placement?",
    answer:
      "We partner with over 50 local trucking companies who actively hire our graduates. Many students receive job offers before they even graduate. We also provide resume help and interview preparation.",
  },
  {
    question: "What if I don't pass the CDL test?",
    answer:
      "We have a 95% first-time pass rate, but if you don't pass, we offer additional training at no extra cost until you do. We're committed to your success.",
  },
  {
    question: "Do you offer financing or payment plans?",
    answer:
      "Yes! We offer flexible payment plans starting as low as $200/month. We also work with several financing companies to help make your CDL training affordable.",
  },
  {
    question: "What's the difference between Class A and Class B CDL?",
    answer:
      "Class A CDL allows you to drive tractor-trailers and earn $55,000-$75,000+ per year. Class B is for straight trucks, buses, and local delivery vehicles, typically earning $45,000-$65,000 per year.",
  },
  {
    question: "Do I need any experience to start?",
    answer:
      "No experience required! We start from the basics and teach you everything you need to know. Our one-on-one training ensures you get personalized attention regardless of your starting level.",
  },
  {
    question: "What are the age and license requirements?",
    answer:
      "You must be at least 18 years old (21 for interstate driving), have a valid driver's license, and pass a DOT physical exam. We can help you with the permit process.",
  },
  {
    question: "How much can I expect to earn as a truck driver?",
    answer:
      "Starting salaries range from $45,000-$75,000 per year depending on the type of driving. Experienced drivers can earn $80,000+ annually. Many of our graduates see immediate pay increases compared to their previous jobs.",
  },
]

export function FAQSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300">Get answers to common questions about CDL training</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-primary/20">
                <AccordionTrigger className="text-left text-primary hover:text-primary/80">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-300 mb-4">Still have questions?</p>
          <Button className="bg-primary text-black hover:bg-primary/90" asChild>
            <Link href="tel:+15599050496">Call (559) 905-0496</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
