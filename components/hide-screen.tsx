"use client"

import React, { useState, useEffect } from 'react';

interface HideScreenProps {
    enable: boolean
}

export default function HideScreen({ enable }: HideScreenProps) {
    const [progress, setProgress] = useState(0);
    const [isKeydown, setIsKeydown] = useState(false);

    const handleKeyPress = (e: KeyboardEvent) => {
        if (e.code === 'Space') {
            setIsKeydown(true);
        }
    };

    const handleKeyRelease = (e: KeyboardEvent) => {
        if (e.code === 'Space') {
            setIsKeydown(false);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (isKeydown) {
                    return Math.min(prevProgress + 0.03, 1);
                } else {
                    return Math.max(prevProgress - 0.02, 0);
                }
            });
        }, 100);

        window.addEventListener('keydown', handleKeyPress);
        window.addEventListener('keyup', handleKeyRelease);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            window.removeEventListener('keyup', handleKeyRelease);
            clearInterval(interval);
        };
    }, [isKeydown, handleKeyPress, handleKeyRelease]);

    return (
        <>
            {enable && (
                <div className="background-molde">
                    <p className="text-white">HideScreen</p>
                    <progress className='accent-red-900' value={progress} max="1" />
                </div>
            )}
        </>
    );
}