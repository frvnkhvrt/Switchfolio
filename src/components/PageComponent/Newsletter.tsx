import React, { useState } from "react"
import SectionTitle from "../SectionTitle"
import { newsText } from "@/data/Common/data"
import toast from "react-hot-toast"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

const Newsletter = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const apiKey = process.env.NEXT_PUBLIC_API_KEY
    const groupId = process.env.NEXT_PUBLIC_GROUP_ID
    const apiUrl = `https://connect.mailerlite.com/api/subscribers`

    const data = {
      email: email,
      name: name,
      groups: [groupId],
    }

    try {
      setLoading(true)
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setLoading(false)
        toast.success("Subscribed Successfully!")
        setName("")
        setEmail("")
      } else {
        setLoading(false)
        throw new Error("Failed to subscribe. Please try again.")
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
      toast.error("Something Went Wrong!")
    }
  }

  return (
    <section className="flex flex-col gap-0.5">
      <SectionTitle title="Newsletter" />
      <div className=" flex flex-col gap-2">
        <p>{newsText}</p>
        <div className="flex items-center justify-between p-5 border border-primaryBlue rounded-none bg-primaryBlue text-folderWhite">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-stretch md:items-center gap-2 w-full h-full"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="placeholder:text-sm placeholder:font-medium py-1.5 px-2.5 border border-primaryBlue rounded-none bg-folderWhite text-primaryBlue w-full sm:w-[160px] focus:outline-none focus:border-primaryBlue "
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 placeholder:text-sm placeholder:font-medium py-1.5 px-2.5 border border-primaryBlue rounded-none bg-folderWhite text-primaryBlue focus:outline-none focus:border-primaryBlue "
            />

            {loading ? (
              <div className="px-3 md:w-[110px] text-center flex items-center justify-center py-1.5 mx-auto h-full bg-primaryBlue rounded-none border border-primaryBlue text-folderWhite whitespace-nowrap">
                <AiOutlineLoading3Quarters className="animate-spin text-xl" />
              </div>
            ) : (
              <button
                type="submit"
                className="px-3 md:w-[110px] w-full mx-auto py-1 h-full bg-primaryBlue hover:bg-primaryBlue/80 hover:border-primaryBlue/80 rounded-none border border-primaryBlue text-folderWhite whitespace-nowrap transition-all duration-200 text-center"
              >
                Subscribe!
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
