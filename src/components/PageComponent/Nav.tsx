"use client"
import { frankhurtImage } from "@/data/FrankhurtData/data"
import { useSwitch } from "../Context/SwitchContext"
import { franciscoImage } from "@/data/FranciscoData/data"
import Image from "next/image"
import { navLinks } from "@/data/Common/data"
import { InfoTipNav } from "../InfoTipNav"
import { Icon } from "@iconify/react"

const Nav = () => {
  const { isSwitchOn, toggleSwitch } = useSwitch()

  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center items-center">
      <div className="relative bg-folderWhite text-primaryBlue border border-primaryBlue px-3 py-2 rounded-none flex items-center gap-3 shadow-sm">
        <div className=" flex gap-4 items-center">
          {navLinks.map((nav) => (
            <InfoTipNav key={nav.id} text={nav.name}>
              <a className=" " href={nav.link}>
                <Icon icon={nav.icon} />
              </a>
            </InfoTipNav>
          ))}
        </div>
        <div className="h-8 w-[1px] bg-primaryBlue  mr-1"></div>
        <div
          className="rounded-none md:hover:brightness-75 transition duration-200 cursor-pointer"
          onClick={toggleSwitch}
        >
          <Image
            src={isSwitchOn ? franciscoImage : frankhurtImage}
            alt="Profile Picture"
            className="rounded-none"
            width={35}
            height={35}
            // title={isSwitchOn ? franciscoShortName : frankhurtName}
          />
        </div>
      </div>
    </div>
  )
}

export default Nav
