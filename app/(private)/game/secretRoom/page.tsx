"use client"

import chengeUserMission from "@/app/lib/helpers/chengeUserMission";
import getSecretRoomPassword from "@/app/lib/helpers/getSecretRoomPassword";
import getUserMission from "@/app/lib/helpers/getUserMission";
import ActionMenu from "@/components/action-menu";
import HideScreen from "@/components/hide-screen";
import InteractiveButton from "@/components/interactive-button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useEffect, useState } from "react";

export default function SecretRoom() {
    const [showPadlock, setShowPadlock] = useState(false);
    const [showPadlockInput, setShowPadlockInput] = useState(false);
    const [inputPadlock, setInputPadlock] = useState("");
    const [locked, setLocked] = useState(true)

    const router = useRouter()

    const captionLoked = [
        { name: "Luana Sombra", content: "Não abre! Acho que a porta está trancada!" }
    ]

    async function chengeMission() {
        setShowPadlock(false)
        await chengeUserMission()
    }

    async function handleSubmit(event: SyntheticEvent) {
        event.preventDefault()

        if (inputPadlock === await getSecretRoomPassword()) {
            await chengeMission()
            router.push("/game/secretRoom/intoSecretRoom")
        } else {

        }
    }

    useEffect(() => {
        async function handleMission() {
            const mission = await getUserMission();
            if (mission == "3") {
                setShowPadlock(true)
            } else {
                setLocked(false)
            }
        }

        handleMission();
    }, []);

    return (
        <>
            <HideScreen enable={false} />
            <button className="absolute top-[600px] left-[660px] cursor-pointer z-50" onClick={() => setShowPadlockInput(true)}>
                {showPadlock && <Image src={"/cadeado.png"} alt="chaves" width={70} height={70} />}
            </button>
            {showPadlockInput && (
                <div className="w-screen h-screen flex items-center justify-center absolute z-50">
                    <form onSubmit={handleSubmit} className="flex flex-col bg-black p-10 gap-3 rounded-xl bg-opacity-70">
                        <input type="text" className="h-8 outline-none pl-1 border-2 border-gray-600 rounded bg-transparent text-white" onChange={(e) => setInputPadlock(e.target.value)} placeholder="Senha" />
                        <button type="submit" className="h-8 text-white bg-gray-600 rounded">Destrancar porta</button>
                        <button type="submit" className="h-8 text-white bg-red-600 rounded" onClick={() => setShowPadlockInput(false)}>Cancelar</button>
                    </form>
                </div>
            )}
            <div className="background-secretRoom"></div>
            <InteractiveButton href={"/game/secretRoom/intoSecretRoom"} type={"door"} locked={locked} captions={captionLoked} />
            <ActionMenu block={"Bloco B"} name={"Sala Secreta"} />
        </>
    );
}