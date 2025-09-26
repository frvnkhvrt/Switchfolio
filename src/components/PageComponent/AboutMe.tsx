"use client"
import { frankhurtAbout } from "@/data/FrankhurtData/data"
import SectionTitle from "../SectionTitle"
import { useSwitch } from "../Context/SwitchContext"
import { franciscoAbout } from "@/data/FranciscoData/data"

const AboutMe = () => {
  const { isSwitchOn } = useSwitch()

  return (
    <section className="flex flex-col gap-0.5">
      <SectionTitle title="About Me" />
      <div className="flex flex-col gap-2">
        <div
          dangerouslySetInnerHTML={{
            __html: isSwitchOn ? frankhurtAbout : franciscoAbout,
          }}
          className="flex flex-col gap-1"
        />
      </div>
    </section>
  )
}

export default AboutMe
