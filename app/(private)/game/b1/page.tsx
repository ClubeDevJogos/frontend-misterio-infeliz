import ActionMenu from "@/components/action-menu";
import HideScreen from "@/components/hide-screen";
import InteractiveButton from "@/components/interactive-button";
import SideArrows from "@/components/side-arrows";

export default function Home() {
  const captionLoked = [
    { name: "Luana Sombra", content: "Não abre! Acho que a porta está trancada!" }
  ]

  return (
    <>
      <HideScreen enable={false} />
      <div className="background-b1"></div>
      <SideArrows right={true} hrefRight={"/game/biblioteca"} />
      <ActionMenu block={"Bloco B"} name={"Sala B1"} />
      <InteractiveButton href={"/game/b1/intoB1"} type={"door"} locked={false} captions={captionLoked} />
    </>
  );
}
