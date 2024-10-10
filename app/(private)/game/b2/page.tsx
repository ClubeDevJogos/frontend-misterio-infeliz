import ActionMenu from "@/components/action-menu";
import HideScreen from "@/components/hide-screen";

export default function Home() {
  return (
    <>
      <HideScreen enable={true} />
      <div className="background-b2"></div>
      <ActionMenu block={"Bloco B"} name={"Sala B2"} />
    </>
  );
}
