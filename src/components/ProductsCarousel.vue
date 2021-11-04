<template>
  <div id="product-cards-container">
    <div class="row  row-cols-md-4 g-4">
      <div class="col">
        <div class="card">
          <!-- carousel one -->
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="../assets/images/puma.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/images/addidasone.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/images/vans-skate-old-skool-shoes-black-white-1.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="card-body">
            <h5 class="card-title">Shoes</h5>
            <p class="card-text">Something about our shoes.</p>
            <router-link
              class="btn btn-outline-primary me-2"
              :to="{ name: 'Products' }"
              >View
            </router-link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <!-- carousel two -->
          <div
            id="carouselExampleDark"
            class="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img
                  src="../assets/images/pants.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img
                  src="../assets/images/pants.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/images/vans-skate-old-skool-shoes-black-white-1.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="card-body">
            <h5 class="card-title">Pants</h5>
            <p class="card-text">Something about our pants.</p>
            <router-link
              class="btn btn-outline-primary me-2"
              :to="{ name: 'Products' }"
              >View
            </router-link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <!-- carousel three -->
          <div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="../assets/images/puma.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/images/addidasone.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/images/vans-skate-old-skool-shoes-black-white-1.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="card-body">
            <h5 class="card-title">Sweaters</h5>
            <p class="card-text">Something about our Sweaters.</p>
            <router-link
              class="btn btn-outline-primary me-2"
              :to="{ name: 'Products' }"
              >View
            </router-link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <!-- fourth carousel -->
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="../assets/images/shoes.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/images/top.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/images/pants.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div class="card-body">
            <h5 class="card-title">Jackets</h5>
            <p class="card-text">Something about our shoes Jackets.</p>
            <router-link
              class="btn btn-outline-primary me-2"
              :to="{ name: 'Products' }"
              >View
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="hide">words</div>
</template>

<script>
export default {};
</script>

<style>
.hide {
  visibility: hidden;
}
</style>