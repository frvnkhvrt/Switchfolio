import React from "react"
import { LINK_ATTRIBUTES } from "@/constants"
interface BlogBoxProps {
  head: string
  des: string
  link: string
}

const WritingsBox: React.FC<BlogBoxProps> = ({ head, des, link }) => {
  return (
    <a
      href={link}
      target={LINK_ATTRIBUTES.target}
      rel={LINK_ATTRIBUTES.rel}
      className=" blog-post flex flex-col gap-0.5 focus:outline-none focus:ring-2 focus:ring-primaryBlue/50 dark:focus:ring-folderCream/50 rounded-sm"
    >
      <h1 className=" md:text-lg text-xl font-semibold dark:text-backgroundCreamDark">{head}</h1>
      <p className="text-sm opacity-80 dark:text-backgroundCreamDark/80">{des}</p>
    </a>
  )
}

export default WritingsBox
