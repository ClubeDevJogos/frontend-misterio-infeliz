import ActionMenu from "@/components/action-menu";
import Caption from "@/components/caption";
import HideScreen from "@/components/hide-screen";
import InteractiveButton from "@/components/interactive-button";

export default function Home() {
  const captions = [
    { name: "Luana Sombra", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    { name: "Luana Sombra", content: "Various versions have evolved over the years, sometimes by accident." },
    { name: "Luana Sombra", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." },
  ]

  return (
    <>
      <HideScreen enable={false} />
      <div className="background-b1"></div>
      <ActionMenu block={"Bloco B"} name={"Sala B1"} />
      <InteractiveButton />
      <Caption captions={captions} enable={true} />
    </>
  );
}
