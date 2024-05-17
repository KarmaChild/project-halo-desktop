import {storage} from '@/firebase/config'
import {getDownloadURL, ref} from "firebase/storage"

export const getProfilePicUrl = async (username: string) => {
    try {
        console.log('geturl')
        const profilePicRef = ref(storage, `${username}/profile_pic.png`)
        return await getDownloadURL(profilePicRef)
    } catch (err) {
        console.error("Error fetching profile pic", err)
    }
}
