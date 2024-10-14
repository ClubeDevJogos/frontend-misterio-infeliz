import getUserMission from "../helpers/getUserMission";

export default async function getRedirectDir() {
    const mission = await getUserMission()

    console.log(mission)

    switch (mission) {
        case "1":
            return "/game/firstGate"
        case "2":
            return "/game/b1"
        default:
            return "/"
    }
}