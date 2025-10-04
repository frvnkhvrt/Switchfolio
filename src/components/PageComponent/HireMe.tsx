"use client"
import SectionTitle from "../SectionTitle"
import { emailLink, hireText } from "@/data/Common/data"
import { Icon } from "@iconify/react"

const HireMe = () => {
  return (
    <section className="flex flex-col gap-1">
      <SectionTitle title="Hire me" level={4} />
      <div className=" flex flex-col gap-2">
        <p>{hireText}</p>
        <div>
          <a className="btn" target="_blank" href={emailLink}>
            <Icon icon="mdi:briefcase" />
            Hire Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default HireMe
