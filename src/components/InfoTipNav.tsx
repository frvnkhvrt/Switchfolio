import React from "react"
interface InfoTipNavProps {
  text: string
  children: React.ReactNode
}
export const InfoTipNav: React.FC<InfoTipNavProps> = ({ text, children }) => {
  return (
    <div className="relative flex items-center select-none">
      <div className="group relative flex">
        {children}
        <span className="absolute  bottom-[30px] left-1/2 transform transition-all -translate-x-1/2 mb-2 w-max bg-mainWhite text-mainBlack  font-medium text-sm rounded-none py-1 px-1.5 scale-0 group-hover:scale-100  duration-100">
          {text}
        </span>
      </div>
    </div>
  )
}
