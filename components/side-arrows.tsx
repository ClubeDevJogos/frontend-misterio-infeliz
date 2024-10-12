"use client"

import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface SideArrowsProps {
    left?: boolean,
    right?: boolean,
    hrefLeft?: string,
    hrefRight?: string
}

export default function SideArrows({ left, right, hrefLeft, hrefRight }: SideArrowsProps) {
    const route = useRouter()

    function redirectLeft() {
        route.push(hrefLeft!)
    }

    function redirectRight() {
        route.push(hrefRight!)
    }

    return (
        <>
            <div className="w-screen h-screen absolute flex items-center justify-between p-2">
                {left && (
                    <button className="w-40 h-40 z-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-start items-center" onClick={redirectLeft}><ArrowBigLeft size={54} color="white" /></button>
                )}
                {!left && (
                    <p></p>
                )}
                {right && (
                    <button className="w-40 h-40 z-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-end items-center" onClick={redirectRight}><ArrowBigRight size={54} color="white" /></button>
                )}
                {!right && (
                    <p></p>
                )}
            </div >
        </>
    );
}