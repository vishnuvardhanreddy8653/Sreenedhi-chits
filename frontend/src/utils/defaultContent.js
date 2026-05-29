export const DEFAULT_PAGE_CONTENTS = {
  home: {
    companyData: [
      { label: "Branches", value: "12+", icon: "🏢" },
      { label: "Employees", value: "1000+", icon: "👥" },
      { label: "Satisfied Customers", value: "12K+", icon: "😊" },
      { label: "Active Chits", value: "15K+", icon: "📋" },
      { label: "Cities Covered", value: "10+", icon: "🗺️" },
      { label: "Success Rate", value: "99.5%", icon: "⭐" }
    ],
    hero: {
      titleSpan: "శ్రీనిధి చిట్స్",
      description: "Smart Chitti provides you with reliable and high-return chit fund plans. Start saving seamlessly with our trusted financial ecosystem.",
      cta1: "Start Saving Now",
      cta2: "View Available Plans"
    },
    featuresSection: {
      title: "Why Choose Smart Chitti?",
      subtitle: "Experience the perfect blend of traditional savings and modern technology.",
      features: [
        { title: "High Returns", desc: "Maximize your savings with our optimized and secure chit plans.", icon: "💰" },
        { title: "100% Transparent", desc: "Track every payment and auction from your personalized dashboard.", icon: "🔍" },
        { title: "Trusted & Secure", desc: "Your investments are protected by industry-leading security protocols.", icon: "🛡️" }
      ]
    },
    bottomCta: {
      title: "Ready to transform your savings?",
      subtitle: "Join thousands of smart investors who trust us with their financial goals.",
      buttonText: "Create Free Account"
    }
  },
  about: {
    hero: {
      title: "ABOUT US",
      subtitle1: "Anyone can dream up great ideas,",
      subtitle2: "but an idea is nothing until it's realized.",
      ctaText: "Get to Know Us"
    },
    whyChitFunds: {
      title: "Why Chit Funds?",
      description: "Chit Funds are the greatest form of financial organisations, protecting the dreams of their customers by safeguarding their money. You can choose a chit which suits your capital needs. They help you maximize returns by considering your opportunity cost — unlike a bank FD, your money works for you and your group."
    },
    achievementsTitle: "Our Achievements",
    achievements: [
      { iconName: "Building2", value: "12+", label: "Branches", color: "text-red-600", bg: "bg-red-50" },
      { iconName: "Users", value: "1000+", label: "Employees", color: "text-red-600", bg: "bg-red-50" },
      { iconName: "Award", value: "12K+", label: "Satisfied Customers", color: "text-red-600", bg: "bg-red-50" },
      { iconName: "TrendingUp", value: "15K+", label: "Chits Managed", color: "text-red-600", bg: "bg-red-50" }
    ],
    howItWorksTitle: "How It Works",
    steps: [
      { num: "01", title: "Set a Goal", desc: "Define what you are saving for — a home, education, or business." },
      { num: "02", title: "Join the Group", desc: "Enroll in a chit plan that matches your monthly budget." },
      { num: "03", title: "Start Saving", desc: "Make regular monthly contributions. Small amounts add up fast." },
      { num: "04", title: "Get Huge Amounts", desc: "Win an auction or receive the full payout at plan completion." }
    ]
  },
  schemes: {
    hero: {
      title: "AVAILABLE CHITS",
      subtitle1: "Choose from our wide range of plans tailored for every budget.",
      subtitle2: "From ₹3,900/month to ₹1,00,000/month — there's a plan for everyone."
    },
    durationFilters: ['All', '25 Months', '30 Months', '40 Months', '50 Months'],
    schemes: [
      { months: 50, maxBidPayable: "23,75,000", minInstallment: "32,500", maxInstallment: "50,000", minBidPayable: "15,00,000", highestDividend: "4,70,600", tag: "Most Popular" },
      { months: 25, maxBidPayable: "23,75,000", minInstallment: "75,000", maxInstallment: "1,00,000", minBidPayable: "17,50,000", highestDividend: "2,54,200", tag: "High Value" },
      { months: 50, maxBidPayable: "19,00,000", minInstallment: "26,000", maxInstallment: "40,000", minBidPayable: "12,00,000", highestDividend: null, tag: "" },
      { months: 50, maxBidPayable: "14,25,000", minInstallment: "19,500", maxInstallment: "30,000", minBidPayable: "9,00,000", highestDividend: null, tag: "" },
      { months: 30, maxBidPayable: "14,25,000", minInstallment: "35,000", maxInstallment: "50,000", minBidPayable: "9,75,000", highestDividend: "1,79,342", tag: "" },
      { months: 50, maxBidPayable: "9,50,000", minInstallment: "13,000", maxInstallment: "20,000", minBidPayable: "6,00,000", highestDividend: "1,79,348", tag: "" },
      { months: 40, maxBidPayable: "9,50,000", minInstallment: "17,500", maxInstallment: "25,000", minBidPayable: "6,50,000", highestDividend: "1,41,452", tag: "" },
      { months: 25, maxBidPayable: "9,50,000", minInstallment: "30,000", maxInstallment: "40,000", minBidPayable: "7,00,000", highestDividend: "83,296", tag: "" },
      { months: 30, maxBidPayable: "5,70,000", minInstallment: "14,000", maxInstallment: "20,000", minBidPayable: "3,90,000", highestDividend: "80,450", tag: "Great Starter" },
      { months: 50, maxBidPayable: "4,75,000", minInstallment: "6,500", maxInstallment: "10,000", minBidPayable: "3,00,000", highestDividend: "92,150", tag: "" },
      { months: 40, maxBidPayable: "4,75,000", minInstallment: "8,750", maxInstallment: "12,500", minBidPayable: "3,25,000", highestDividend: "60,119", tag: "" },
      { months: 25, maxBidPayable: "4,75,000", minInstallment: "15,000", maxInstallment: "20,000", minBidPayable: "3,50,000", highestDividend: "47,468", tag: "" },
      { months: 50, maxBidPayable: "2,85,000", minInstallment: "3,900", maxInstallment: "6,000", minBidPayable: "1,80,000", highestDividend: "49,590", tag: "" },
      { months: 30, maxBidPayable: "2,85,000", minInstallment: "7,000", maxInstallment: "10,000", minBidPayable: "1,95,000", highestDividend: "30,900", tag: "" },
      { months: 40, maxBidPayable: "2,85,000", minInstallment: "5,250", maxInstallment: "7,500", minBidPayable: "1,95,000", highestDividend: "42,310", tag: "" },
      { months: 50, maxBidPayable: "2,37,500", minInstallment: "3,250", maxInstallment: "5,000", minBidPayable: "1,50,000", highestDividend: "42,300", tag: "" },
      { months: 50, maxBidPayable: "1,90,000", minInstallment: "2,600", maxInstallment: "4,000", minBidPayable: "1,20,000", highestDividend: "27,380", tag: "" },
      { months: 25, maxBidPayable: "1,90,000", minInstallment: "6,000", maxInstallment: "8,000", minBidPayable: "1,40,000", highestDividend: "8,888", tag: "" }
    ]
  },
  faq: {
    title: "Frequently Asked Questions (FAQs)",
    faqs: [
      { question: "What is a Chit Fund?", answer: "A Chit Fund is a savings and borrowing scheme where members contribute a fixed amount every month. Each month, one member receives the total collected amount through an auction process." },
      { question: "Is it safe to invest with Srinidhi Chitfunds?", answer: "Yes, we are a registered company and all our operations are completely transparent and regulated by the government." }
    ]
  },
  contact: {
    hero: {
      title: "OUR CONTACT",
      subtitle1: "Anyone can dream up great ideas,",
      subtitle2: "but an idea is nothing until it's realized.",
      ctaText: "Know Where We Are!"
    }
  },
  terms: {
    title: "Terms and Conditions",
    sections: [
      { heading: "Welcome to Srinidhi Chitfunds", body: "Please read these terms and conditions carefully before using our services." },
      { heading: "Eligibility", body: "You must be at least 18 years of age to participate in a chit fund." },
      { heading: "Contributions and Auctions", body: "All members must pay their monthly contributions on time. Defaults may lead to penalties." }
    ]
  },
  privacy: {
    title: "Privacy Policy",
    sections: [
      { heading: "Welcome to Srinidhi Chitfunds", body: "We understand that privacy online is important to users of our Site, especially when conducting business. This privacy policy applies to our Services." },
      { heading: "Information Collection", body: "We collect personally identifiable information such as your name, address, phone number, and email address to provide you with better services." },
      { heading: "How We Use Information", body: "We use the information to customize the Site, make appropriate service offerings, and fulfill transaction requests." }
    ]
  },
  work: {
    hero: {
      title: "How CHITFUNDS Work",
      subtitle1: "Anyone can dream up great ideas,",
      subtitle2: "but an idea is nothing until it's realized.",
      ctaText: "Go Check That Out"
    },
    workCards: [
      {
        title: "Chit Subscription",
        paragraphs: [
          "A ChitGroup is formed by the chitfund company with the chit Value and No. of Subscribers. (Which doesn’t change throughout the chit completion)",
          "The amount to be saved every month by the Subscriber is equals to Chit value divided by No of person’s i.e. 10,00,000/50 = 20,000.",
          "The maximum monthly Subscription Amount to be paid by a Subscriber will be 20,000 for above example chit."
        ]
      },
      {
        title: "Bid Amount",
        paragraphs: [
          "The Subscriber does not always pay the entire Subscription amount every month there will be some amount deducted as Divedend.",
          "The maximum bid permitted ranges from 30-40% from chit value. i.e., The maximum deduction will be around 30% - 40% of chit value.",
          "Assume that a Subscriber has bid 35% of the chit value. 35% of 10,00,000 is 3,50,000. This amount is known as chit discount."
        ]
      },
      {
        title: "Dividend",
        paragraphs: [
          "The Company Charges 5% of chit value as commission from example that would amount to 50,000. This amount is deducted from Chit Discount i.e. 3,50,000-50,000=3,00,000. This amount is equally distribution among the subscribers of the group.",
          "In the example, 3,00,000 would be divided equally among 50 subscribers. Each subscriber would get a discount of 3,00,000/50 = 6000. This amount is known as Dividend. In the next month, all subscribers would have to only pay 14,000 instead of 20,000. This is because they have earned a chit discount of 6000."
        ]
      },
      {
        title: "Advantages of ChitFunds",
        paragraphs: [
          "Chit fund gives the flexibility to borrow and save.",
          "You can get a chance to borrow money just by paying first monthly installment.",
          "The non-prized subscriber who is a saving member up to the last installments gets a dividend which is comparatively higher than the interest that are accrued by way of other Deposit Schemes.",
          "You need disadvantaged for which purpose you will be using the prize money."
        ]
      }
    ]
  }
};
