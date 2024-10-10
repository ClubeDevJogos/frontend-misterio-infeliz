interface CreateUserInterface {
    username: string,
    email: string,
    password: string
}

export default async function createUser(userParameters: CreateUserInterface) {
    //const data =
    await fetch("http://18.229.140.80:4000/user", {
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