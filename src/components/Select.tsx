"use client"
import { useState } from "react"

interface Option {
  value: string
  label: string
}

const Select = ({ options }: { options: Option[] }) => {
  const [selectedOption, setSelectedOption] = useState<string>("")
  return (
    <div>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="w-full px-3 py-1 bg-folderWhite border border-primaryBlue rounded-none
                   focus:outline-none focus:border-primaryBlue hover:border-primaryBlue appearance-none cursor-pointer transition duration-100"
      >
        <option value="Show all">Show all</option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className=" hover:bg-zinc-800"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
