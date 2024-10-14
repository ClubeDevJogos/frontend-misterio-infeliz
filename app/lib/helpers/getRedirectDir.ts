import getUserMission from "../helpers/getUserMission";

export default async function getRedirectDir() {
    const mission = await getUserMission()

    switch (mission) {
        case "1":
            return "/game/firstGate"
        case "2":
            return "/game/b1"
        default:
            return "/"
    }
}