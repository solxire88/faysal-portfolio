'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {


    return (
        <div id="about" className="flex flex-col min-h-screen my-60">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="flex flex-col items-center gap-9 my-60">
                <h1 className="text-2xl"> Worked with </h1>
                <div className="flex flex-row flex-wrap justify-center gap-4">
                    <Image width={250} height={150} alt="Noble" src="https://eheudtdlozgsxmevpsnk.supabase.co/storage/v1/object/public/faysalportfolio/logos/dd564aee-de64-437f-8f8e-3ded8cc823b3_removalai_preview.png" />
                    <Image width={250} height={150} alt="Pelorus" src="https://eheudtdlozgsxmevpsnk.supabase.co/storage/v1/object/public/faysalportfolio/logos/LSlogoblack.svg" />
                    <Image width={250} height={150} alt="LsBookshelf" src="https://eheudtdlozgsxmevpsnk.supabase.co/storage/v1/object/public/faysalportfolio/logos/Pelorus%20light%201.svg" />
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm tracking-tight leading-tight">
                <div className="text-justify text-lg leading-tight tracking-tight flex flex-col justify-center md:pr-40">
                    This is me I do stuff this is my story and what i want to do in my life i do these videos and i goon 24/7 nonstop
                </div>
                <div>

                    <div className="flex flex-col gap-4 ">
                        <div className="text-primary/50">
                            Socials
                        </div>

                        <div className="flex flex-col ">
                            <a className="hover:underline" target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/benarbia-faysal-abdessamed-a35ba132a/"> Linked in </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
