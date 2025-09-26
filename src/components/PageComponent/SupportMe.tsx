import React from "react"
import SectionTitle from "../SectionTitle"
import { supportText } from "@/data/Common/data"
import { Icon } from "@iconify/react"

const SupportMe = () => {
  return (
    <section className="flex flex-col gap-0.5">
      <SectionTitle title="Support Me" />
      <div className=" flex flex-col gap-2">
        <p>{supportText}</p>
        <div className="flex flex-wrap items-center gap-2">
          <a
            className="btn"
            target="_blank"
            href="https://github.com/sponsors/frvnkhvrt"
          >
            <Icon icon="simple-icons:githubsponsors" className="text-pink-400" />
            GitHub Sponsors
          </a>
          <a
            className="btn"
            target="_blank"
            href="https://buymeacoffee.com/frankhurt"
          >
            <Icon icon="simple-icons:buymeacoffee" className="text-yellow-400" />
            Buy Me a Coffee
          </a>
        </div>
      </div>
    </section>
  )
}

export default SupportMe
