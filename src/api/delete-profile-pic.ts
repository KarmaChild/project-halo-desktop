import { storage } from '@/firebase/config'
import { ref, deleteObject } from "firebase/storage"

export const deleteProfilePic = async (username: string) => {
    try {
        const storageRef = ref(storage, `${username}/profile_pic.png`)
        await deleteObject(storageRef)
        console.log("Profile picture deleted successfully")
    } catch (error) {
        console.error("Error deleting profile picture:", error)
    }
}
