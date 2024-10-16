"use client"

import Image from "next/image"
import Cookie from "js-cookie"
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
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

    return (
        <>
            <div className="w-screen h-screen flex flex-col items-center justify-center text-white gap-10 absolute z-50">
                <p className="font-bold text-4xl">Agradecemos imensamente por jogar a demo de Mistério-InFeliz!</p>
                <p className="font-bold text-2xl">Sua participação é fundamental para nós.</p>
                <Image src={"/logo.png"} alt="logo" width={500} height={500}></Image>
                <p className="font-bold text-2xl text-center">Gostou? Está demonstração é apenas a ponta do<br></br>Iceberg do que queremos chegar ao final do projeto!</p>
                <button className='w-20 text-white p-2 bg-zinc-800 rounded' onClick={exitSession}>Voltar</button>
            </div>
        </>
    );
}