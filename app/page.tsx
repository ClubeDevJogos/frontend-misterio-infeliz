import AudioMenu from "@/components/audio-menu";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="background-inicio bg-black"></div>
      <div className="w-screen h-screen absolute z-10 bg-black opacity-65"></div>
      <div className="w-screen h-screen flex flex-col items-center justify-center absolute z-20">
        <Image src={"/logo.png"} width={750} height={400} alt="logo"></Image>
        <div className="flex flex-col items-center">
          <a className="text-white text-4xl font-pixelify hover:text-red-400 hover:text-[38px]" href={"/game"}>Jogar</a>
          <a className="text-white text-4xl font-pixelify hover:text-red-400 hover:text-[38px]" href={"/about"}>Sobre</a>
        </div>
      </div>
      <AudioMenu />
    </>
  );
}
