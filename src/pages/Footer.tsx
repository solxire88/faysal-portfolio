import React from 'react'


export default function Footer() {


    return (
        <div className="flex justify-center md:justify-between items-center text-sm py-10 text-primary/75 gap-6 flex-wrap ">
            <div className="flex flex-col text-sm text-center md:text-start">
                <h1 className="py-2">
                    Contact me
                </h1>
                <span className="text-xs">
                    To enquire about my availability and pricing
                </span>
                <span className="text-xs">
                    (+213) 782 54 82 92
                </span>
                <span className="text-xs">
                    benarbiafaysal444@gmail.com
                </span>
            </div>


            <div className="flex flex-col text-xs text-center md:text-start">
                <h1 >
                    FAYSAL X PELORUS
                </h1>

                <span>
                    © 2025 BENARBIA FAYSAL
                </span>
            </div>

        </div>
    )
}
