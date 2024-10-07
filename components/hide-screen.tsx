"use client"

import React, { useState, useEffect } from 'react';

export default function HideScreen(){
    const [progress, setProgress] = useState(0);

    const handleKeyPress = (e: KeyboardEvent) => {
        if (e.code === 'Space') {
            setProgress((prevProgress) => Math.min(prevProgress + 0.02, 1));
        } else {
            
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => Math.min(prevProgress - 0.01, 1));
          }, 100);
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return(
        <>
            <div className="w-screen h-screen bg-black absolute z-50">
                <p className="text-white">HideScreen</p>
                <progress className='accent-red-900' value={progress} max="1" />
            </div>
        </>
    );
}