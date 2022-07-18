<template>
  <Carousel />

  <div class="products-container">
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
.products-container {
  margin: 50px;
}
</style>
