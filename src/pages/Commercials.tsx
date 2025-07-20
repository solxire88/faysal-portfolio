'use client'
import React from 'react'
import commercials from '../data/commericial.json'
import { motion } from 'framer-motion'

interface Commercial {
    title: string,
    about: string,
    link: string
}

export default function Commercials() {



    return (
        <div className="relative min-h-screen my-40 flex flex-col items-center gap-50">

            <h1 className="sticky top-15 z-15 md:top-20 text-start text-lg md:text-2xl tracking-tight min-w-full my-20 text-white mix-blend-difference">
                Commercials
            </h1>


            <div className='relative grid grid-cols-1 md:grid-cols-2  w-full justify-start gap-25'>
                {/* <div> */}
                {/*     <div className="sticky top-30 justify-center flex flex-col gap-4 md:pr-40 "> */}
                {/*         <em className='text-primary/50 font-bold'> */}
                {/*             The Mama Spaghetti Commercial */}
                {/*         </em> */}
                {/*         <p className="text-justify leading-tight tracking-tight"> */}
                {/*             This is a small about for fayssel <em>the pussy little bitch </em> trying to act like he solved an unsolvable problem */}
                {/*         </p> */}
                {/*     </div> */}
                {/* </div> */}
                {/* <div className="flex flex-col items-center gap-4"> */}
                {/*     <img src="https://placehold.co/600x400" alt="" /> */}
                {/* </div> */}

                {
                    commercials.map((video: Commercial, i: number) => (
                        <React.Fragment key={i}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                            >
                                <div className="sticky top-30 justify-center align-center flex flex-col gap-4 md:pr-40 ">
                                    <em className='text-primary/50 font-bold'>
                                        {video.title}
                                    </em>
                                    <p className="text-justify leading-tight tracking-tight">
                                        {video.about}
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                                className="flex flex-col items-center max-w-xs gap-4">
                                <video controls className="w-full h-auto" src={video.link} />
                            </motion.div>
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    )
}
