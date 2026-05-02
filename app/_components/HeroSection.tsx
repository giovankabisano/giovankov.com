"use client"
import React from "react"
import Image from "next/image"
import { Link as LinkScroll } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const stats = [
  { value: "8+", label: "Years shipping software" },
  { value: "6", label: "Engineers managed at Kargo" },
  { value: "100M+", label: "Users reached via Peduli Lindungi" },
]

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2 flex flex-row items-center text-center justify-center">
          <Image
            src="/headshot.jpg"
            alt="Giovanka Bisano"
            width={250}
            height={250}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-4/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m <span className="font-semibold text-teal-600">Ivan!</span>
          </h1>
          <p className="text-lg mt-4 mb-2 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">Software Engineer</span>{" "}
            based in Jakarta, Indonesia.
          </p>
          <p className="text-lg mt-2 mb-5 md:text-2xl">
            I work with{" "}
            <span className="font-semibold text-teal-600">Kotlin (Android)</span> and the{" "}
            <span className="font-semibold text-teal-600">React Ecosystem</span>.
          </p>
          <p className="text-lg mt-2 mb-5 md:text-2xl">
            Co-initiator of{" "}
            <a href="https://satusehat.kemkes.go.id/dashboard/" className="text-[#4c99d3] font-semibold hover:underline">
              Peduli Lindungi
            </a>
            , Indonesia&#39;s national health app.
          </p>
          <p className="text-lg mt-2 mb-8 md:text-2xl">
            Currently{" "}
            <span className="font-semibold text-teal-600">Engineering Manager</span> at{" "}
            <a href="https://edot.id/" className="text-[#4c99d3] font-semibold hover:underline">
              eDOT
            </a>{" "}
            🚀
          </p>

          {/* Metrics strip */}
          <div className="flex flex-wrap gap-6 mb-10">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <p className="text-3xl font-bold text-teal-600">{s.value}</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{s.label}</p>
              </div>
            ))}
          </div>

          <LinkScroll
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            View Projects
          </LinkScroll>
        </div>
      </div>

      <div className="flex flex-row items-center text-center justify-center">
        <LinkScroll
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="cursor-pointer"
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </LinkScroll>
      </div>
    </section>
  )
}

export default HeroSection
