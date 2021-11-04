<template>
  <div v-for="playlist in playlists" :key="playlist.id">
    <div class="single">
      <div class="image">
        <img :src="products.coverUrl" alt="" />
      </div>
      <div class="title">
          <h3>{{products.title}}</h3>
      </div>
      <div class="description">
          <p> {{ products.price }} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['products'],
};
</script>

<style></style>
