export interface SiteConfig {
  contact: {
    phone: string
    address: {
      street: string
      city: string
      state: string
      zip: string
    }
    hours: string
    email: string
  }
  pricing: {
    classA: {
      title: string
      price: string
      transmission: string
      classTime: string
      endorsements: string[]
    }
    classB: {
      title: string
      price: string
      transmission: string
      classTime: string
      endorsements: string[]
    }
  }
  social: {
    tiktok: string
    instagram: string
    youtube: string
  }
  business: {
    name: string
    description: string
    passRate: string
  }
  schedule: {
    monday: string
    tuesday: string
    wednesday: string
    thursday: string
    friday: string
    saturday: string
    sunday: string
  }
}

export const defaultSiteConfig: SiteConfig = {
  contact: {
    phone: "(559) 905-0496",
    address: {
      street: "4045 S CHERRY AVE",
      city: "FRESNO",
      state: "CA",
      zip: "93706"
    },
    hours: "MONDAY- SATURDAY 8AM-5PM",
    email: "Centralbtschool@gmail.com"
  },
  pricing: {
    classA: {
      title: "CDL CLASS A",
      price: "$2,400",
      transmission: "Automatic & Manual Available",
      classTime: "30 Hours",
      endorsements: [
        "Passenger Endorsement",
        "Hazardous Materials (HAZMAT)",
        "Tanker Endorsement",
        "Double & Triple Trailers"
      ]
    },
    classB: {
      title: "CDL CLASS B",
      price: "$2,000",
      transmission: "Automatic & Manual Available",
      classTime: "30 Hours",
      endorsements: [
        "Passenger Endorsement",
        "Hazardous Materials (HAZMAT)",
        "Tanker Endorsement"
      ]
    }
  },
  social: {
    tiktok: "https://www.tiktok.com/@centralbtschool?_t=ZP-8xKATrbhbrT&_r=1",
    instagram: "https://www.instagram.com/centralbustruckdrivingschool/",
    youtube: "https://www.youtube.com/@centralbustruckschool3572"
  },
  business: {
    name: "Central Bus & Truck Driving School",
    description: "Professional CDL training with experienced instructors and modern facilities in Fresno, California.",
    passRate: "95%"
  },
  schedule: {
    monday: "8AM-5PM",
    tuesday: "8AM-5PM",
    wednesday: "8AM-5PM",
    thursday: "8AM-5PM",
    friday: "8AM-5PM",
    saturday: "8AM-5PM",
    sunday: "Closed"
  }
} 