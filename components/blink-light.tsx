"use client"

import { useEffect, useState } from "react";

interface BlinkLightProps {
    enable: boolean
}

export default function BlinkLight({ enable }: BlinkLightProps) {
    const [light, setLight] = useState(true)

    function blinkLight() {
        setInterval(() => {
            const randomValue = Math.random() > 0.5;
            setLight(randomValue);
        }, 200);
    }

    useEffect(() => {
        blinkLight();
    }, []);

    return (
        <>
            {enable && (
                <>
                    {!light && (
                        <div className='w-full h-full bg-black' />
                    )}
                </>
            )}
        </>
    );
}