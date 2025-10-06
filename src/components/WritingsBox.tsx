import React from "react"
import Image from "next/image"
import { LINK_ATTRIBUTES } from "@/constants"
interface BlogBoxProps {
  head: string
  des: string
  link: string
  img?: string
}

const WritingsBox: React.FC<BlogBoxProps> = ({ head, des, link, img }) => {
  return (
    <a
      href={link}
      target={LINK_ATTRIBUTES.target}
      rel={LINK_ATTRIBUTES.rel}
      className=" blog-post flex items-center gap-4 focus:outline-none focus:ring-2 focus:ring-primaryBlue/50 dark:focus:ring-folderCream/50 rounded-sm p-3"
    >
      <div className="flex-1">
        <h1 className=" md:text-lg text-xl font-semibold dark:text-backgroundCreamDark">{head}</h1>
        <p className="text-sm opacity-80 dark:text-backgroundCreamDark/80">{des}</p>
      </div>
      {img && (
        <div className="flex-shrink-0">
          <Image
            src={img}
            alt={`${head} thumbnail`}
            width={80}
            height={60}
            className="w-20 h-15 object-cover rounded-sm"
          />
        </div>
      )}
    </a>
  )
}

export default WritingsBox
