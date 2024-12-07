'use client'

import React, { useState, useEffect } from 'react';

const CountDown: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    });
    const [timeUp, setTimeUp] = useState(false);

    useEffect(() => {
        const deadline = new Date("Jan 01, 2026 00:00:00").getTime();

        const countdownTimer = setInterval(() => {
            const now = new Date().getTime();
            const t = deadline - now;

            if (t < 0) {
                clearInterval(countdownTimer);
                setTimeUp(true);
                setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
            } else {
                const days = Math.floor(t / (1000 * 60 * 60 * 24));
                const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((t % (1000 * 60)) / 1000);

                setTimeLeft({
                    days: days < 10 ? `0${days}` : days.toString(),
                    hours: hours < 10 ? `0${hours}` : hours.toString(),
                    minutes: minutes < 10 ? `0${minutes}` : minutes.toString(),
                    seconds: seconds < 10 ? `0${seconds}` : seconds.toString(),
                });
            }
        }, 1000);

        return () => clearInterval(countdownTimer);
    }, []);

    const TimeBox = ({ value, label }: { value: string, label: string }) => (
        <div className="flex flex-col items-center px-6 relative">
            <div className="text-4xl font-bold mb-1">{value}</div>
            <div className="text-sm uppercase tracking-wider">{label}</div>
            {/* Vertical separator */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/20" />
        </div>
    );

    return (
        <div className="flex justify-center">
            {timeUp ? (
                <p className="text-2xl font-bold">TIME IS UP</p>
            ) : (
                <div className="flex">
                    <TimeBox value={timeLeft.days} label="Days" />
                    <TimeBox value={timeLeft.hours} label="Hours" />
                    <TimeBox value={timeLeft.minutes} label="Minutes" />
                    <div className="flex flex-col items-center px-6">
                        <div className="text-4xl font-bold mb-1">{timeLeft.seconds}</div>
                        <div className="text-sm uppercase tracking-wider">Seconds</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CountDown;

