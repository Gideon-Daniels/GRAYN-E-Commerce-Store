<template>
       <div class="row d-flex justify-content-center">
          <div
            class="card m-2"
            style="width: 15rem"
            v-for="product in products"
            :key="product.id"
          >
            <img :src="product.coverUrl" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <a href="#" class="btn btn-primary">Add To Cart</a>
            </div>
          </div>
        </div>
</template>

<script>
export default {
props:['products']
}
</script>

<style>

</style>