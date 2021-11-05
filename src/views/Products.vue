<template>
  <section class="products">
    <!-- error message -->
    <div v-if="error" class="error">Could not fetch the data</div>
    <!-- container -->
    <div v-if="documents" class="">
      <!-- search bar -->
      <div class="row">
        <h1>search bar</h1>
      </div>
      <!-- cards -->
      <div class="row d-flex justify-content-center">
        <div
          class="card"
          style="width: 18rem;"
          v-for="doc in documents"
          :key="doc.id"
        >
          <img :src="doc.coverUrl" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">{{ doc.title }}</h5>
            <p class="card-text">{{ doc.description }}</p>
            <a href="#" class="btn btn-primary">Add To Cart</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import getCollection from "../composables/getCollection";

export default {
  setup() {
    const { error, documents } = getCollection("products");

    return { error, documents };
  },
};
</script>

<style scoped>
  img{
    width: 100%;
    height:  100%;
    object-fit: cover;
  }
  .products{
    overflow: hidden;
  }
</style>
