import IntroductionNextPage from "@/components/introduction-next-page";
import { Map, Menu, ArrowBigLeft, ArrowBigRight, DoorOpen } from 'lucide-react';

export default function Home() {
    return (
        <>
            <IntroductionNextPage href={"/game/firstGate"} />
            <div className="w-screen h-screen flex flex-col items-center justify-center absolute z-20">
                <div className="flex flex-col items-start gap-4">
                    <div className="flex justify-center items-center gap-4">
                        <Map color="white" size={54} />
                        <div className='w-1 h-14 bg-white' />
                        <p className="text-white text-lg">Mapa de navegação entre salas</p>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <Menu color="white" size={54} />
                        <div className='w-1 h-14 bg-white' />
                        <p className="text-white text-lg">Menu de configuração</p>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <ArrowBigLeft color="white" size={54} />
                        <div className='w-1 h-14 bg-white' />
                        <p className="text-white text-lg">Mover para sala a Esquerda</p>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <ArrowBigRight color="white" size={54} />
                        <div className='w-1 h-14 bg-white' />
                        <p className="text-white text-lg">Mover para sala a Direita</p>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <DoorOpen color="white" size={54} />
                        <div className='w-1 h-14 bg-white' />
                        <p className="text-white text-lg">Entrar/sair da sala</p>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <p className="w-10 h-10 text-white border-white border-2 text-center rounded text-xl font-semibold mr-4">E</p>
                        <div className='w-1 h-14 bg-white' />
                        <p className="text-white text-lg">Fechar/passar legendas</p>
                    </div>
                </div>
            </div>
        </>
    );
}