'use client'
import React from 'react'
import videoEditing from '../data/videoEditing.json'
import { motion } from 'framer-motion'

interface videoEditing {

    link: string,
    title: string
}

export default function VideoEditing() {



    return (
        <div className="relative min-h-screen my-40 flex flex-col items-center gap-35">

            <h1 className="sticky top-15 md:top-20 text-start text-primary text-lg md:text-2xl tracking-tight min-w-full my-20 text-white mix-blend-difference">
                Video Editing
            </h1>

            <div className="flex flex-col items-center gap-60">
                {videoEditing.map((video: videoEditing, i: number) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            key={i} className="max-w-xs flex flex-col justify-center gap-2">
                            <video controls preload="metadata" className="w-full h-auto" src={video.link}>

                            </video>
                            <div className="text-sm tracking-tight text-center text-primary/75">
                                <em>{video.title}</em>
                            </div>
                        </motion.div>
                    )
                })}

            </div>
        </div>
    )
}
