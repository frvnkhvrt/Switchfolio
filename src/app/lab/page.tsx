import Link from 'next/link'
import React from 'react'

const page = () => {
    const components = [
        {
            name: "Button",
            link: "/lab/button"
        }
    ]
  return (
    <div className='flex flex-col gap-8 w-full h-screen justify-center items-center'>
      <div>
        current components:
      </div>
      <div>
        {components.map((component) => (
            <Link className="px-6 py-2 border border-primaryBlue rounded-none hover:bg-primaryBlue/10 hover:text-primaryBlue transition-colors duration-100" href={component.link} key={component.name}>{component.name}</Link>
        ))}
      </div>
    </div>
  )
}

export default page
