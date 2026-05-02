import React from "react"
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"
import { HiOutlineMail } from "react-icons/hi"

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="pb-12 md:pb-48">
        <h1 className="my-10 text-center font-bold text-4xl">
          Get In Touch
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>

        <div className="flex flex-col items-center text-center max-w-xl mx-auto space-y-6">
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            I&#39;m open to chatting about{" "}
            <span className="font-semibold text-teal-600">
              engineering leadership, Android / mobile platform, or team building
            </span>
            . Whether you have a question, want to collaborate, or just want to say hi — my inbox is always open.
          </p>

          <a
            href="mailto:gbisano@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-neutral-100 font-semibold rounded shadow hover:bg-teal-700 transition-colors"
          >
            <HiOutlineMail size={20} />
            Say Hello
          </a>

          <div className="flex flex-row items-center space-x-4 pt-2">
            <a
              href="https://github.com/giovankabisano"
              rel="noreferrer"
              target="_blank"
              aria-label="GitHub"
            >
              <AiOutlineGithub
                size={32}
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/giovankabisano/"
              rel="noreferrer"
              target="_blank"
              aria-label="LinkedIn"
            >
              <AiOutlineLinkedin
                size={32}
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-300"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
