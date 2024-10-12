import ActionMenu from "@/components/action-menu";
import InteractiveButton from "@/components/interactive-button";

export default function Home() {

  return (
    <>
      <div className="background-intoB1"></div>
      <ActionMenu block={"Bloco B"} name={"Sala B1"} />
      <InteractiveButton href={"/game/b1"} type={"door"} />
    </>
  );
}
