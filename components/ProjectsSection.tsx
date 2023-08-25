import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare, BsAndroid, BsAndroid2, BsApple } from "react-icons/bs"
import parse from 'html-react-parser';

const projects = [
  {
    name: "Galaxy Buds Client for Windows & Ubuntu",
    description: "Collaborated to an open source project to create a powerfull sound management software for your Samsung Galaxy buds.",
    image: "https://raw.githubusercontent.com/ThePBone/GalaxyBudsClient/master/screenshots/screencap.gif",
    github: "https://github.com/ThePBone/GalaxyBudsClient",
    link: "https://flathub.org/apps/me.timschneeberger.GalaxyBudsClient",
  },
  {
    name: "Peduli Lindungi",
    description: `The Indonesia COVID-19 tracker app, officially endorsed by the government under the Ministry of Health. <br/> <br/>My buddies and I conceptualized an idea, crafted a prototype, and presented it to one of Indonesia's ministers. This presentation led to the subsequent transfer of the prototype to the government's ownership.`,
    image: "https://diskominfo.natunakab.go.id/wp-content/uploads/2021/09/20210910-Aplikasi-PeduliLindungi-1.jpeg",
    link: "https://satusehat.kemkes.go.id/dashboard/",
    android: "https://play.google.com/store/apps/details?id=com.telkom.tracencare",
    ios: "https://apps.apple.com/id/app/satusehat-mobile/id1504600374"
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="pb-12 md:pb-48">
        <h1 className="my-10 text-center font-bold text-4xl">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-28">
          {projects.map((project, idx) => {
            return (
              <div key={idx}>
                <SlideUp offset="-300px 0px -300px 0px">
                  <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                    <div className=" md:w-1/2">
                      <Link href={project.link}>
                        <Image
                          src={project.image}
                          alt=""
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </Link>
                    </div>
                    <div className="mt-8 md:w-1/2">
                      <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                      <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        {parse(project.description)}
                      </p>
                      <div className="flex flex-row align-bottom space-x-4">
                        {
                          project.github != null ? (
                            <Link href={project.github} target="_blank">
                              <BsGithub
                                size={30}
                                className="hover:-translate-y-1 transition-transform cursor-pointer"
                              />
                            </Link>
                          ) : null
                        }
                        {
                          project.android != null ? (
                            <Link href={project.android} target="_blank">
                              <BsAndroid2
                                size={30}
                                className="hover:-translate-y-1 transition-transform cursor-pointer"
                              />
                            </Link>
                          ) : null
                        }
                        {
                          project.ios != null ? (
                            <Link href={project.ios} target="_blank">
                              <BsApple
                                size={30}
                                className="hover:-translate-y-1 transition-transform cursor-pointer"
                              />
                            </Link>
                          ) : null
                        }
                        
                        <Link href={project.link} target="_blank">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SlideUp>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
