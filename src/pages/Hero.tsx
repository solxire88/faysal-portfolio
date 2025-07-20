'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {


    return (
        <div className="min-h-screen flex flex-col justify-between items-center mb-20">

            <div className="h-full">
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 3, ease: 'easeInOut' }}
                className="text-center flex-col justify-center tracking-[25px] h-full text-sm lg:text-lg lg:tracking-[50px] md:text-sm md:tracking-[40px]">
                <p>BENARBIA FAYSAL</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
                className="text-center flex flex-col justify-end h-full mb-5 text-sm">
                <em>

                    Scroll Down
                </em>
            </motion.div>
        </div>
    )
}
