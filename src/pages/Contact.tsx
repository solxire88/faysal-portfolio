'use client'
import React from 'react'
import { useState, ChangeEvent, FormEvent } from 'react'


export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        object: '',
        message: '',
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        const res = fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        console.log(res)
    }

    return (
        <div id="contact" className="min-h-screen flex flex-col gap-20 md:px-20 py-20">
            <h1 className="text-lg text-primary/50">
                Wanna tell me smtn ?
            </h1>

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-2 gap-16 ">
                <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
                    <label htmlFor="firstName" className="text-sm">
                        first name*
                    </label>

                    <input
                        onChange={handleChange}
                        name="firstName"
                        required
                        id="firstName"
                        type="text"
                        className="h-5 text-primary/75 bg-transparent border-0 border-b-2 border-gray-800  focus:border-primary focus:ring-0 focus:outline-none"
                    />
                </div>

                <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
                    <label htmlFor="lastName" className="text-sm">
                        last name
                    </label>

                    <input
                        onChange={handleChange}
                        name="lastName"
                        id="lastName"
                        type="text"
                        className="h-5 text-primary/75 bg-transparent border-0 border-b-2 border-gray-800  focus:border-primary focus:ring-0 focus:outline-none"
                    />

                </div>
                <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
                    <label htmlFor="email" className="text-sm">
                        e-mail*
                    </label>

                    <input
                        onChange={handleChange}
                        name="email"
                        required
                        id="email"
                        type="email"
                        className="h-5 text-primary/75 bg-transparent border-0 border-b-2 border-gray-800  focus:border-primary focus:ring-0 focus:outline-none"
                    />

                </div>
                <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
                    <label htmlFor="phone" className="text-sm">
                        phone
                    </label>

                    <input

                        onChange={handleChange}
                        name="phone"
                        id="phone"
                        type="text"
                        className="h-5 text-primary/75 bg-transparent border-0 border-b-2 border-gray-800  focus:border-primary focus:ring-0 focus:outline-none"
                    />

                </div>
                <div className="flex flex-col gap-2 col-span-2">
                    <label htmlFor="object" className="text-sm">
                        object*
                    </label>

                    <input
                        onChange={handleChange}
                        name="object"
                        required
                        id="object"
                        type="text"
                        className="h-5 text-primary/75 bg-transparent border-0 border-b-2 border-gray-800  focus:border-primary focus:ring-0 focus:outline-none"
                    />

                </div>
                <div className="flex flex-col gap-2 lg:col-span-2 col-span-2">
                    <label htmlFor="message" className="text-sm">
                        message*
                    </label>

                    <textarea
                        onChange={handleChange}
                        name="message"
                        required
                        id="message"
                        className="h-25 text-primary/75 bg-transparent border-0 border-b-2 border-gray-800  focus:border-primary focus:ring-0 focus:outline-none"
                    />

                </div>

                <div className="flex justify-end min-w-full col-span-2">
                    <button type="submit" className="hover:underline text-sm" >
                        Send
                    </button>
                </div>

            </form>

        </div>
    )
}
