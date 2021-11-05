<template>
  <section class="Products">
    <!-- error message -->
    <div v-if="error" class="error">Could not fetch the data</div>
    <!-- container -->
    <div v-if="documents" class="container">
      <div class="row">

      <div class="card" style="width: 18rem;" v-for="doc in documents" :key="doc.id" >
        <img :src="doc.coverUrl" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">{{doc.title}}</h5>
          <p class="card-text">{{doc.description}}</p>
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

<style></style>
