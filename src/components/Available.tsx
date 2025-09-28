import { GoDotFill } from "react-icons/go"

const Available = ({ text }: { text: string }) => {
  return (
    <div className="select-none font-medium text-xs w-fit  border px-1.5 py-0.5 rounded-none flex gap-0.5 items-center border-availableGreen text-availableGreen">
      <span className="animate-pulse">
        <GoDotFill />
      </span>

      {text}
    </div>
  )
}

export default Available
