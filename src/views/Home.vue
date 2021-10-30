<template>
  <Carousel />  
</template>

<script>
import Carousel from "../components/Carousel.vue";

export default {
  name: "Home",
  components: {Carousel},
};
</script>

<style scoped>
#home-page {
  height: 100%;
  width: 100%;
}

.home-images {
  margin: 80px;
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
