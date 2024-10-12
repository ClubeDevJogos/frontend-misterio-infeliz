"use client"

import { Map, Settings } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { useState } from "react";

interface ActionMenuProps {
    name: string,
    block: string
}

export default function ActionMenu({ name, block }: ActionMenuProps) {
    const [map, setMap] = useState(false);
    const [settings, setSettings] = useState(false);

    function teste() {
        signOut()
    }

    return (
        <>
            <div className="w-screen p-6 flex items-center justify-between absolute z-10">
                <div className='flex items-center justify-center gap-3'>
                    <div className='w-1 h-14 bg-white' />
                    <div>
                        <p className='text-3xl font-bold text-white'>{block}</p>
                        <p className='text-lg text-white'>{name}</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <button onClick={() => setMap(!map)}><Map size={54} color="white" /></button>
                    <button onClick={() => setSettings(!settings)}><Settings size={54} color="white" /></button>
                </div>
            </div>
            {map && (
                <div className='w-screen h-screen flex items-center justify-center absolute bg-black bg-opacity-60'>
                    <Image width={1000} height={1000} src={'/mapIF.png'} alt={''} className='absolute'></Image>
                    <div className='flex gap-4 text-xl absolute z-10'>
                        <a href="/game/b1">B1</a>
                        <a href="/game/b2">B2</a>
                        <a href="/game/secretRoom">secretRoom</a>
                    </div>
                </div>
            )}
            {settings && (
                <div className='w-screen h-screen flex items-center justify-center absolute bg-black bg-opacity-60'>
                    <div className='w-[1000px] h-[600px] bg-gray-700 rounded absolute z-10'>
                        <button onClick={teste}>Sair</button>
                    </div>
                </div>
            )}
        </>
    );
}