<template><div class="modal-container " v-show="modalActive">
  <form @submit.prevent="handleSubmit" class="form container">
    <div class="row mb-4 container">
      <div class="col" >

      <h1>Login</h1> 
      <span>Enter Your Profile Details</span>
      </div>
      <svg @click="close" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x col justify"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </div>
    <div class="row mb-4 container">
    <input type="email" required placeholder="Email" v-model="email" class="mb-4">
    <input type="password" required placeholder="Password" v-model="password" class="col-auto"> 
    <svg aria-hidden="true" focusable="false" width="28" height="28" data-prefix="fas" data-icon="eye" class="svg-inline--fa fa-eye fa-w-18 col-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg>
    </div>
    <div class="row container">
      <div class="error">{{ error }}</div>
      <button type="submit">Signin</button>
    </div>
  </form>

</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '../composables/useSignup'

export default {
  props: ['modalActive'],
  setup(props,{emit}){
    const email = ref('')
    const password = ref('')
    // functions from composables 
    const { error, login } = useSignup()

    const close = () => {
      emit('close');
    }


    const handleSubmit = async() => {
      // passing in user login details into login function
      await login(email.value, password.value)
      // if there is no error user is logged in
      if (!error.value) {
        
      }

    }


    return {email, password, handleSubmit, close, error}
  }

}
</script>

<style>
  .modal-container {
    position: absolute;
    top: 0;
    min-height: 100vh;
    width: 100%;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  form {
    background-color: white;
    padding: 25px;
  }
</style>