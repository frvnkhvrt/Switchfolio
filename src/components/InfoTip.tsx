import React from "react"
interface InfoTipProps {
  text: string
  children: React.ReactNode
}
export const InfoTip: React.FC<InfoTipProps> = ({ text, children }) => {
  return (
    <div className="relative flex items-center select-none">
      <div className="group relative flex">
        {children}
        <span className="absolute  bottom-9 left-1/2 transform transition-all -translate-x-1/2 mb-2 w-max bg-primaryBlue text-backgroundCream font-medium text-sm rounded-none py-1 px-1.5 scale-0 group-hover:scale-100 duration-100">
          {text}
          <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-white dark:border-t-darkerBlue"></span>
        </span>
      </div>
    </div>
  )
}
