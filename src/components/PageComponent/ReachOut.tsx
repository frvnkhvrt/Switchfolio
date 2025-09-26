"use client"
import { frankhurtContact, frankhurtContactLink } from "@/data/FrankhurtData/data"
import SectionTitle from "../SectionTitle"
import { useSwitch } from "../Context/SwitchContext"
import { franciscoContact, franciscoContactLink } from "@/data/FranciscoData/data"

const ReachOut = () => {
  const { isSwitchOn } = useSwitch()
  const contactLink = isSwitchOn ? frankhurtContactLink : franciscoContactLink

  return (
    <section className="flex flex-col gap-0.5">
      <SectionTitle title="Reach out to me" />
      <div className=" flex flex-col gap-2.5">
        <p>{isSwitchOn ? frankhurtContact : franciscoContact}</p>
        <div>
          <div className=" flex flex-wrap items-center gap-2">
            {contactLink.map((link) => (
              <a className="btn" key={link.id} target="_blank" href={link.link}>
                <link.icon />
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReachOut
