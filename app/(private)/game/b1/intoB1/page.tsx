"use client"

import chengeUserMission from "@/app/lib/helpers/chengeUserMission";
import getUserMission from "@/app/lib/helpers/getUserMission";
import ActionMenu from "@/components/action-menu";
import Caption from "@/components/caption";
import InteractiveButton from "@/components/interactive-button";
import Image from "next/image";
import Cookie from "js-cookie";
import { useEffect, useState } from "react";

export default function Home() {
  const [showKeys, setShowKeys] = useState(false);
  const [showCaption, setShowCaption] = useState(false)

  const captions = [
    { name: "Luana Sombra", content: "João!" },
    { name: "João Beckenbauer (Telefone)", content: " Oi! Achou algo?" },
    { name: "Luana Sombra", content: "A sala B1 está destrancada." },
    { name: "João Beckenbauer (Telefone)", content: "Não acredito que esqueceram de trancar ela." },
    { name: "Luana Sombra", content: "Vou investigar aqui e te aviso se encontrar algo." }
  ]

  useEffect(() => {
    async function handleMission() {
      const mission = await getUserMission();
      if (mission == "2") {
        setShowKeys(true)
      }
    }

    handleMission();
  }, []);

  async function chengeMission() {
    setShowKeys(false)
    await chengeUserMission()
  }

  if (!Cookie.get("captions_intoB1")) {
    setShowCaption(true);
    Cookie.set("captions_intoB1", "true")
  }

  return (
    <>
      <button className="absolute top-[580px] left-[1500px] cursor-pointer z-50" onClick={chengeMission}>
        {showKeys && <Image src={"/chaves.png"} alt="chaves" width={70} height={70} className="outline-none" />}
      </button>
      <div className="background-intoB1"></div>
      <ActionMenu block={"Bloco B"} name={"Sala B1"} />
      <InteractiveButton href={"/game/b1"} type={"door"} />
      <Caption captions={captions} enable={showCaption} />
    </>
  );
}
