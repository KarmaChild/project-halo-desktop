const API_ENDPOINT: string = "getUserData"
export const getUserData = async (username: string) => {
    return new Promise(async (resolve, reject) => {
        try {
            const body = {
                username: username
            };

            const url = `https://us-central1-halo-d4aba.cloudfunctions.net/${API_ENDPOINT}`;

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const userData = await response.json();

            console.log("response:", userData);
            resolve(userData);
        } catch (error) {
            console.error("Error:", error);
            reject(error);
        }
    });
};

