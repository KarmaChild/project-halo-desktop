const API_ENDPOINT: string = "updateLinks"
export const updateLinks = async (username: string, links: { title: string, url: string }[]) => {
    return new Promise(async (resolve, reject) => {
        try {
            const body = {
                username: username,
                links: links
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

