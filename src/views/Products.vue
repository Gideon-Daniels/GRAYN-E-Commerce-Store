<template>
  <section class="products">
    <!-- error message -->
    <div v-if="error" class="error">Could not fetch the data</div>
    <!-- container -->
    <div v-if="products" class="row">
      <div class="col-2">
        <button @click="filterCategories('Shoes')">Shoes</button>
        <button @click="filterCategories('Tops')">Tops</button>
        <button @click="filterCategories('Pants')">Pants</button>
        <button @click="filterCategories('Jackets')">Jackets</button>
      </div>
      <div class="col-10">
        <!-- search bar -->
        <div class="row mt-2 mb-2">
          <SearchBar />
        </div>
        <!-- cards -->
        <ListProducts :products="products" />
      </div>
    </div>
  </section>
</template>

<script>
import getCollection from "../composables/getCollection";
import SearchBar from "../components/search.vue";
import ListProducts from "../components/ListProducts.vue";
export default {
  components: { SearchBar, ListProducts },
  setup() {
    var { error, documents: products } = getCollection("products");

    const filterCategories = async (category) => {
      // console.log(category);
      products = await getCollection("products", ["categorys", "==", category]);
      console.log("products: ", products);
    };

    // console.log(products);
    return { error, products, filterCategories };
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.products {
  overflow: hidden;
}
</style>
