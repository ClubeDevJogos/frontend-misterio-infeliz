interface CreateUserInterface {
    username: String,
    email: String,
    password: String
}

export default async function createUser(userParameters: CreateUserInterface) {
    const response = await fetch("http://201.23.18.145:4000/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userParameters)
    })

    // const data = await response.json()
    // return data
}

export type { CreateUserInterface }