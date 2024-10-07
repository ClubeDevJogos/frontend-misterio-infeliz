import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { nextAuthOptions } from "@/app/lib/auth/nextAuthOptions";
import UserSession from "@/components/user-session";

interface PrivateLayoutProps {
    children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
    const session = await getServerSession(nextAuthOptions)

    if (!session) {
        redirect('/login');
    }

    return (
        <>
            <UserSession />
            {children}
        </>
    );
}