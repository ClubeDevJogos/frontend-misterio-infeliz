"use client"

import { Map, Menu } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";

interface ActionMenuProps {
    name: string,
    block: string
}

export default function ActionMenu({ name, block }: ActionMenuProps) {
    const [map, setMap] = useState(false);
    const [settings, setSettings] = useState(false);

    function exitSession() {
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
                    <button onClick={() => setSettings(!settings)}><Menu size={54} color="white" /></button>
                </div>
            </div>
            {map && (
                <div className='w-screen h-screen flex items-center justify-center absolute bg-black bg-opacity-60'>
                    <Image width={1000} height={1000} src={'/mapIF.png'} alt={''} className='absolute'></Image>
                    <div className='flex gap-4 text-xl absolute z-10'>
                        <Link href="/game/b1">B1</Link>
                        <Link href="/game/b2">B2</Link>
                        <Link href="/game/secretRoom">secretRoom</Link>
                    </div>
                </div>
            )}
            {settings && (
                <div className='w-screen h-screen flex items-center justify-center absolute bg-black bg-opacity-60'>
                    <div className='w-[400px] h-[500px] bg-gray-800 rounded absolute z-10 flex flex-col items-center justify-center gap-3'>
                        <p className='text-3xl text-white font-bold'>Menu</p>
                        <Link className='text-white' href={"/"}>Pagina Inicial</Link>
                        <button className='w-20 text-white p-2 bg-red-500 rounded' onClick={exitSession}>Sair</button>
                    </div>
                </div>
            )}
        </>
    );
}