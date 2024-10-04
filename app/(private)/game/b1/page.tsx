import ActionMenu from "@/components/action-menu";
import Caption from "@/components/caption";

export default function Home() {
  return (
    <>
      <div className="background-b1"></div>
      <ActionMenu />
      <Caption
        captions={[
          { name: "Luana Sombra", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
          { name: "Luana Sombra", content: "Various versions have evolved over the years, sometimes by accident." },
          { name: "Luana Sombra", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." },
        ]}
      />
    </>
  );
}
