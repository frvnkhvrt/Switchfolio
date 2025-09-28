"use client"
import React from "react"
import LocalTime from "@/utils/LocalTime"

const Banner: React.FC = () => {

  return (
    <>
      <section className=" md:fixed md:top-4 flex w-full items-center justify-end md:px-8 px-4 select-none">
        <a
          href="https://www.google.com/search?q=time"
          target="_blank"
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
