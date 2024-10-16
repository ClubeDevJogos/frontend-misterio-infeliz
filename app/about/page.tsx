export default function Home() {
    return (
        <>
            <div className="background-login bg-black"></div>
            <div className="w-screen h-screen absolute z-10 bg-black opacity-65"></div>
            <div className="w-screen h-screen flex flex-col items-center justify-center fixed z-50 gap-10">
                <div className="w-[900px]">
                    <p className="text-white text-xl text-justify">Mistério-InFeliz foi desenvolvido pelo Clube de Desenvolvimento de Jogos do IFRS Campus Feliz, contando com a colaboração de uma equipe dedicada de 11 integrantes. Inspirado no jogo Incidente no bloco 71, traz uma trama envolvente e cheia de mistérios para serem desvendados.

                        Atualmente, o jogo ainda está na sua versão beta, o que significa que a equipe está em fase de testes e ajustes, buscando o feedback dos jogadores para aprimorar a experiência. Com uma narrativa ambientada no próprio campus, os jogadores são desafiados a explorar cada canto da escola, desvendando enigmas e revelando segredos sombrios.

                        A equipe se dedicou a criar uma experiência de jogo imersiva, combinando elementos de suspense, puzzles e desafios estratégicos que prendem a atenção do início ao fim. Mistério-InFeliz promete manter os jogadores em alerta, enquanto eles enfrentam os mistérios perturbadores que assombram o campus.
                    </p>
                </div>
                <a href="/" className="text-white text-2xl font-pixelify hover:text-red-400 hover:text-[28px]">Voltar</a>
            </div>
        </>
    );
}