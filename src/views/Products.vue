<template>
  <section class="Products">
    <!-- error message -->
    <div v-if="error" class="error">Could not fetch the data</div>
    <!-- container -->
    <div v-if="documents" class="container">
      <div v-for="doc in documents" :key="doc.id">
        {{ doc.title }}
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
