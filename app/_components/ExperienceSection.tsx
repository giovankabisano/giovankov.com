"use client"
import React from "react"
import SlideUp from "../../components/SlideUp"
import { experiences, education, awards } from "../_data/experience"

const ExperienceSection = () => {
  return (
    <section id="experience">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Experience
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>

        <div className="relative mt-10">
          {/* Timeline rail — visible on md+ */}
          <div className="hidden md:block absolute left-4 top-2 bottom-0 w-0.5 bg-teal-500/30" />

          <div className="flex flex-col space-y-12">
            {experiences.map((exp, i) => (
              <SlideUp key={i} offset="-200px 0px -200px 0px">
                <div className="md:pl-14 relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-2.5 top-2 w-3 h-3 rounded-full bg-teal-500 -translate-x-1/2 ring-2 ring-teal-500/30" />

                  {/* Company header */}
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold">{exp.company}</h2>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                      {exp.location && <span>{exp.location}</span>}
                      {exp.location && exp.totalPeriod && (
                        <span className="hidden sm:inline">·</span>
                      )}
                      {exp.totalPeriod && <span>{exp.totalPeriod}</span>}
                    </div>
                  </div>

                  {/* Roles */}
                  <div className="flex flex-col space-y-6">
                    {exp.roles.map((role, j) => (
                      <div
                        key={j}
                        className="bg-gray-50 dark:bg-stone-800 rounded-xl p-5 border border-gray-100 dark:border-stone-700"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                          <h3 className="text-lg font-semibold text-teal-600">
                            {role.title}
                          </h3>
                          <span className="text-sm text-neutral-500 dark:text-neutral-400 font-medium whitespace-nowrap">
                            {role.period}
                          </span>
                        </div>

                        {role.highlights && (
                          <ul className="space-y-1.5 mb-4">
                            {role.highlights.map((h, k) => (
                              <li
                                key={k}
                                className="flex gap-2 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed"
                              >
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        )}

                        {role.stack && (
                          <div className="flex flex-wrap gap-2">
                            {role.stack.map((tech, k) => (
                              <span
                                key={k}
                                className="text-xs bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-2 py-0.5 rounded-full font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>

        {/* Education + Awards */}
        <SlideUp offset="-150px 0px -150px 0px">
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              {education.map((ed, i) => (
                <div key={i} className="bg-gray-50 dark:bg-stone-800 rounded-xl p-5 border border-gray-100 dark:border-stone-700">
                  <p className="font-semibold">{ed.school}</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{ed.degree}</p>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Honors &amp; Awards</h2>
              <div className="flex flex-wrap gap-2">
                {awards.map((award, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 dark:bg-stone-700 px-4 py-2 text-gray-600 dark:text-neutral-300 rounded font-semibold text-sm"
                  >
                    {award}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  )
}

export default ExperienceSection
