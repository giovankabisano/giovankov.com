import React from "react"

const skillGroups = [
  { label: "Mobile", items: ["Kotlin", "Android", "React Native"] },
  { label: "Web", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { label: "Backend & Data", items: ["Go", "MongoDB", "GraphQL", "Firebase"] },
  { label: "Tooling", items: ["Git", "GitHub", "Google Analytics", "AWS"] },
  { label: "Practices", items: ["TDD", "Code Review", "Mentoring", "Hiring"] },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, I&#39;m <b>Giovanka Bisano</b> but people call me <b>Ivan</b> for short.
              I have deep expertise in Android Development and am equally at home on the web with React — so I can work across the full mobile and frontend stack.
            </p>
            <br />
            <p>
              I&#39;ve been working in software since 2017, graduating from Brawijaya University with a degree in Computer Science
              and going on to build products at companies like{" "}
              <span className="font-semibold">Gojek</span>,{" "}
              <span className="font-semibold">Kargo Technologies</span>, and now{" "}
              <span className="font-semibold">eDOT</span>.
            </p>
            <br />
            <p>
              I&#39;m on the managerial path — people I&#39;ve worked with tell me it&#39;s the right fit 😄.
              I care about building high-trust teams, clear engineering processes, and software that actually solves real problems.
            </p>
          </div>

          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-col space-y-4">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-teal-600 mb-2">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-200 dark:bg-stone-700 px-3 py-1 text-gray-500 dark:text-neutral-300 rounded font-semibold text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
