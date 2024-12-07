'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import timerBg from '@/src/assets/img/timer.jpg'
import CountDown from '@/src/components/timer/timer'

export default function Home() {
    const [email, setEmail] = useState('')

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle subscription logic here
        console.log('Subscribed:', email)
    }

    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={timerBg}
                    alt="Mountain landscape"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white space-y-12 px-4 max-w-lg mx-auto">
                <h1 className="text-2xl md:text-5xl font-bold tracking-wider">
                    COMING SOON
                </h1>

                <div className="backdrop-blur-md bg-white/10 rounded-lg p-6 inline-block w-full">
                    <CountDown />
                </div>

                <div className="space-y-8">
                    <form onSubmit={handleSubscribe} className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"
                            required
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
                        >
                            SUBSCRIBE
                        </button>
                    </form>

                    <div className="space-y-4">
                        <p className="text-lg">
                            Want to be the first to know when we launch?
                        </p>
                        <button className="px-8 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors">
                            CLICK ME
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="absolute bottom-0 w-full p-4 text-center text-white/80 text-sm z-10">
                ©2024 Edu Team
            </footer>
        </main>
    )
}

