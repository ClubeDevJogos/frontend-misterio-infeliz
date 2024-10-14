"use client"

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { SyntheticEvent, useState } from "react"
import Image from "next/image";

export default function Login() {
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState(false)

    async function handleSubmit(event: SyntheticEvent) {
        event.preventDefault()

        const response = await signIn("credentials", {
            email: email + "@aluno.feliz.ifrs.edu.br",
            password,
            redirect: false
        })

        if (response!.ok) {
            router.replace("/game")
        } else {
            setErrorMessage(true)
        }
    }

    return (
        <>
            <div className="background-login bg-black"></div>
            <div className="w-screen h-screen absolute z-10 bg-black opacity-80"></div>
            <div className="w-screen h-screen flex flex-col items-center justify-center absolute z-20">
                <div className="w-screen h-screen flex items-center justify-center gap-20">
                    <Image src={"/logo.png"} width={375} height={400} alt="logo"></Image>
                    <form onSubmit={handleSubmit} className="w-90 flex flex-col gap-3">
                        <div className="h-10 rounded-lg bg-transparent border-2 border-gray-900 flex items-center justify-between gap-2 p-1">
                            <input className="pl-2 bg-transparent text-white outline-none" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                            <p className="p-1 rounded bg-transparent bg-zinc-900 text-zinc-500 text-sm">@aluno.feliz.ifrs.edu.br</p>
                        </div>
                        <input className="h-10 rounded-lg bg-transparent border-2 border-gray-900 text-white outline-none pl-2" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                        { errorMessage && <p className="text-red-500 text-sm">Email ou senha incoreto.</p>}
                        <button type="submit" className="h-10 rounded-lg text-zinc-400 bg-gray-900">Entrar</button>
                        <p className="text-zinc-600 text-sm text-center">Não possui uma conta? <a href="/signUp">Criar conta</a></p>
                    </form>
                </div>
            </div>
        </>
    );
}