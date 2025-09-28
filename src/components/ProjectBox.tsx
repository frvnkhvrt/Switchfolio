"use client"
import React, { useState, useEffect } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import { GoDotFill } from "react-icons/go"
import { LuLink, LuShare } from "react-icons/lu"
import { InfoTipProjects } from "./InfoTipProjects"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import { toast } from "react-hot-toast"
import { COMPONENT_SIZES, LINK_ATTRIBUTES } from "@/constants"

interface ProjectBoxProps {
  img: string
  status: boolean
  title: string
  content: string
  url: string
  github: string
  skill: string[]
  preview: string
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
  img,
  status,
  title,
  content,
  url,
  github,
  skill,
  preview,
}) => {
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(".project-box")) {
        setOpen(false)
      }
    }

    document.addEventListener("click", handleOutsideClick)

    return () => {
      document.removeEventListener("click", handleOutsideClick)
    }
  }, [])
  const handleShare = async (url: string) => {
    const shareData = {
      title: "Check out this Project",
      url: url,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(shareData.url)
        toast.success("Copied to clipboard")
      }
    } catch (error) {
      console.error("Error sharing:", error)
      toast.error("Error sharing")
    }
  }

  return (
    <div
      onClick={() => setOpen((prev) => !prev)}
      className="project-box bg-folderWhite cursor-pointer hover:bg-folderTan transition-colors duration-100 border border-primaryBlue rounded-none shadow-sm"
    >
      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            onClick={(e) => {
              e.stopPropagation()
            }}
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className=" overflow-hidden"
          >
            <div className="p-2 rounded-none">
              <video className="rounded-none w-full" loop autoPlay controls>
                <source src={preview} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex md:flex-row flex-col gap-3 p-2">
        <div className="basis-[22%] p-1 select-none">
          <Image
            className="rounded-none md:h-[130px] h-[200px] w-full object-cover"
            src={img}
            alt="Project Image"
            width={COMPONENT_SIZES.projectImage.width}
            height={COMPONENT_SIZES.projectImage.height}
          />
        </div>
        <div className="basis-[78%] flex flex-col md:gap-0 gap-1">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center truncate">
              <h1 className="text-2xl font-semibold">{title}</h1>
              {status ? (
                <div className="select-none font-medium text-xs w-fit px-1.5 py-0.5 gap-0.5 rounded-none flex items-center bg-primaryBlue/10 text-primaryBlue">
                  <span className="animate-pulse">
                    <GoDotFill />
                  </span>
                  Running
                </div>
              ) : (
                <div className="select-none font-medium text-xs w-fit px-1.5 py-0.5 gap-0.5 rounded-none flex items-center bg-red-400/10 text-red-400">
                  <span className="animate-pulse">
                    <GoDotFill />
                  </span>
                  Building
                </div>
              )}
            </div>
            <div className="select-none flex gap-2 px-2 text-base">
              {preview && (
                <>
                  {show ? (
                    <InfoTipProjects text="Close">
                      <a
                        onClick={(e) => {
                          e.stopPropagation()
                          setShow((prev) => !prev)
                        }}
                        target={LINK_ATTRIBUTES.target}
                        rel={LINK_ATTRIBUTES.rel}
                        className="cursor-pointer hover:text-primaryBlue transition-colors duration-100"
                      >
                        <FaEyeSlash />
                      </a>
                    </InfoTipProjects>
                  ) : (
                    <InfoTipProjects text="Preview">
                      <a
                        onClick={(e) => {
                          e.stopPropagation()
                          setShow((prev) => !prev)
                        }}
                        target="_blank"
                        className="cursor-pointer hover:text-primaryBlue transition-colors duration-100"
                      >
                        <FaEye />
                      </a>
                    </InfoTipProjects>
                  )}
                </>
              )}

              {url && (
                <InfoTipProjects text="Live">
                  <a
                    target={LINK_ATTRIBUTES.target}
                    rel={LINK_ATTRIBUTES.rel}
                    className="hover:text-primaryBlue transition-colors duration-100"
                    href={url}
                    onClick={(e) => {
                      e.stopPropagation()
                    }}
                  >
                    <LuLink />
                  </a>
                </InfoTipProjects>
              )}
              {github && (
                <InfoTipProjects text="Github">
                  <a
                    onClick={(e) => {
                      e.stopPropagation()
                    }}
                    target={LINK_ATTRIBUTES.target}
                    rel={LINK_ATTRIBUTES.rel}
                    className="hover:text-primaryBlue transition-colors duration-100"
                    href={github}
                  >
                    <FiGithub />
                  </a>
                </InfoTipProjects>
              )}
            </div>
          </div>
          <p className="opacity-80">{content}</p>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className=" overflow-hidden"
          >
            <div className="flex border-t border-primaryBlue w-[97%] mt-3 md:mt-0 mx-auto" />
            <div className="flex justify-between items-center md:py-2 py-3 px-3 transition-all duration-100">
              <div className="flex flex-wrap gap-1.5 select-none">
                {skill.map((skill, index) => (
                  <p
                    key={index}
                    className="border border-primaryBlue px-2 py-0.5 rounded-none text-sm"
                  >
                    {skill}
                  </p>
                ))}
              </div>
              <div className="flex gap-4 items-center md:px-2 px-2.5 md:text-lg text-xl">
                <div
                  className="cursor-pointer select-none hover:text-primaryBlue transition-colors duration-100"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleShare(url ? url : github)
                  }}
                >
                  <LuShare />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProjectBox
