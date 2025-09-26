"use client"
import { frankhurtFooterLink, frankhurtName } from "@/data/FrankhurtData/data"
import { useSwitch } from "../Context/SwitchContext"
import { franciscoFooterLink, franciscoShortName } from "@/data/FranciscoData/data"

const Footer = () => {
  const { isSwitchOn } = useSwitch()
  const footerLinks = isSwitchOn ? frankhurtFooterLink : franciscoFooterLink
  return (
    <footer className="md:mb-12 mb-16">
      <div className=" border-t border-primaryBlue my-6" />
      <div className=" flex flex-col gap-2.5 items-center">
        <div className=" flex flex-wrap gap-4 items-center md:text-base text-sm">
          {footerLinks.map((link) => (
            <a
              key={link.id}
              className=" select-none md:text-base text-xl text-primaryBlue hover:opacity-75 flex gap-1 items-center transition duration-100"
              target="_blank"
              href={link.link}
            >
              <link.icon /> <span className="hidden md:block">{link.name}</span>
            </a>
          ))}
        </div>
        <p className="text-sm ">
          © 2025 {isSwitchOn ? frankhurtName : franciscoShortName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
