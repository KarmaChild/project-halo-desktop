const API_ENDPOINT: string = "addLink"
export const addLink = async (username: string, title: string, url: string) => {
    return new Promise(async (resolve, reject) => {
        try {
            const body = {
                username: username,
                title: title,
                url: url
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
                console.log("response:", response);
            })

        } catch (error) {
            console.error("Error:", error)
            reject(error)
        }
    })
}

