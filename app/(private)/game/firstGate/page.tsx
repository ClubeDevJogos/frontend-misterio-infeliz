"use client"

import ActionMenu from "@/components/action-menu";
import Caption from "@/components/caption";
import InteractiveButton from "@/components/interactive-button";
import SideArrows from "@/components/side-arrows";
import Cookie from "js-cookie";
import { useState } from "react";

export default function SecondGate() {
    const [showCaption, setShowCaption] = useState(false)

    const captions = [
        { name: "Luana Sombra", content: "João?... Tá me ouvindo..." },
        { name: "João Beckenbauer (Telefone)", content: "Oi... Sim, estou ouvindo." },
        { name: "Luana Sombra", content: "Cheguei aqui no IF." },
        { name: "João Beckenbauer (Telefone)", content: "Você avistou alguma coisa logo de entrada?" },
        { name: "Luana Sombra", content: "Ainda não... Vou verificar se o portão está destrancado." },
        { name: "João Beckenbauer (Telefone)", content: "Beleza... Qualquer coisa que encontrar me avisa." },
        { name: "Luana Sombra", content: "Pode deixar!" },
    ]

    const captionLoked = [
        { name: "Luana Sombra", content: "Está trancado, vou precisar encontrar outra maneira de entrar!" }
    ]

    if(!Cookie.get("captions_firstGate")){
        setShowCaption(true);
        Cookie.set("captions_firstGate", "true")
    }

    return (
        <>
            <div className="background-firstGate"></div>
            <SideArrows right={true} hrefRight={"/game/secondGate"} />
            <ActionMenu block={"Bloco D"} name={"Entrada Principal"} />
            <InteractiveButton href={"/game/secondGate"} type={"door"} locked={true} captions={captionLoked} />
            <Caption captions={captions} enable={showCaption} />
        </>
    );
}