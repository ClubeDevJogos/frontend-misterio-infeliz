"use client"

import ActionMenu from "@/components/action-menu";
import InteractiveButton from "@/components/interactive-button";

export default function Home() {
    return (
        <>
            <div className="w-screen h-screen bg-gray-900 absolute"></div>
            <ActionMenu block={"Bloco B"} name={"Biblioteca"} />
            <InteractiveButton href={"/game/biblioteca"} type={"door"} />
        </>
      );
}