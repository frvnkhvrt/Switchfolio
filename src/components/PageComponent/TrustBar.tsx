/**
 * TrustBar Component - "The Ticker"
 * Neobrutalist Infinite Scroll
 */

"use client"

import React from "react"

const TRUST_METRICS = [
  { id: 1, text: "Exp.Years: 13+" },
  { id: 2, text: "ENGINEERING + MARKETING + STRATEGY" },
  { id: 3, text: "Supported 15k+ enterprise users in LATAM and US" },
]

const TrustBar = () => {
    const TrustItems = () => (
        <>
            {[...Array(4)].map((_, i) => (
                <React.Fragment key={i}>
                    {TRUST_METRICS.map((metric) => (
                        <React.Fragment key={`${i}-${metric.id}`}>
                            <span className="mx-8 font-bold whitespace-nowrap">{metric.text}</span>
                            <span className="mx-8 opacity-50 shrink-0">{"///"}</span>
                        </React.Fragment>
                    ))}
                </React.Fragment>
            ))}
        </>
    )

    return (
        <section 
            aria-label="Professional Metrics"
            className="w-full border-y-0 border-t-4 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black py-4 overflow-hidden mb-20 whitespace-nowrap"
        >
            <div className="ticker-wrap w-full font-terminal text-lg md:text-xl tracking-widest uppercase flex">
                <div className="ticker flex w-max">
                    {/* Original Content */}
                    <div className="flex items-center shrink-0">
                        <TrustItems />
                    </div>
                    
                    {/* Duplicate for Seamless Loop */}
                    <div aria-hidden="true" className="flex items-center shrink-0">
                        <TrustItems />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrustBar
