"use client"

import getUserMission from "@/app/lib/helpers/getUserMission";
import ActionMenu from "@/components/action-menu";
import HideScreen from "@/components/hide-screen";
import InteractiveButton from "@/components/interactive-button";
import SideArrows from "@/components/side-arrows";
import { useEffect, useState } from "react";

export default function Home() {
  const [loked, setLocked] = useState(true);

  const captionLoked = [
    { name: "Luana Sombra", content: "Não abre! Acho que a porta está trancada!" }
  ]

  useEffect(() => {
    async function handleMission() {
      const mission = await getUserMission();
      if(mission == "3"){
        setLocked(false)
      }
    }

    handleMission();
  }, [])

  return (
    <>
      <HideScreen enable={false} />
      <div className="background-b2"></div>
      <SideArrows left={true} hrefLeft={"/game/b1"} />
      <ActionMenu block={"Bloco B"} name={"Biblioteca"} />
      <InteractiveButton href={"/game/b2/intoB2"} type={"door"} locked={loked} captions={captionLoked} />
    </>
  );
}
