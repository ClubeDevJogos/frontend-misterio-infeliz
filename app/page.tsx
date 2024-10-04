import AudioMenu from "@/components/audio-menu";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="background-inicio bg-black"></div>
      <div className="w-screen h-screen absolute z-10 bg-black opacity-65"></div>
      <div className="w-screen h-screen flex flex-col items-center justify-center absolute z-20">
        <Image src={"/logo.png"} width={750} height={400} alt="logo"></Image>
        <div className="flex flex-col items-center">
          <Link className="text-white text-4xl font-pixelify hover:text-red-400 hover:text-[38px]" href={"/game/b1"}>Jogar</Link>
          <Link className="text-white text-4xl font-pixelify hover:text-red-400 hover:text-[38px]" href={"/"}>Novo Jogo</Link>
          <Link className="text-white text-4xl font-pixelify hover:text-red-400 hover:text-[38px]" href={"/"}>Sobre</Link>
          <Link className="text-white text-4xl font-pixelify hover:text-red-400 hover:text-[38px]" href={"/"}>Opções</Link>
        </div>
      </div>
      <AudioMenu />
    </>
  );
}
