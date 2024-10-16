import IntroductionNextPage from "@/components/introduction-next-page";
import Image from "next/image"

export default function Home() {
    return (
        <>
            <IntroductionNextPage href={"/game/introduction/commands"} />
            <div className="w-screen h-screen flex flex-col items-center justify-center absolute z-20">
                <Image src={"/jornal.png"} alt="jornal" width={880} height={880}></Image>
            </div>
        </>
    );
}