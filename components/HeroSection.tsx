"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import clsx from "clsx"
import GB from './assets/GB'

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        {/* <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div> */}
        <div className="md:mt-2 md:w-4/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m <span className="font-semibold text-teal-600">Ivan!</span></h1>
          <p className="text-lg mt-4 mb-2 md:text-2xl">
            I&#39;m a{" "}

            Software Engineer{" "}
            based in Jakarta, Indonesia.
          </p>
          <p className="text-lg mt-2 mb-10 md:text-2xl">
            I work with <span className="font-semibold text-teal-600">Kotlin (Android)</span> and <span className="font-semibold text-teal-600">React Ecosystem (React JS & React Native)</span>.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
      <GB className={clsx(
        'absolute bottom-0 right-6',
        'translate-y-[37%] transform-gpu',
        'w-[calc(100%-3rem)] md:w-[600px] 2xl:w-[900px]',
        'z-[-1] opacity-70 dark:opacity-30'
      )}
      />
    </section>
  )
}

export default HeroSection
