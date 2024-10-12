import getRedirectDir from "@/app/lib/helpers/getRedirectDir"
import { redirect } from 'next/navigation';

export default async function Game() {
    const redirectDir = await getRedirectDir()
    redirect(redirectDir?.redirect!);
}