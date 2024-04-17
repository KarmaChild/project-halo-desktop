const API_ENDPOINT: string = "updateServices"
export const updateServices = async (username: string, services: { id: string, title: string, description: string, price: number }[], hidden: boolean) => {
    return new Promise(async (resolve, reject) => {
        try {
            const body = {
                username: username,
                services: services,
                hidden: hidden
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
                console.log("response:", response)
            })

        } catch (error) {
            console.error("Error:", error)
            reject(error)
        }
    })
}

