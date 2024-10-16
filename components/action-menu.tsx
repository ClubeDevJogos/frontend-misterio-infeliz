"use client"

import { Map, Menu } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import Cookie from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import getUserMission from '@/app/lib/helpers/getUserMission';

interface ActionMenuProps {
    name: string,
    block: string
}

export default function ActionMenu({ name, block }: ActionMenuProps) {
    const [map, setMap] = useState(false);
    const [settings, setSettings] = useState(false);
    const [showSecretRoom, setShowSecretRoom] = useState(false);

    const router = useRouter()

    function exitSession() {
        Cookie.remove("captions_firstGate");
        Cookie.remove("captions_secondGate");
        Cookie.remove("captions_intoB1");
        signOut({
            redirect: false
        })
        router.push("/")
    }

    useEffect(() => {
        async function handleMission() {
            const mission = await getUserMission();
            if (parseInt(mission) >= 3) {
                setShowSecretRoom(true)
            }
        }

        handleMission();
    }, []);

    return (
        <>
            <div className="w-screen p-6 flex items-center justify-between absolute z-50">
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
                    <Image width={1050} height={1050} src={'/mapIF.png'} alt={''} className='absolute'></Image>
                    <div className='w-full h-full flex items-center justify-center pb-80 gap-96 font-bold text-xl absolute z-10'>
                        <Link href="/game/b1">B1</Link>
                        <Link href="/game/biblioteca">Biblioteca</Link>
                        {showSecretRoom && <Link href="/game/secretRoom" className='text-2xl'>?</Link>}
                        {!showSecretRoom && <p className='text-transparent'>?</p>}
                    </div>
                </div>
            )}
            {settings && (
                <div className='w-screen h-screen flex items-center justify-center absolute bg-black bg-opacity-60'>
                    <div className='w-[300px] h-[350px] bg-gray-800 rounded absolute z-10 flex flex-col items-center pt-12 gap-20'>
                        <p className='text-white text-4xl font-pixelify select-none'>Menu</p>
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <a href="/game/introduction/commands" className='text-white text-4xl font-pixelify hover:text-red-400 hover:text-[38px]'>Comandos</a>
                            <button className='text-white text-4xl font-pixelify hover:text-red-400 hover:text-[38px]' onClick={exitSession}>Sair</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}