<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required v-model="name" placeholder="name">
    <input type="text" required v-model="lastName" placeholder="surname">
    <input type="email" required v-model="email" placeholder="email">
    <input type="password" required v-model="password" placeholder="password">
    <input type="tel" required v-model="number" placeholder="+27 555 8789">
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'
export default {
  setup() {
    const { error, signup} = useSignup()

    // refs
    const name = ref ('')
    const lastName = ref('')
    const email = ref ('')
    const password = ref('')
    const number = ref('')

    const handleSubmit = async () => {
      await signup(email.value, password.value, name.value)
      console.log('user signed up')
    }
    return{ name,lastName, email, password, number, handleSubmit }
  }

}
</script>

<style>
form{
    text-align: center;
    padding: 20px 0;
    box-sizing: border-box;
}
input{
    width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
  background-color: #ddd;
  outline: none;
    

}
button{
    background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 50%;
  opacity: 0.9;
}
</style>