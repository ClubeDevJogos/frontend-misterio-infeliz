"use client"

import chengeUserMission from "@/app/lib/helpers/chengeUserMission";
import ActionMenu from "@/components/action-menu";
import Caption from "@/components/caption";
import InteractiveButton from "@/components/interactive-button";
import SideArrows from "@/components/side-arrows";

export default function SecondGate() {
    const captions = [
        { name: "Luana Sombra", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
        { name: "Luana Sombra", content: "Various versions have evolved over the years, sometimes by accident." },
        { name: "Luana Sombra", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." },
    ]

    async function teste() {
        const response = await chengeUserMission()
        console.log(response)
    }

    return (
        <>
            <div className="w-screen h-screen bg-gray-900 absolute"></div>
            <SideArrows left={true} hrefLeft={"/game/firstGate"} />
            <ActionMenu block={"Bloco B"} name={"Segunda Entrada"} />
            <InteractiveButton href={"/game/b1"} type={"door"} onClick={teste} />
            <Caption captions={captions} enable={false} />
        </>
    );
}