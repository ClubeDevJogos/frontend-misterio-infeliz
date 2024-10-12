import ActionMenu from "@/components/action-menu";
import Caption from "@/components/caption";
import InteractiveButton from "@/components/interactive-button";
import SideArrows from "@/components/side-arrows";

export default async function SecondGate() {
    const captions = [
        { name: "Luana Sombra", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
        { name: "Luana Sombra", content: "Various versions have evolved over the years, sometimes by accident." },
        { name: "Luana Sombra", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." },
    ]

    const captionLoked = [
        { name: "Luana Sombra", content: "Não acredito! Está trancado, vou precisar encontrar outra maneira de entrar." }
    ]

    return (
        <>
            <div className="w-screen h-screen bg-gray-800 absolute"></div>
            <SideArrows right={true} hrefRight={"/game/secondGate"} />
            <ActionMenu block={"Bloco D"} name={"Entrada Principal"} />
            <InteractiveButton href={"/game/secondGate"} type={"door"} locked={true} captions={captionLoked} />
            <Caption captions={captions} enable={false} />
        </>
    );
}