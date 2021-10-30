<template>
  <div class="container mt-3" >
    <form @submit.prevent="handleSubmit">
      <h1 class="mb-3">Sign in</h1>
      <p>Please enter your details</p>
      <input v-model="email" type="email" id="emailAddress" class="form-control mb-3" placeholder="Email" required autofocus>
      <input v-model="password" type="password" id="password" class="form-control mb-3" placeholder="Password" required autofocus>
      <div class="text-center mt-3">
        <div class="error"> {{error}} </div>
        <button type="submit" class="btn btn-large btn-primary ">Sign In</button>
      </div>
      <div class="text-center mt-3">
        <span>New Customer  </span>
        <router-link 
          :to="{ name: 'Registration' }"
           class="link-primary"
           >Register
        </router-link>
      </div>
      
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import useLogin from '@/composables/useLogin'
import {useRouter} from 'vue-router' 
export default {
  setup(){
    const email = ref('')
    const password = ref('')
    const router = useRouter()
    // functions from composables 
    const { error, login } = useLogin()


    const handleSubmit = async () => {
      // passing in user login details into login function
      await login(email.value, password.value)
      // if there is no error user is logged in
      if (!error.value) {
        router.push({ name: 'Home'})
        console.log('user user is logged in')
      }

    }


    return {email, password, handleSubmit, error}
  }

}
</script>

<style >
body{
  min-height: 100vh;
}

  
</style>