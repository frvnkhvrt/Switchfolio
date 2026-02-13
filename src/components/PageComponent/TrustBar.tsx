/**
 * TrustBar Component - "The Ticker"
 * Neobrutalist Infinite Scroll
 */

"use client"

import React from "react"
import Marquee from "../ui/Marquee"

import { Icon } from "@iconify/react"

const TRUST_METRICS = [
  { id: 1, text: "Exp.Years: 13+", icon: "mdi:clock-outline" },
  { id: 2, text: "EQUATION: ENG + MKTG + STRAT", icon: "mdi:function-variant" },
  { id: 3, text: "15k+ USER_REACH", icon: "mdi:account-group-outline" },
]

const TrustBar = () => {
    const TrustItems = () => (
        <>
            {TRUST_METRICS.map((metric) => (
                <React.Fragment key={metric.id}>
                    <div className="flex items-center gap-2 mx-8">
                        <Icon icon={metric.icon} className="text-xl opacity-70" />
                        <span className="font-bold whitespace-nowrap">{metric.text}</span>
                    </div>
                    <span className="mx-8 opacity-50 shrink-0">{"///"}</span>
                </React.Fragment>
            ))}
        </>
    )

    return (
        <section 
            aria-label="Professional Metrics"
            className="w-full border-y-0 border-t-4 border-black dark:border-black bg-black dark:bg-accent text-white dark:text-black py-4 overflow-hidden mb-20 whitespace-nowrap"
        >
            <div className="ticker-wrap w-full font-terminal text-lg md:text-xl tracking-widest uppercase flex">
                <Marquee speed={60} className="w-full">
                    <div className="flex items-center shrink-0">
                        <TrustItems />
                    </div>
                </Marquee>
            </div>
        </section>
    )
}

export default TrustBar
