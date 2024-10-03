"use client"

import { SyntheticEvent, useState } from "react"

export default function SingIn() {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(event: SyntheticEvent) {
        event.preventDefault()

        //comunicacao backend

        //redirecionar
    }

    return (
        <>
            <div className="w-screen h-screen flex items-center justify-center">
                <form onSubmit={handleSubmit} className="w-60 flex flex-col gap-3">
                    <input type="text" placeholder="userName" onChange={(e) => setUserName(e.target.value)}></input>
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                    <input type="submit" placeholder="Submit" className="text-white cursor-pointer" />
                </form>
            </div>
        </>
    );
}