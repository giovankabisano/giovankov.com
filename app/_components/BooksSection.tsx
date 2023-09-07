import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "../../components/SlideUp"
import { BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "The Managers Path",
    description:
      "From mentoring interns to working with senior staff, you’ll get actionable advice for approaching various obstacles in your path.",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1484107737i/33369254.jpg",
    link: "https://awesome-emu-e2c.notion.site/The-Managers-Path-5ba5aaa374f14f5f8dad70459d36c786",
  },
  {
    name: "Read This Before Our Next Meeting",
    description: "Accessible guide on making meetings more effective, efficient, and worthy of attending. You know, why bother wasting your time.",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328349725i/11994353.jpg",
    link: "https://www.goodreads.com/book/show/11994353-read-this-before-our-next-meeting",
  },
  {
    name: "An Elegant Puzzle: Systems of Engineering Management",
    description: "A human-centric guide to solving complex problems in engineering management, from sizing teams to handling technical debt.",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1556221385i/45303387.jpg",
    link: "https://www.goodreads.com/en/book/show/45303387",
  },
  {
    name: "Radical Candor: Be a Kick-Ass Boss Without Losing Your Humanity",
    description: "From the time we learn to speak, we’re told that if you don’t have anything nice to say, don’t say anything at all. When you become a manager, it’s your job to say it--and your obligation",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1482838407i/29939161.jpg",
    link: "https://www.goodreads.com/en/book/show/29939161",
  },
]

const BooksSection = () => {
  return (
    <section id="books">
      <div className="pb-12 md:pb-48">
        <h1 className="my-10 text-center font-bold text-4xl">
          Books I&#39;ve Read
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-8">
          {projects.map((project, idx) => {
            return (
              <div key={idx}>
                <SlideUp offset="-300px 0px -300px 0px">
                  <div className="animate-slideUpCubiBezier animation-delay-2">
                    <div className="flex flex-row items-center justify-center">
                      <Link href={project.link} target="_blank">
                        <Image
                          src={project.image}
                          alt=""
                          width={250}
                          height={250}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </Link>
                    </div>
                    <div className="mt-8">
                      <h1 className="text-4xl text-center font-bold mb-6">{project.name}</h1>
                      <p className="text-xl text-center leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        {project.description}
                      </p>
                      <div className="flex flex-row align-bottom space-x-4 justify-center">
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

export default BooksSection
