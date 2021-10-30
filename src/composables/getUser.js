import  { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const user = ref(projectAuth.currentUser)
//  fires when user login , signup , logout
projectAuth.onAuthStateChanged( _user => {
    console.log('User state change. Current user is:', _user)

    user.value = user
})

const getUser = () => {
    return { user }
}

export default getUser