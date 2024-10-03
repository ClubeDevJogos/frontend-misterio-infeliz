"use client"

import { signIn } from "next-auth/react"
import { SyntheticEvent, useState } from "react"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(event: SyntheticEvent) {
        event.preventDefault()

        const result = await signIn("credentials", {
            email,
            password,
            redirect: false
        })

        //redirecionar
    }

    return (
        <>
            <div className="w-screen h-screen flex items-center justify-center">
                <form onSubmit={handleSubmit} className="w-60 flex flex-col gap-3">
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                    <input type="submit" placeholder="Submit" className="text-white cursor-pointer" />
                </form>
            </div>
        </>
    );
}