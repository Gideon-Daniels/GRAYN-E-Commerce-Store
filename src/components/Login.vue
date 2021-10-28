<template>
<div class="modal-container" v-show="modalActive">
  <form @submit.prevent="handleSubmit">
    <div>
      <h1>Login</h1> 
      <span>Enter Your Profile Details</span>
      <img src="../assets/icons/x.svg" alt="close" @click="close" >
    </div>
    <div>
    <input type="email" required placeholder="Email" v-model="email">
    <input type="password" required placeholder="Password" v-model="password">
    </div>
    <div>
      <button type="submit">Signin</button>
    </div>
  </form>

  <p>{{email}} {{password}}</p>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  props: ['modalActive'],
  setup(props,{emit}){
    const email = ref('')
    const password = ref('')

    const close = () => {
      emit('close');
    }


    const handleSubmit = () => {
      console.log(email.value, password.value)
      console.log("form submitted")
    }


    return {email, password, handleSubmit, close}
  }

}
</script>

<style>

</style>