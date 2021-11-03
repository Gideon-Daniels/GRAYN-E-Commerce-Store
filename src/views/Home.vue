<template>
  <Carousel />

  <div class="test">
    <ProductsCarousel />
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import ProductsCarousel from "../components/ProductsCarousel.vue";

export default {
  name: "Home",
  components: { Carousel, ProductsCarousel },
};
</script>

<style scoped>
.test {
  margin: 50px;
}
</style>
