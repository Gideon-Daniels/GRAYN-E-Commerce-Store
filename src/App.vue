<template>
  <Navbar />
  <div class="content">
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../src/assets/main.css";
export default {
  components: { Navbar, Footer },
};
</script>

<style>
.content {
  background-color: rgb(0, 0, 0, 0.1);
}
</style>
