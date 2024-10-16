"use server"

import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../auth/nextAuthOptions";

export default async function chengeUserMission() {
    const session = await getServerSession(nextAuthOptions)
    const authToken = "Bearer " + session?.user.token

    await fetch("http://clubedevjogos.com.br:8080/updateMissionOfUser", {
        method: "POST",
        headers: {
            "Accept": "*/*",
            "authorization": authToken
        }
    })
}