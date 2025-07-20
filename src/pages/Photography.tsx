'use client'
import React from 'react'
import photography from '../data/photography.json'
import { motion } from 'framer-motion'


interface photography {
    title: string,
    link: string
}

export default function Photography() {



    return (
        <div className="relative min-h-screen my-40 flex flex-col items-center gap-35">

            <h1 className="sticky top-15 md:top-20 text-start text-primary text-lg md:text-2xl tracking-tight min-w-full my-20 text-white mix-blend-difference">
                Photography
            </h1>

            {/* <img src="https://placehold.co/600x400" alt="" /> */}
            {/* <div className="text-sm tracking-tight"> */}
            {/*     a porn image */}
            {/* </div> */}

            <div className="flex flex-col items-center gap-60">
                {photography.map((photo: photography, i: number) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            key={i} className="max-w-sm flex flex-col justify-center gap-2">
                            <picture>
                                <img loading="lazy" className="w-full h-auto" src={photo.link} alt="" />
                            </picture>
                            <div className="text-sm tracking-tight text-center text-primary/75">
                                <em>{photo.title}</em>
                            </div>
                        </motion.div>
                    )
                })}

            </div>
        </div>
    )
}
