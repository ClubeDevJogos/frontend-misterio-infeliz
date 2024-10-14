"use server"

import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../auth/nextAuthOptions";

export default async function getUserMission() {
    const session = await getServerSession(nextAuthOptions)
    const authToken = "Bearer " + session?.user.token

    const response = await fetch("http://clubedevjogos.com.br:4000/missionUser", {
        method: "GET",
        headers: {
            "Accept": "*/*",
            "authorization": authToken
        }
    })

    const data = await response.text()
    return data
}