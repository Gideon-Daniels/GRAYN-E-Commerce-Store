import { ref } from 'vue'
import { projectAuth, projectFirestore } from '../firebase/config'

const userCollection = (collection) => {
    
    const error =ref(null)
    const isPending = ref(false)
    
    // add document to firestore
    const addDoc = async (doc) => {
        error.value = null
        isPending.value = true

        try {
            await projectFirestore.collection(collection).add(doc)
            isPending.value = false
        } catch (error) {
            console.log(error.message)
            error.value = 'Could not send the message'
            isPending.value = false
        }
    }
    return { error, addDoc, isPending}
}

export default userCollection