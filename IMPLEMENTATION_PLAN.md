# Website Improvement Plan

A prioritized plan to make giovankov.com richer in content, better structured for visitors (recruiters, peers, collaborators), and stronger for SEO.

## Current state (audit)

The site renders four sections from [app/page.tsx](app/page.tsx): Hero, About, Projects, Books — plus a [Navbar](components/Navbar.tsx) and [Footer](components/Footer.tsx).

**Gaps observed in the code:**

1. **No Experience / Work History section** — the hero says "Engineering Manager at eDOT" but there's no timeline of roles, scope, or impact. Working since 2019 (per [AboutSection.tsx:37-40](app/_components/AboutSection.tsx#L37-L40)) but no record of it.
2. **Only 2 projects** in [ProjectsSection.tsx:8-24](app/_components/ProjectsSection.tsx#L8-L24) — Galaxy Buds Client and Peduli Lindungi. Sparse for someone with 6+ years of experience.
3. **Blog is broken** — [app/blog/page.tsx:8](app/blog/page.tsx#L8) renders the placeholder string `"wefwekjhejkw"`. It's also not linked from the navbar, but the route is publicly accessible.
4. **No Contact / Get in touch section** — only LinkedIn + GitHub icons in the footer.
5. **Skills are a flat tag cloud** ([AboutSection.tsx:4-16](app/_components/AboutSection.tsx#L4-L16)) — no grouping (mobile / web / tooling / leadership).
6. **No "leadership" content** despite being an EM and citing the managerial-track books — no mention of team size, mentoring, hiring, processes.
7. **No achievements / press** — Peduli Lindungi being presented to a minister is mentioned in passing in a project description; it deserves a callout.
8. **Footer social icons** ([Footer.tsx:18-33](components/Footer.tsx#L18-L33)) — Twitter and YouTube imports are unused; only GitHub + LinkedIn are rendered. Either add them or drop the imports.
9. **SEO depth is shallow** — [app/page.tsx:7-25](app/page.tsx#L7-L25) has metadata but no Open Graph image, no JSON-LD `Person` schema, no Twitter card.
10. **`app/layout.tsx` is `"use client"`** — this opts the entire tree out of server rendering. Move `ThemeProvider` into a small client wrapper so the layout can stay a server component.
11. **No analytics** despite "Google Analytics" being in the skills list.

---

## Proposed additions

Each item lists *what to add*, *why*, and *which file to create or edit*.

### 1. Experience / Career Timeline section — **High priority**

**Why:** The single highest-impact addition. The site currently shows "Engineering Manager at eDOT" but hides 9 years of trajectory through Gojek, Kargo, and earlier roles — including concrete metrics (33% server cost reduction, 80% deploy time reduction, etc.) that recruiters and peers respond to.

**Files to create:**
- [app/_data/experience.ts](app/_data/experience.ts) — typed data
- [app/_components/ExperienceSection.tsx](app/_components/ExperienceSection.tsx) — rendering only

**Files to edit:**
- [app/page.tsx](app/page.tsx) — mount between `AboutSection` and `ProjectsSection`
- [components/Navbar.tsx](components/Navbar.tsx#L15-L32) — add `{ label: "Experience", page: "experience" }` to `NAV_ITEMS`
- [app/_components/AboutSection.tsx](app/_components/AboutSection.tsx#L37) — fix "since 2019" to "since 2017" (PT JICT was the actual start)

**Drop-in data — `app/_data/experience.ts`** (extracted from your LinkedIn, grouped by company so multiple roles at the same employer collapse into one card):

```ts
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
          "Built a new business line from scratch — React JS web app and React Native mobile app — partnering closely with product on scope.",
          "Owned the unit-test-coverage initiative (>75%), unlocking weekly deploys for both web and mobile.",
          "Integrated Unleash feature flags; release cycle sped up 50% and master became always-deployable.",
        ],
        stack: ["React Native", "React Router", "AWS"],
      },
      {
        title: "SDE 1 — Android Engineer",
        period: "Jul 2019 — Jan 2021",
        highlights: [
          "Shipped 2 apps from scratch for Transporters and Truck Drivers.",
          "Owned manual and automatic Google Play deployments.",
          "Kept app size under 6 MB.",
          "Established MVVM + Clean Architecture as the team's foundation; wrote UI automation tests.",
        ],
        stack: ["Kotlin", "Android", "Koin", "GraphQL", "Room", "Jetpack Navigation", "MVVM", "Firebase"],
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
        stack: ["Kotlin", "Android Native", "XML", "REST API", "MVVM"],
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
          "Reviewed Android coursework from program participants and gave actionable feedback.",
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
          "Built an internal application for managing and storing JICT files and data.",
        ],
      },
    ],
  },
]
```

**Rendering notes:** Vertical timeline on desktop (teal rail + dots, matching the existing teal-600 accent), stacked cards on mobile. Wrap each company card in `SlideUp`. For employers with multiple roles, render the role list under one company header so the trajectory is visible at a glance.

### 1b. Education + Awards strip — **paired with Experience**

**Why:** Gemastik 11, Google Developer Challenge Hackathon, Digital Talent Scholarship, and Sampoerna Scholarship are credibility signals currently nowhere on the site.

**File:** add to [app/_data/experience.ts](app/_data/experience.ts) or create [app/_data/credentials.ts](app/_data/credentials.ts):

```ts
export const education = [
  { school: "University of Brawijaya", degree: "B.Sc., Computer Science" },
]

export const awards = [
  "Gemastik 11",
  "Google Developer Challenge Hackathon",
  "Digital Talent Scholarship",
  "Sampoerna Scholarship",
  "Google Local Guide",
]
```

Render as a small two-column block at the bottom of the Experience section: "Education" on the left, "Honors & Awards" as chips on the right.

### 2. Expand Projects + add a "Project" type — **High priority**

**Why:** Two projects undersells the work. Add 3–6 more — even small open-source contributions, side projects, or anonymized work artifacts.

**File:** [app/_components/ProjectsSection.tsx](app/_components/ProjectsSection.tsx)

**Concrete improvements:**

- Extract the `projects` array into [app/_data/projects.ts](app/_data/projects.ts) and type it. Define `Project` with `category: "work" | "oss" | "side"`, `year`, `tech: string[]`, optional `metrics` (e.g., "10M+ downloads"). Do the same for books and experience to keep section components rendering-only.
- Add a tech-pill row under each project (small chips for the `tech` array).
- Add a "category" filter or section heading so OSS contributions don't get lost next to flagship apps.
- Suggested additions: any eDOT-public work, dev tooling, blog tooling for this very site, internal libraries you can describe at a high level.

### 3. Fix or remove the Blog — **High priority**

**Why:** [app/blog/page.tsx](app/blog/page.tsx) currently ships the literal string `"wefwekjhejkw"` to production. Either make it real or delete the route.

**Two options:**

- **Delete** the directory if blogging isn't a near-term goal.
- **Build minimal MDX blog:** add `contentlayer` or `next-mdx-remote`, store posts in `content/blog/*.mdx` with frontmatter (`title`, `date`, `summary`, `tags`), and render an index at `/blog` plus a dynamic route at `/blog/[slug]`. Even 2–3 posts on EM topics (1:1 templates, hiring, on-call) give the site lasting SEO value.

If choosing MDX, add a `Writing` section to the home page that previews the latest 3 posts and links to `/blog`.

### 4. Contact section — **Medium priority**

**File:** create [app/_components/ContactSection.tsx](app/_components/ContactSection.tsx), mount last on the home page, add to nav.

**Content:** short pitch ("Open to mentoring, speaking, or collaborating on Android / mobile-platform work"), a `mailto:` button, plus the same socials currently in the footer. No form needed — `mailto:` is enough and avoids spam infra.

### 5. Talks / Writing / Community — **Medium priority**

**Why:** EM-track positioning benefits massively from visible thought leadership. Even one talk, podcast appearance, or external article counts.

**File:** new [app/_components/TalksSection.tsx](app/_components/TalksSection.tsx) (or merge into a single "Beyond Code" section with community contributions). Skip if there's genuinely no content — empty sections look worse than missing ones.

### 6. Group + label skills — **Low priority, quick win**

**File:** [app/_components/AboutSection.tsx](app/_components/AboutSection.tsx)

Replace the flat `skills` array with grouped categories:

```ts
const skillGroups = [
  { label: "Mobile",     items: ["Kotlin", "Android", "React Native"] },
  { label: "Web",        items: ["React", "Next.js", "Tailwind", "TypeScript"] },
  { label: "Tooling",    items: ["Git", "GitHub", "Google Analytics", "Firebase"] },
  { label: "Practices",  items: ["TDD", "Code Review", "Mentoring", "Hiring"] },
]
```

Add the leadership row — it reinforces the EM positioning that the rest of the site is making.

### 7. Hero metrics strip — **Low priority, quick win**

**File:** [app/_components/HeroSection.tsx](app/_components/HeroSection.tsx)

Add a thin row of three numbers below the CTA: "6+ years shipping software", "Initiator of Peduli Lindungi (used by 100M+ Indonesians)", "Currently leading <N> engineers at eDOT". Concrete numbers anchor the rest of the page.

### 8. SEO + sharing polish — **Medium priority**

**File:** [app/page.tsx](app/page.tsx) and a new [app/opengraph-image.tsx](app/opengraph-image.tsx)

- Use Next.js's [opengraph-image convention](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image) to generate a 1200x630 OG image at build time.
- Add `metadata.openGraph.images` and `metadata.twitter` (card type, creator handle).
- Add JSON-LD `Person` schema in `app/layout.tsx` for rich Google results — name, jobTitle, sameAs (LinkedIn, GitHub).
- Verify `next-sitemap` output covers all routes (currently configured in [next-sitemap.config.js](next-sitemap.config.js)).

### 9. Layout server-component fix — **Low priority, code health**

**File:** [app/layout.tsx](app/layout.tsx)

Currently the entire app is opted into client rendering because `layout.tsx` starts with `"use client"`. Extract `ThemeProvider` into [app/providers.tsx](app/providers.tsx) marked `"use client"`, then make `layout.tsx` a server component that imports `<Providers>`. This unlocks server metadata and faster TTFB without changing behavior.

### 10. Footer cleanup — **Low priority, quick win**

**File:** [components/Footer.tsx](components/Footer.tsx)

Either render the imported but unused `AiOutlineTwitter` / `AiOutlineYoutube` icons (with real links) or remove the imports.

### 11. Analytics — **Low priority**

Add `@vercel/analytics` (one component in `layout.tsx`, no config) or hook up GA4 via `next/script`. The site is Vercel-hosted (per [.vercelignore](.vercelignore)) so the Vercel package is the lowest-friction option.

---

## Suggested execution order

The first three items together transform the site from "portfolio template" to "EM portfolio with substance." Everything below #3 is polish.

1. Add **Experience** section (item 1)
2. Expand **Projects** + extract data files (item 2)
3. **Fix or delete** the broken blog (item 3)
4. Add **Contact** section (item 4)
5. Polish: skills grouping, hero metrics, SEO, footer, layout split (items 6–10)
6. Optional: Talks/Writing, analytics (items 5, 11)

## Inconsistencies to resolve before shipping

These came up while reconciling your LinkedIn against the current site copy. Decide and fix in the same PR as the Experience section:

1. **"Working since 2019"** — [AboutSection.tsx:37-40](app/_components/AboutSection.tsx#L37-L40) says you've been working since 2019, but PT JICT (Jun 2017) and Gojek (Jul 2018) predate that. Update to **2017** or **"7+ years"**.
2. **Peduli Lindungi attribution** — [HeroSection.tsx:35](app/_components/HeroSection.tsx#L35) calls you the *Initiator of Peduli Lindungi*. Your LinkedIn doesn't list Telkom or any role tied to Peduli Lindungi, and the project description in [ProjectsSection.tsx:18](app/_components/ProjectsSection.tsx#L18) frames it as "my buddies and I conceptualized... and presented to a minister" rather than a paid role. Recruiters will read the hero claim and look for a matching employer entry. Either add a role/volunteer entry to the timeline (e.g., "Peduli Lindungi — Initiator / Volunteer, 2020–2021") or soften the hero copy to "Co-initiator" / "One of the initiators."
3. **Hometown** — LinkedIn header says Jakarta; hero says Jakarta too — consistent. Skip.
4. **Skills mismatch** — LinkedIn top skills are Go / MongoDB / Next.js. The site's [skills array](app/_components/AboutSection.tsx#L4-L16) lists Kotlin/Android/React first and omits Go and MongoDB entirely despite both being core to your eDOT and Kargo work. Add them when grouping skills (item #6 in this plan).

## Out of scope (intentional)

- A CMS — content volume doesn't justify it; keep data in typed `.ts` files in `app/_data/`.
- A contact form backend — `mailto:` is sufficient.
- i18n — single audience, not needed.
- A redesign — current visual language (teal accent, SlideUp animation, dark mode) is fine; this plan only adds content and structure.
