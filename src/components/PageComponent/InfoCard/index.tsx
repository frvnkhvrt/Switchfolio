/**
 * InfoCard Component - "The Manifesto"
 * Neobrutalist Identity Card
 */

"use client"

import React, { memo } from "react"
import Image from "next/image"
import { SocialLinks } from "./SocialLinks"
import { Persona } from "@/types"

interface InfoCardProps {
  persona: Persona
}

const InfoCard: React.FC<InfoCardProps> = memo(({ persona }) => {
  return (
    <section 
        className="relative w-full border-black dark:border-white mb-20 pt-24 md:pt-28"
        aria-labelledby="profile-heading"
    >
      <div className="flex flex-col md:grid md:grid-cols-[1.5fr_1fr] gap-0 border-b-4 border-black dark:border-white bg-white dark:bg-black">
        
        {/* LEFT COL: CONTENT */}
        <div className="flex flex-col justify-between p-6 md:p-12 border-r-0 md:border-r-4 border-black dark:border-white">
            <div>
                {/* ID Badge */}
                <div className="inline-block bg-black dark:bg-white text-white dark:text-black px-3 py-1 font-terminal text-sm mb-6 uppercase tracking-wider">
                    ID: {persona.name.split(' ')[0]}_{persona.id === 'frankhurt' ? '02' : '01'}
                </div>

                {/* MASSIVE NAME */}
                <h1 className="text-6xl md:text-[8vw] leading-[0.85] font-black uppercase tracking-tighter mb-8 text-black dark:text-white break-words">
                    {persona.headline.split(' ').map((word, i) => (
                        <span key={i} className="block">{word}</span>
                    ))}
                </h1>
            </div>

            <div className="mt-8 md:mt-20">
                <p className="font-terminal text-sm md:text-base leading-relaxed max-w-md mb-8 uppercase text-ink-secondary dark:text-ink-secondary-dark">
                    {persona.bio}
                </p>
                
                <div className="flex flex-col gap-4">
                    <span className="font-bold uppercase text-xs tracking-widest opacity-50">Connect_Protocols:</span>
                    <SocialLinks links={persona.links} />
                </div>
            </div>
        </div>

        {/* RIGHT COL: IMAGE */}
        <div className="relative aspect-square md:aspect-auto md:h-full border-t-4 md:border-t-0 border-black dark:border-white min-h-[400px]">
            <Image
                src={persona.image}
                alt={persona.name}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
            />
            
            {/* Status Tag */}
            <div className="absolute top-0 right-0 bg-status-ok text-black px-4 py-2 font-bold font-terminal text-sm border-l-4 border-b-4 border-black dark:border-white">
                STATUS: AVAILABLE
            </div>
        </div>
      </div>
    </section>
  )
})

InfoCard.displayName = "InfoCard"

export default InfoCard
