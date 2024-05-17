import { storage } from '@/firebase/config'
import { ref, uploadBytes } from "firebase/storage"

export const setProfilePic = async (username: string, blob: Blob) => {
    try {
        const storageRef = ref(storage, `${username}/profile_pic.png`)
        await uploadBytes(storageRef, blob)
        console.log("Image uploaded successfully")
    } catch (error) {
        console.error("Error uploading image:", error)
    }
}
