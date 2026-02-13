/**
 * HireMe Component - "The Hotlink"
 * Neobrutalist Emergency CTA
 */

"use client"

import { emailLink } from "@/data/Common/data"
import { Icon } from "@iconify/react"

const HireMe = () => {
  return (
    <section 
      aria-label="Contact Section"
      className="pb-20"
    >
      <div className="w-full border-4 border-black dark:border-white bg-[#FFD700] dark:bg-[#FFFF00] relative overflow-hidden group">
        
        {/* WARNING STRIPES PATTERN */}
        <div className="absolute inset-0 opacity-10 bg-[url('/stripes.png')] bg-repeat pointer-events-none" />

        <div className="relative p-8 md:p-16 flex flex-col items-center justify-center text-center gap-8">
            <h2 className="text-5xl md:text-8xl font-black text-black uppercase tracking-tighter leading-[0.8] mb-4">
                NEED_SPEED?
                <br />
                <span className="text-white text-stroke-black">GET_REAL.</span>
            </h2>

            <p className="font-terminal text-black text-base md:text-xl max-w-xl font-bold uppercase tracking-wide">
                /// STOP WASTING FRAMES. START SHIPPING. ///
            </p>

            <a 
                href={emailLink}
                className="relative inline-flex items-center justify-center px-12 py-6 bg-black text-white text-xl md:text-3xl font-bold uppercase tracking-widest hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-75 border-4 border-transparent hover:border-black shadow-neo-lg"
            >
                <Icon icon="mdi:flash" className="mr-4 text-yellow-400" />
                INITIATE_CONTACT
            </a>

            <div className="mt-8 font-terminal text-xs text-black opacity-60">
                RESPONSE_TIME: &lt; 24HRS /// SYNC_STATUS: READY
            </div>
        </div>
      </div>
    </section>
  )
}

export default HireMe
