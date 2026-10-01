export const PSV_GOLD_LOAN_CONFIG = {
  company: {
    name: 'PSV GOLD LOAN',
    shortName: 'PSV',
    establishedYear: 1999,
    tagline: 'Financial support against your gold — simple and transparent.',
  },
  contact: {
    phone: "9095744733",
    whatsapp: "9095744733",
    email: "psvgoldloan@gmail.com",
    address: "PSV Complex, opposite to Balaji Mahal, Ottapidram Road, Puthiamputhur - 628402",
    workingHours: "10:00 AM – 7:00 PM",
    googleMapsUrl: "https://maps.google.com/?q=PSV+Complex,+Puthiamputhur+-+628402"
  },
  navigation: {
    links: [
      { path: '/', label: 'Home' },
      { path: '/gold-loan', label: 'Gold Loan' },
      { path: '/calculator', label: 'Calculator' },
      { path: '/about', label: 'About' },
      { path: '/services', label: 'Services' },
      { path: '/contact', label: 'Contact' }
    ]
  },
  loan: {
    type: "Super Loan",
    interestRate: 2.0,
    interestMethod: "Monthly",
    processingFee: 0,
    otherCharges: 0
  },
  eligibility: {
    age: "21 years and above",
    goldType: "Any type of gold",
    incomeRequirement: "No income requirement stated"
  },
  documents: [
    "Aadhaar Card",
    "Driving Licence",
    "PAN Card",
    "Smart Card"
  ],
  services: [
    {
      id: 'gold-loan',
      title: 'Gold Loan',
      description: 'Get financial assistance against eligible gold, subject to verification and applicable terms.'
    }
  ],
  calculator: {
    referenceRate: 7500,
    defaultPurity: '22K',
    processingFee: 0,
    rounding: true,
    ltv: 100, // 100% LTV = 7500/g for 22K (7500/g base)
    tenureMonths: null, // PENDING OFFICIAL CONFIRMATION
    minimumLoan: null, // PENDING OFFICIAL CONFIRMATION
    maximumLoan: null, // PENDING OFFICIAL CONFIRMATION
    interestUnit: '% monthly',
    interestRate: 2.0,
    interestCompounding: true
  },
  faq: [
    {
      question: "What documents are required?",
      answer: "Aadhaar Card, Driving Licence, PAN Card or Smart Card. Customers should bring any one original document."
    },
    {
      question: "What are the working hours?",
      answer: "10:00 AM to 7:00 PM."
    },
    {
      question: "Where is PSV Gold Loan located?",
      answer: "PSV Complex, opposite to Balaji Mahal, Ottapidram Road, Puthiamputhur - 628402."
    },
    {
      question: "What loan type is available?",
      answer: "Super Loan."
    },
    {
      question: "Is income proof required?",
      answer: "No income requirement is stated for our gold loans."
    }
  ]
};
