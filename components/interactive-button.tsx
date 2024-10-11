import { DoorOpen } from "lucide-react";

export default function InteractiveButton() {
    return (
        <>
            <div className="w-screen h-screen absolute flex items-end justify-end">
                <p className="text-white p-6"><DoorOpen size={54} color="white" /></p>
            </div>
        </>
    );
}