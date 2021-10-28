<template>
 <div class="content">
    <h1>HOME</h1>
    <div>
<button type="button" class="btn btn-dark">Dark</button>
</div>
  </div>
  <Login @close='toggleModal' :modalActive="modalActive"/>
</template>

<script>
import Login from '../components/Login.vue'
import { ref } from 'vue'
export default {
  name: 'Home',
  components: {Login},
  setup(){
    const modalActive = ref(true)

    const toggleModal = () => {
      modalActive.value = !modalActive.value
    }

    return { modalActive , toggleModal}

  }
}
</script>
