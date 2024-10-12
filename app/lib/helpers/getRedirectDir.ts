import getUserMission from "../helpers/getUserMission";

export default async function getRedirectDir() {
    const mission = await getUserMission()

    switch (mission) {
        case "1":
            return {
                redirect: "/game/firstGate",
                block: [
                    "/game/b1",
                    "/game/b2",
                    "/game/secretRoom"
                ]
            }
        case "2":
            return {
                redirect: "/game/b1",
                block: [
                    "/game/firstGate",
                    "/game/secondGate",
                    "/game/secretRoom"
                ]
            }

    }
}