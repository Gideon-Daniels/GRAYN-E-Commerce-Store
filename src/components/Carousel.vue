<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <p
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></p>
      <p
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></p>
      <p
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></p>
      <p
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="3"
        aria-label="Slide 4"
      ></p>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/images/pants.jpg" class="d-block" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="../assets/images/shoes.png" class="d-block" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="../assets/images/top.jpg" class="d-block" alt="..." />
      </div>
      <div class="carousel-item">
        <img
          src="../assets/images/Jesus-Shoes-photo-courtesy-of-Nike.jpg"
          class="d-block"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style>
img {
  height: 500px;
  width: 100%;
  object-fit: contain;
  /* background-color: black; */
}
#carouselExampleIndicators p {
  width: 30px;
  height: 30px;
  background-color: black;
  border-radius: 50%;
}
</style>