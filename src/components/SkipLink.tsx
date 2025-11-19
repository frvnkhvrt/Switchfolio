"use client"

import React from "react"

const SkipLink = () => {
    return (
        <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform"
        >
            Skip to content
        </a>
    )
}

export default SkipLink
