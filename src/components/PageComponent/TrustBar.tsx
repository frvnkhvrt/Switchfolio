/**
 * TrustBar Component - "The Ticker"
 * Neobrutalist Infinite Scroll
 */

"use client"

import React from "react"

const TRUST_METRICS = [
  { id: 1, text: "Exp.Years: 10" },
  { id: 2, text: "Projects: 20+" },
  { id: 3, text: "Supported 30k+ enterprise users in LATAM" },
  { id: 4, text: "Growth: 30%" },
]

const TrustBar = () => {
    return (
        <section 
            aria-label="Professional Metrics"
            className="w-full border-y-4 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black py-4 overflow-hidden mb-20"
        >
            <div className="ticker-wrap w-full font-terminal text-lg md:text-xl tracking-widest uppercase">
                <div className="ticker">
                    {/* Repeat content enough times to fill screen and loop smoothly */}
                    {[...Array(6)].map((_, i) => (
                        <span key={i} className="inline-flex items-center">
                            {TRUST_METRICS.map((metric) => (
                                <React.Fragment key={metric.id}>
                                    <span className="mx-4 font-bold">{metric.text}</span>
                                    <span className="mx-4 opacity-50">///</span>
                                </React.Fragment>
                            ))}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TrustBar
