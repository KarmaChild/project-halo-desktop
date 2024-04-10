const API_ENDPOINT: string = "editService"
export const editService = async (username: string, id: string, title: string, description: string, price: number | "Free") => {
    return new Promise(async (resolve, reject) => {
        try {
            const body = {
                username: username,
                id: id,
                title: title,
                description: description,
                price: 0 ? price === "Free" : price
            }

            const _url = `https://us-central1-halo-d4aba.cloudfunctions.net/${API_ENDPOINT}`

            await fetch(_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            }).then( response => {
                resolve(response)
                console.log("response:", response)
            })

        } catch (error) {
            console.error("Error:", error)
            reject(error)
        }
    })
}

