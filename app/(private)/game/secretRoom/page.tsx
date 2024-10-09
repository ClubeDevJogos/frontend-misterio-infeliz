import ActionMenu from "@/components/action-menu";

export default function secretRoom() {
    return (
        <>
            <img src="/secretRoom.png" className="background-secretRoom"></img>
            <ActionMenu block={"Bloco B"} name={"Sala Secreta"} />
        </>
    );
}