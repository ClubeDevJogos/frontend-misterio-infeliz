"use client"

import { useRouter } from "next/navigation"

export default function Home() {
    const routes = useRouter()
    routes.push("/game/introduction/newspaper")
}