import React from "react"
import SectionTitle from "../SectionTitle"
import { supportText } from "@/data/Common/data"
import { FaRegHeart } from "react-icons/fa6"
import { SiBuymeacoffee } from "react-icons/si"
import toast from "react-hot-toast"

const SupportMe = () => {
  const handleShare = async (url: string) => {
    await navigator.clipboard.writeText(url)
    toast.success("Copied to clipboard")
  }
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
            <FaRegHeart className="text-pink-400" />
            GitHub Sponsors
          </a>
          <a
            className="btn"
            target="_blank"
            href="https://https://buymeacoffee.com/frankhurt"
          >
            <SiBuymeacoffee className="text-yellow-400" />
            Buy Me a Coffee
          </a>
        </div>
      </div>
    </section>
  )
}

export default SupportMe
