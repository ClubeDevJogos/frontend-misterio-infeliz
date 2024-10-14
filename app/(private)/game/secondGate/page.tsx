"use client"

import chengeUserMission from "@/app/lib/helpers/chengeUserMission";
import ActionMenu from "@/components/action-menu";
import Caption from "@/components/caption";
import InteractiveButton from "@/components/interactive-button";
import SideArrows from "@/components/side-arrows";
import Cookie from "js-cookie";
import { useState } from "react";

export default function SecondGate() {
    const [showCaption, setShowCaption] = useState(false)

    const captions = [
        { name: "Luana Sombra", content: "João... A entrada lateral está aberta..." },
        { name: "João Beckenbauer (Telefone)", content: "Perfeito, a entrada lateral... Ótima ideia." },
        { name: "Luana Sombra", content: "O campus está bem escuro... Parece aqueles filmes de terror slasher dos anos 90." },
        { name: "João Beckenbauer (Telefone)", content: 'Tome cuidado... Por que afinal... "Qual é o seu filme de terror favorito?".' },
        { name: "Luana Sombra", content: "HaHaHa... Muito engraçado..." },
    ]

    async function chengeMission() {
        await chengeUserMission()
    }

    if(!Cookie.get("secondGate")){
        setShowCaption(true);
        Cookie.set("secondGate", "true")
    }

    return (
        <>
            <div className="w-screen h-screen bg-gray-900 absolute"></div>
            <SideArrows left={true} hrefLeft={"/game/firstGate"} />
            <ActionMenu block={"Bloco B"} name={"Segunda Entrada"} />
            <InteractiveButton href={"/game/b1"} type={"door"} onClick={chengeMission} />
            <Caption captions={captions} enable={showCaption} />
        </>
    );
}