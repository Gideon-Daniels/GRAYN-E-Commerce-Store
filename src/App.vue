<template>
<Navbar/>
<div class="content">
  <router-view/>
</div>
<footer>
<!-- <Footer/> -->
</footer>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '../src/assets/main.css'
export default {
  components: { Navbar, Footer}
}
</script>

<style lang="scss">

</style>
