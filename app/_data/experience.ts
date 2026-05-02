export type Role = {
  title: string
  period: string
  highlights?: string[]
  stack?: string[]
}

export type Experience = {
  company: string
  location?: string
  totalPeriod?: string
  roles: Role[]
}

export const experiences: Experience[] = [
  {
    company: "eDOT (PT. Elektronik Distribusi Otomatisasi Terkemuka)",
    location: "Jakarta, Indonesia",
    totalPeriod: "Oct 2023 — Present",
    roles: [
      {
        title: "Engineering Manager",
        period: "Jan 2025 — Present",
        highlights: [
          "Lead the SaaS business unit (Sales Force Automation), owning delivery across Backend, Frontend, and Mobile.",
          "Mentor engineers and shape engineering processes across the unit.",
          "Align technical roadmap with business goals as a direct counterpart to product and stakeholders.",
        ],
        stack: ["GoLang", "React", "Kotlin", "MongoDB"],
      },
      {
        title: "Technical Lead",
        period: "Oct 2023 — Jan 2025",
        highlights: [
          "Led a cross-functional team across Backend, Frontend, and Mobile while staying hands-on in code and architecture.",
          "Streamlined delivery pipelines so product milestones shipped on time.",
          "Fostered a culture of continuous improvement through mentoring and code review.",
        ],
        stack: ["GoLang", "React", "Kotlin", "MongoDB"],
      },
    ],
  },
  {
    company: "Kargo Technologies",
    location: "Jakarta, Indonesia",
    totalPeriod: "Jul 2019 — Oct 2023 · 4 yrs 4 mos",
    roles: [
      {
        title: "Technical Lead",
        period: "Jan 2022 — Oct 2023",
        highlights: [
          "Direct manager of 6 engineers; ran weekly 1:1s and authored technical guideline docs.",
          "Cut CPU server cost by 33% by partnering with backend champions to fix inefficient queries.",
          "Integrated OCR into the customer onboarding flow — ops team handled 3× new customers without new hires.",
          "Reduced deployment time by 80% (15 min → 3 min) across Dev and Prod, frontend and backend.",
          "Built shared Android & Web internal libraries that lifted team sprint velocity by 27%.",
        ],
      },
      {
        title: "SDE 2 — Frontend & Android Engineer",
        period: "Jan 2021 — Jan 2022",
        highlights: [
          "Built a new business line from scratch — React JS web app and React Native mobile app — working closely with product on scope.",
          "Owned the unit-test-coverage initiative (>75%), unlocking weekly deploys for both web and mobile.",
          "Integrated Unleash feature flags; release cycle sped up 50% and master became always-deployable.",
        ],
        stack: ["React Native", "React Router", "AWS"],
      },
      {
        title: "SDE 1 — Android Engineer",
        period: "Jul 2019 — Jan 2021",
        highlights: [
          "Shipped 2 Android apps from scratch for Transporters and Truck Drivers.",
          "Owned manual and automatic Google Play deployments; kept app size under 6 MB.",
          "Established MVVM + Clean Architecture as the team's foundation; wrote UI automation tests.",
        ],
        stack: ["Kotlin", "Android", "Koin", "GraphQL", "Room", "Jetpack Navigation", "Firebase"],
      },
    ],
  },
  {
    company: "Gojek",
    location: "Jakarta, Indonesia",
    totalPeriod: "Jul 2018 — Jul 2019",
    roles: [
      {
        title: "Product Engineer",
        period: "Jul 2018 — Jul 2019",
        highlights: [
          "Built and maintained the Go-Life Android app (Go-Daily, Go-Clean).",
          "Delivered features with Jetpack Compose and MVVM + Data Binding.",
          "Wrote UI automation tests with Espresso & JUnit.",
        ],
        stack: ["Kotlin", "Android Native", "REST API", "MVVM"],
      },
    ],
  },
  {
    company: "Dicoding Indonesia",
    totalPeriod: "Dec 2017 — Dec 2018",
    roles: [
      {
        title: "Code Reviewer",
        period: "Dec 2017 — Dec 2018",
        highlights: [
          "Reviewed Android coursework from program participants and gave actionable improvement feedback.",
        ],
      },
    ],
  },
  {
    company: "PT Jakarta International Container Terminal",
    location: "Greater Jakarta, Indonesia",
    totalPeriod: "Jun 2017 — Sep 2018",
    roles: [
      {
        title: "Full Stack Engineer",
        period: "Jun 2017 — Sep 2018",
        highlights: [
          "Built an internal application for managing and storing JICT operational files and data.",
        ],
      },
    ],
  },
]

export const education = [
  { school: "University of Brawijaya", degree: "B.Sc., Computer Science" },
]

export const awards = [
  "Gemastik 11",
  "Google Developer Challenge Hackathon",
  "Digital Talent Scholarship",
  "Sampoerna Scholarship",
]
