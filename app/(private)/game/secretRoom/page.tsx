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

export default function secretRoom() {
    const [showPadlock, setShowPadlock] = useState(false);
    const [showPadlockInput, setShowPadlockInput] = useState(false);
    const [inputPadlock, setInputPadlock] = useState("");
    const [locked, setLocked] = useState(true)

    const router = useRouter()

    const captionLoked = [
        { name: "Luana Sombra", content: "Não abre! Acho que a porta está trancada!" }
    ]

    async function chengeMission(){
        setShowPadlock(false)
        await chengeUserMission()
      }

    async function handleSubmit(event: SyntheticEvent) {
        event.preventDefault()

        if (inputPadlock === await getSecretRoomPassword()) {
            chengeMission()
            router.push("/game/secretRoom/intoSecretRoom")
        } else {

        }
    }

    useEffect(() => {
        async function handleMission() {
          const mission = await getUserMission();
          if(mission == "3"){
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
            <button className="absolute top-[550px] left-[350px] cursor-pointer z-50" onClick={() => setShowPadlockInput(true)}>
                {showPadlock && <Image src={"/cadeado.png"} alt="chaves" width={70} height={70} />}
            </button>
            {showPadlockInput && (
                <div className="absolute z-50">
                    <form onSubmit={handleSubmit}>
                        <input type="text" onChange={(e) => setInputPadlock(e.target.value)}/>
                        <button type="submit">Abrir</button>
                    </form>
                </div>
            )}
            <div className="background-secretRoom"></div>
            <InteractiveButton href={"/game/secretRoom/intoSecretRoom"} type={"door"} locked={locked} captions={captionLoked}/>
            <ActionMenu block={"Bloco B"} name={"Sala Secreta"}  />
        </>
    );
}