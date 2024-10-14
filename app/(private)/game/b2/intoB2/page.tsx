"use client"

import ActionMenu from "@/components/action-menu";
import Caption from "@/components/caption";
import InteractiveButton from "@/components/interactive-button";
import Cookie from "js-cookie";
import { useState } from "react";

export default function Home() {
    const [showCaption, setShowCaption] = useState(false)

    const captions = [
      { name: "Luana Sombra", content: "João!" },
      { name: "João Beckenbauer (Telefone)", content: " Oi! Achou algo?" },
      { name: "Luana Sombra", content: "A sala B1 está destrancada." },
      { name: "João Beckenbauer (Telefone)", content: "Não acredito que esqueceram de trancar ela." },
      { name: "Luana Sombra", content: "Vou investigar aqui e te aviso se encontrar algo." }
    ]

    if(!Cookie.get("intoB2")){
        setShowCaption(true);
        Cookie.set("intoB2", "true")
    }

    return (
        <>
            <div className="w-screen h-screen bg-gray-900 absolute"></div>
            <ActionMenu block={"Bloco B"} name={"Biblioteca"} />
            <InteractiveButton href={"/game/b2"} type={"door"} />
            <Caption captions={captions} enable={showCaption} />
        </>
      );
}