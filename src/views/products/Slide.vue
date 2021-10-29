<template>
  <div class="productpage">


<!-- button carousel -->
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/img/pants.jpg" class="d-block w-100" >
    </div>
    <div class="carousel-item">
      <img src="../assets/img/shoes.png" class="d-block w-100" >
    </div>
    <div class="carousel-item">
      <img src="../assets/img/top.jpg" class="d-block w-100" >
    </div>
  </div>
 
</div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.productpage{
  background-color:black ;
  height: 100vh;
  width: 100vw;
}
img{
  height: 300px;
  width: 300px;
  object-fit: contain;
}

</style>