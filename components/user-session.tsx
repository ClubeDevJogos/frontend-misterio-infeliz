import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/lib/auth/nextAuthOptions";

export default async function UserSession() {
    const session = await getServerSession(nextAuthOptions)
    console.log(session)

    return (
        <>
            <div className="w-screen h-screen flex flex-col items-start justify-end absolute z-10 text-white">
                <p>{session?.user.username}</p>
                <p>{session?.user.email}</p>
                <p>{session?.user.token}</p>
            </div>
        </>
    );
}