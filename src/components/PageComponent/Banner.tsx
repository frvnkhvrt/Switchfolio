"use client"
import React from "react"
import LocalTime from "@/utils/LocalTime"
import { EXTERNAL_LINKS, LINK_ATTRIBUTES } from "@/constants"

const Banner: React.FC = () => {

  return (
    <>
      <section className=" md:fixed md:top-4 flex w-full items-center justify-end md:px-8 px-4 select-none">
        <a
          href={EXTERNAL_LINKS.googleTimeSearch}
          target={LINK_ATTRIBUTES.target}
          rel={LINK_ATTRIBUTES.rel}
          className="  flex gap-1 md:gap-2 items-center text-white/65 hover:text-white/90 transition-all duration-100 font-medium"
        >
          <span className=" hidden md:block text-inkBlack dark:text-backgroundCream">Local time</span>
          <span className="md:text-sm text-base text-inkBlack dark:text-backgroundCream">
            <LocalTime />
          </span>
        </a>
      </section>
    </>
  )
}

export default Banner
