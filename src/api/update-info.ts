const API_ENDPOINT: string = "updateInfo"
export const updateInfo = async (username: string, name: string, location: string, bio: string) => {
    return new Promise(async (resolve, reject) => {
        try {
            const body = {
                username: username,
                name: name,
                location: location,
                bio: bio
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

