import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Kotlin" },
  { skill: "Android" },
  { skill: "JavaScript" },
  { skill: "React Native" },
  { skill: "React JS" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "TDD" },
  { skill: "Google Analytics" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, I&#39;m Giovanka but people called me Ivan for short. I have the expertise in Android Development and I am familiar with React also, so I can do some web programming as well.
            </p>
            <br />
            <p>
              I worked at various top-tier companies in Indonesia since 2019 after 
              I graduated from Brawijaya University with a CS in Computer Engineering and have been working in the
              field ever since.
            </p>
            <br />
            <p>
              Managerial path is the career ladder that I want to achieve and people that have worked with me said that I am suitable for that 😆
            </p>
            <br />
            <p>
              I love to talk about business and peoples. <br></br>Fun fact, I have my own coffe shop but I <b>don&#39;t</b> like coffee.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            {/* <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
