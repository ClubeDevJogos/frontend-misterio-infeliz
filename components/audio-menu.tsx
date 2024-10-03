"use client"

import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

export default function AudioMenu() {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
        const audio = document.getElementById("audio") as HTMLAudioElement;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
    };

    return (
        <>
            <div className="w-screen flex justify-end absolute z-20">
                <audio id="audio" src="/trilha-sonora-suspense.mp3" typeof="audio/mpeg" loop></audio>
                <button onClick={handlePlayPause} className="p-3">
                    {isPlaying ? <Volume2 size={35} color="white" /> : <VolumeX size={35} color="white" />}
                </button>
            </div>
        </>
    );
}