const API_ENDPOINT: string = "addService"
export const addService = async (username: string, title: string, description: string, price: number) => {
    return new Promise(async (resolve, reject) => {
        try {
            const body = {
                username: username,
                title: title,
                description: description,
                price: price
            }

            const url = `https://us-central1-halo-d4aba.cloudfunctions.net/${API_ENDPOINT}`

            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            }).then( response => {
                resolve(response)
                console.log("response:", response);
            })

        } catch (error) {
            console.error("Error:", error)
            reject(error)
        }
    })
}

