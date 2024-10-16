"use client"

import ActionMenu from "@/components/action-menu";
import Caption from "@/components/caption";
import InteractiveButton from "@/components/interactive-button";
import Image from "next/image"
import { useState } from "react";
import Cookie from "js-cookie"

export default function Home() {
    const [showBock, setShowBock] = useState(false)
    const [showCaption, setShowCaption] = useState(false)

    const captions = [
        { name: "Luana Sombra", content: "Entrei na biblioteca... tem um livro aberto na mesa." },
        { name: "João Beckenbauer (Telefone)", content: "Hum… em que você acha que poderia usar ele?" },
        { name: "Luana Sombra", content: "Ainda não tenho certeza…" },
        { name: "João Beckenbauer (Telefone)", content: "Estava pesquisando aqui e descobri que o campus tem uma sala secreta..." },
        { name: "Luana Sombra", content: "Onde ela fica?" },
        { name: "João Beckenbauer (Telefone)", content: "Fica perto dos banheiros do bloco B..." }
    ]

    function handleShowBock() {
        setShowBock(!showBock)
    }

    if (!Cookie.get("captions_intoBiblioteca")) {
        setShowCaption(true);
        Cookie.set("captions_intoBiblioteca", "true")
    }

    return (
        <>
            <Image src={"/livroCapa.png"} alt="chaves" width={150} height={150} className="absolute top-[490px] left-[1250px] cursor-pointer z-50" onClick={handleShowBock} />
            {showBock && (
                <div className="w-screen h-screen flex flex-col items-center justify-center absolute z-50">
                    <Image src={"/livro.png"} alt="chaves" width={1300} height={1300}></Image>
                    <button className="text-white text-xl" onClick={handleShowBock}>Fechar</button>
                </div>
            )}
            <div className="background-intoBiblioteca"></div>
            <ActionMenu block={"Bloco B"} name={"Biblioteca"} />
            <InteractiveButton href={"/game/biblioteca"} type={"door"} />
            <Caption captions={captions} enable={showCaption} />
        </>
    );
}