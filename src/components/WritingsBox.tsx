import Image from "next/image"
import React from "react"
import { COMPONENT_SIZES, LINK_ATTRIBUTES } from "@/constants"
interface BlogBoxProps {
  img: string
  head: string
  des: string
  link: string
}

const WritingsBox: React.FC<BlogBoxProps> = ({ img, head, des, link }) => {
  return (
    <a
      href={link}
      target={LINK_ATTRIBUTES.target}
      rel={LINK_ATTRIBUTES.rel}
      className=" blog-post flex md:flex-row flex-col   items-center gap-3"
    >
      <Image
        className=" md:w-[20%] w-full object-cover  h-[100px] select-none rounded-none"
        src={img}
        alt="Blog Image"
        width={COMPONENT_SIZES.blogImage.width}
        height={COMPONENT_SIZES.blogImage.height}
      />
      <div className=" md:w-[80%] flex flex-col gap-0.5 ">
        <h1 className=" md:text-lg text-xl font-semibold">{head}</h1>
        <p className=" opacity-80">{des}</p>
      </div>
    </a>
  )
}

export default WritingsBox
