'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'


export default function Hero2() {


    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2.5, ease: 'easeOut' }}
            className="flex flex-col justify-center items-center gap-8 my-80">
            <div className="max-w-xs">
                <picture>
                    <img className="w-full h-auto" alt="HeroImage" src="https://eheudtdlozgsxmevpsnk.supabase.co/storage/v1/object/public/faysalportfolio/product%20photography/IMG_2758%20(1).JPG" />
                </picture>
            </div>


            <div className="lg:text-lg md:text-sm text-xs text-center max-w-xl leading-tight tracking-tight ">
                A creator of commercial visuals, from photography to videography & editing, all dedicated to showcase your product or service with <em>impact and style</em>.
            </div>

        </motion.div>
    )
}
