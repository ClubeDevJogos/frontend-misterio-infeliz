"use client"

import { useState, useEffect } from 'react';
import Typewriter from './typewriter';

interface CaptionProps {
    captions: Array<{
        name: string;
        content: string;
    }>,
    enable: boolean
}

export default function Caption({ captions, enable }: CaptionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCaptions, setShowCaptions] = useState(enable);

    const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'e') {
            setCurrentIndex((prevIndex) => {
                if (prevIndex === captions.length - 1) {
                    setShowCaptions(false);
                    return prevIndex;
                }
                return prevIndex + 1;
            });
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

    return (
        <>
            {captions.length > 0 && showCaptions && (
                <div className="w-screen h-screen flex items-end justify-center pb-10 absolute z-50 bg-black bg-opacity-50">
                    <div className="w-[1200px] bg-black opacity-90 border-4 border-gray-800">
                        <div className="p-4">
                            <p className="text-xl font-bold text-yellow-700 pt-2">{captions[currentIndex].name}</p>
                            <p className="text-white text-lg mt-2">
                                <Typewriter textValue={captions[currentIndex].content} />
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
