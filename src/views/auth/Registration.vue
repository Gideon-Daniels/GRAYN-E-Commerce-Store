<template>
  <div class="container mt-3">
    <form @submit.prevent="handleSubmit">
      <h1 class="mb-3">Signup</h1>
      <p>Please enter your details</p>
      <input
        class="form-control mb-3"
        type="text"
        required
        v-model="name"
        placeholder="name"
      />
      <input
        class="form-control mb-3"
        type="text"
        required
        v-model="lastName"
        placeholder="surname"
      />
      <input
        class="form-control mb-3"
        type="email"
        required
        v-model="email"
        placeholder="email"
      />
      <input
        class="form-control mb-3"
        type="password"
        required
        v-model="password"
        placeholder="password"
      />
      <input
        class="form-control mb-3"
        type="tel"
        required
        v-model="number"
        placeholder="+27 555 8789"
      />
      <div class="text-center mt-3">
        <div class="error">{{ error }}</div>
        <button type="submit" class="btn btn-large btn-primary">Sign In</button>
      </div>
      <div class="text-center mt-3">
        <span>Already have an Account ? </span>
        <router-link :to="{ name: 'Login' }" class="link-primary"
          >Login
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import useSignup from "../../composables/useSignUp";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { error, signup } = useSignup();

    // refs
    const name = ref("");
    const lastName = ref("");
    const email = ref("");
    const password = ref("");
    const number = ref("");

    const router = useRouter();

    const handleSubmit = async () => {
      await signup(email.value, password.value, name.value);
      console.log("user signed up");
      if (!error.value) {
        router.push({ name: "Home" });
        console.log("user has registered");
      }
    };
    return { name, lastName, email, password, number, handleSubmit, error };
  },
};
</script>

<style></style>
