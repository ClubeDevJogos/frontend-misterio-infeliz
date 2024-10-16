interface IntroductionNextPageProps {
    href: string
}

export default function IntroductionNextPage({ href }: IntroductionNextPageProps) {
    return (
        <>
            <div className="w-screen h-screen flex items-end justify-end absolute z-50">
                <a href={href} className="text-white p-6 text-xl">Continuar</a>
            </div>
        </>
    )
}