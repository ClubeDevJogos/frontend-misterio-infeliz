import getUserMission from "../helpers/getUserMission";

export default async function getRedirectDir() {
    const mission = await getUserMission()

    switch (mission) {
        case "1":
            return "/game/firstGate"
        case "2":
            return "/game/b1"
        case "3":
            return "/game/biblioteca"
        case "4":
            return "/game/secretRoom/intoSecretRoom"
        default:
            return "/"
    }
}