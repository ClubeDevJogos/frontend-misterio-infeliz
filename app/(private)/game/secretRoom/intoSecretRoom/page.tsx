import ActionMenu from "@/components/action-menu";
import InteractiveButton from "@/components/interactive-button";

export default function secretRoom() {
    return (
        <>
            <div className="background-intoSecretRoom"></div>
            <InteractiveButton href="/game/secretRoom/" type="door"/>
            <ActionMenu block={"Bloco B"} name={"Sala Secreta"} />
        </>
    );
}