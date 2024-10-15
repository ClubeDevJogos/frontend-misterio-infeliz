"use server"

export default async function getSecretRoomPassword() {
    return process.env.PASSWORD_SECRETROOM
}