import { DoorOpen, Pointer } from "lucide-react";

interface InteractiveButtonProps{
    type: "door" | "object",
    href: string,
}

export default function InteractiveButton({ type, href }: InteractiveButtonProps) {
    return (
        <>
            <div className="w-screen h-screen pt-10 absolute flex items-end justify-end">
                <a className="p-6 z-50" href={href}>
                    {type == "door" && (
                        <DoorOpen size={54} color="white" />
                    )}
                </a>
            </div>
        </>
    );
}