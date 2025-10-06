"use client"
import SectionTitle from "../SectionTitle"
import { emailLink, hireText } from "@/data/Common/data"
import { Icon } from "@iconify/react"

const HireMe = () => {
  return (
    <section className="flex flex-col gap-1">
      <SectionTitle title="Hire me" level={4} />
      <div className="flex flex-col gap-3">
        <p className="text-sm md:text-base leading-relaxed">{hireText}</p>
        <div className="mt-1">
          <a className="btn font-semibold" target="_blank" href={emailLink}>
            <Icon icon="mdi:briefcase" className="text-lg" />
            Hire Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default HireMe
