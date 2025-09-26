"use client"
import { frankhurtBio, frankhurtImage, frankhurtLink, frankhurtName } from "@/data/FrankhurtData/data"
import React, { useState } from "react"
import { InfoTip } from "../InfoTip"
import Available from "../Available"
import { useSwitch } from "../Context/SwitchContext"
import {
  franciscoBio,
  franciscoImage,
  franciscoLink,
  franciscoName,
} from "@/data/FranciscoData/data"
import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"
import Image from "next/image"
const InfoCard: React.FC = () => {
  const { isSwitchOn } = useSwitch()
  const [isOpen, setIsOpen] = useState(false)
  const socialLink = isSwitchOn ? frankhurtLink : franciscoLink
  return (
    <section>
      <div className=" flex flex-col gap-2">
        <div className=" block md:hidden">
          <Available text="Available" />
        </div>

        <div className="flex gap-3 items-center">
          <div
            onClick={() => setIsOpen(true)}
            className=" cursor-pointer hover:brightness-75 transition duration-200 select-none w-1/3 md:w-auto"
          >
            <Image
              src={isSwitchOn ? frankhurtImage : franciscoImage}
              alt="Profile Picture"
              className="pro-pic"
              width={200}
              height={200}
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center">
              <h1 className=" head-name ">
                {isSwitchOn ? frankhurtName : franciscoName}
              </h1>
              <div className=" md:block hidden">
                <Available text="Available" />
              </div>
            </div>
            <p>{isSwitchOn ? frankhurtBio : franciscoBio}</p>
            <div className="flex flex-wrap gap-1.5">
              {socialLink.map((link) => (
                <InfoTip key={link.id} text={link.name}>
                  <a className="social-card" href={link.link} target="_blank">
                    {<link.icon />}
                  </a>
                </InfoTip>
              ))}
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className=" select-none fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>

            {/* Fixed size modal container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-[600px]  max-w-[90vw]  md:max-w-[25vw]  rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={isSwitchOn ? frankhurtImage : franciscoImage}
                alt="Profile Picture"
                className=" rounded-lg w-full h-full object-contain"
                width={200}
                height={200}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default InfoCard
