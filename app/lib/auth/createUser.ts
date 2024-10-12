interface CreateUserInterface {
    username: string,
    email: string,
    password: string
}

export default async function createUser(userParameters: CreateUserInterface) {
    const response = await fetch("http://clubedevjogos.com.br:4000/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userParameters)
    })

    return response
}

export type { CreateUserInterface }