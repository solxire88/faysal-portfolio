'use client'
import React, { useState } from 'react'



export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    console.log(isOpen)
    return (
        <>
            <nav className="flex flex-row justify-between items-center text-xs py-10 sticky top-0 z-50 text-gray-200 mix-blend-difference">
                <div className="underline decoration-1">
                    FAYSAL BENARBIA
                </div>
                <div className="hover:underline hidden md:block">
                    <a href="#work">WORK</a>
                </div>
                <div className="hover:underline hidden md:block">
                    <a href="#about"> ABOUT</a>
                </div>
                <div className="hover:underline hidden md:block">
                    <a href="#contact">CONTACT</a>
                </div>

                <div className="md:hidden hover:underline">
                    <button className="hover:underline" onClick={() => setIsOpen(!isOpen)}> Menu </button>
                </div>
            </nav>
            {
                isOpen && (
                    <div className="fixed z-20 top-0 left-0 w-full h-full bg-background px-5">
                        <div className="flex flex-col gap-4 items-start justify-start py-20 text-xs h-full">
                            <a className="hover:underline" href="#work" onClick={() => setIsOpen(false)}></a>
                            <a className="hover:underline" href="#work" onClick={() => setIsOpen(false)}>WORK</a>
                            <a className="hover:underline" href="#about" onClick={() => setIsOpen(false)}>ABOUT</a>
                            <a className="hover:underline" href="#contact" onClick={() => setIsOpen(false)}>CONTACT</a>
                        </div>
                    </div>
                )
            }
        </>
    )
}
