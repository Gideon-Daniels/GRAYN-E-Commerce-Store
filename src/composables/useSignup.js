import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)
// function takes in param from
const login = async(email, password) => {
    // resets error when logging in
    error.value = null
    // try to catch an error if there are any
    try {
        // login user with email and password
        // firebase auth function
        const res = await projectAuth.signInWithEmailAndPassword(email, password)
        // set error value to null if there is no error
        error.value = null
        console.log(res)
        // return res to use it again
        return res
    } catch (err) {
        console.log(err.value)
        error.value = 'incorrect login credentials'
    }
}

const useLogin = () => {
    return { error, login}
}

export default useLogin 