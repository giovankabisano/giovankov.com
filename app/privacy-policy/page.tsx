import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Vankov Dev",
  description:
    "Privacy Policy for mobile and web applications published by Vankov Dev.",
  robots: {
    index: true,
    follow: true,
  },
}

const EFFECTIVE_DATE = "July 1, 2026"
const DEVELOPER_NAME = "Vankov Dev"
const CONTACT_EMAIL = "gbisano@gmail.com"

const Section = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => (
  <section className="mt-8">
    <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
      {title}
    </h2>
    <div className="mt-3 space-y-3 text-neutral-600 dark:text-neutral-400 leading-relaxed">
      {children}
    </div>
  </section>
)

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 pt-28 pb-24">
      <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
        Privacy Policy
        <hr className="w-6 h-1 my-4 bg-teal-500 border-0 rounded" />
      </h1>
      <p className="text-sm text-neutral-500 dark:text-neutral-500">
        Effective date: {EFFECTIVE_DATE}
      </p>

      <Section title="Overview">
        <p>
          This Privacy Policy explains how {DEVELOPER_NAME} (&quot;we&quot;,
          &quot;us&quot;, or &quot;our&quot;) handles information in connection
          with the mobile and web applications we publish on the Apple App Store
          and Google Play Store (collectively, the &quot;Apps&quot;). We are
          committed to protecting your privacy and being transparent about our
          data practices.
        </p>
      </Section>

      <Section title="Information We Collect">
        <p>
          Our Apps are designed to collect as little personal data as possible.
          Depending on the specific App and features you use, we may handle:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Information you provide.</span>{" "}
            Data you enter directly, such as content you create or preferences
            you set within an App.
          </li>
          <li>
            <span className="font-semibold">Device &amp; usage data.</span>{" "}
            Non-identifying technical information such as device model,
            operating system version, app version, and crash logs, used to
            diagnose issues and improve stability.
          </li>
          <li>
            <span className="font-semibold">Analytics data.</span> We may
            collect limited information such as your name and approximate
            location. This data is used solely for analytics purposes — to
            understand how our Apps are used and to improve them — and is not
            used for advertising or sold to third parties.
          </li>
          <li>
            <span className="font-semibold">Locally stored data.</span> Some
            Apps store data only on your device. This data is not transmitted to
            us unless explicitly stated within the App.
          </li>
        </ul>
      </Section>

      <Section title="How We Use Information">
        <ul className="list-disc pl-6 space-y-2">
          <li>To operate, maintain, and provide the features of the Apps.</li>
          <li>To diagnose crashes, fix bugs, and improve performance.</li>
          <li>To respond to your support requests.</li>
          <li>To comply with legal obligations.</li>
        </ul>
        <p>
          We do not sell your personal information, and we do not use it for
          advertising profiling.
        </p>
      </Section>

      <Section title="Third-Party Services">
        <p>
          Some Apps may use third-party services (for example, crash reporting
          or analytics providers) that collect information as governed by their
          own privacy policies. Where used, these services are configured to
          collect only what is necessary to operate and improve the Apps.
        </p>
      </Section>

      <Section title="Data Sharing">
        <p>
          We do not share your personal information with third parties except:
          (a) with service providers acting on our behalf; (b) to comply with
          the law or a valid legal request; or (c) to protect the rights,
          safety, and property of our users or the public.
        </p>
      </Section>

      <Section title="Data Retention">
        <p>
          We retain information only as long as needed for the purposes
          described in this policy or as required by law. Data stored locally on
          your device is removed when you delete the App.
        </p>
      </Section>

      <Section title="Your Rights">
        <p>
          Depending on your jurisdiction, you may have the right to access,
          correct, or delete your personal information. To exercise these
          rights, contact us using the details below.
        </p>
      </Section>

      <Section title="Children&apos;s Privacy">
        <p>
          Our Apps are not directed to children under 13, and we do not
          knowingly collect personal information from children. If you believe a
          child has provided us personal information, please contact us and we
          will delete it.
        </p>
      </Section>

      <Section title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Changes take
          effect when posted on this page, with the &quot;Effective date&quot;
          above updated accordingly.
        </p>
      </Section>

      <Section title="Contact Us">
        <p>
          If you have questions about this Privacy Policy or our data practices,
          contact us at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-teal-600 hover:text-teal-700"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </Section>

      <div className="mt-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-neutral-100 font-semibold rounded shadow hover:bg-teal-700 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}
