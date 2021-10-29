<template>
  <section id="home-page">
    <Navbar />
    <div class="home-images">
      <Carousel />
    </div>
    <div class="product-categories"></div>

    <div>Footer</div>
    <!-- <Footer ?> -->
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Carousel from "../components/Carousel.vue";
export default {
  name: "Home",
  components: { Navbar, Carousel },
};
</script>

<style scoped>
#home-page {
  /* background-color: grey; */
  height: 100%;
  width: 100%;
}

.home-images {
  margin: 50px;
  background-color: white;
}

.product-categories {
  margin: 50px;
  background-color: white;
}

.c-button {
  color: black;
  background-color: black;
}
</style>
