"use client"

import { DoorOpen } from "lucide-react";
import Caption from "./caption";
import { useRouter } from "next/navigation";
import { useState } from "react";

//Mudar opcional, na showCaptions tambem

interface InteractiveButtonProps {
    type: "door" | "object",
    href: string,
    locked?: boolean,
    captions?: Array<{
        name: string;
        content: string;
    }>,
    onClick?: () => void;
}

export default function InteractiveButton({ type, href, locked, captions, onClick = () => { } }: InteractiveButtonProps) {
    const [showCaption, setShowCaption] = useState(false)
    const router = useRouter()

    function openDoor() {
        if (locked) {
            setShowCaption(true)
        } else {
            onClick()
            router.push(href)
        }
    }

    function handleCloseCaption() {
        setShowCaption(false);
    }

    return (
        <>
            <div className="w-screen h-screen pt-10 absolute flex items-end justify-end">
                <button className="p-6 z-50" onClick={openDoor}>
                    {type == "door" && (
                        <DoorOpen size={54} color="white" />
                    )}
                </button>
                {showCaption && (
                    <Caption captions={captions!} enable={true} onClose={handleCloseCaption} />
                )}
            </div>
        </>
    );
}