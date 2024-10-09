import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/lib/auth/nextAuthOptions";

export default async function UserSession() {
    const session = await getServerSession(nextAuthOptions)

    return (
        <>
            <div className="w-screen h-screen flex items-end justify-start gap-2 absolute z-10 text-white p-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <p className="text-black text-lg font-semibold">{session?.user.username.charAt(0).toUpperCase()}</p>
                </div>
                <div>
                    <p>{session?.user.username}</p>
                    <p>{session?.user.email}</p>
                </div>
            </div>
        </>
    );
}