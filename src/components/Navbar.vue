<template>
    <header
      class="
        d-flex
        flex-wrap
        align-items-center
        justify-content-center justify-content-md-between
        py-3
        nav-container
      "
    >
      <a
        href=""
        class="
          d-flex
          align-items-center
          col-md-3
          mb-2 mb-md-0
          text-dark text-decoration-none
        "
      >
        <svg
          class="bi me-2"
          width="40"
          height="32"
          role="img"
          aria-label="Bootstrap"
        >
          <use xlink:href="#bootstrap" />
        </svg>
        GRAYN</a
      >

      <nav>
        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <router-link
              :to="{ name: 'Home' }"
              class="nav-link px-2 link-secondary"
              >Home
            </router-link>
          </li>

          <li>
            <router-link
              :to="{ name: 'Products' }"
              class="nav-link px-2 link-dark "
              >Products
            </router-link>
          </li>

          <li>
            <router-link :to="{ name: 'About' }" class="nav-link px-2 link-dark"
              >About
            </router-link>
          </li>
        </ul>
      </nav>

      <div v-if="user" class="col-md text-end">
        <button @click="handleClick('logout')" type="button" class="btn btn-outline-primary me-2">
          Logout
        </button>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg> Cart </button>
      </div>

      <div v-else class="col-sm-3 text-end">
        <button @click="handleClick('signin')" type="button" class="btn btn-outline-primary me-2">
          Signin
        </button>
        <button @click="handleClick('signup')" type="button" class="btn btn-primary">Signup</button>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Cart</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="cart-items">
          
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Continue shopping</button>
        <button type="button" @click="handleClick('cart')" class="btn btn-primary" data-bs-dismiss="modal">Checkout</button>
      </div>
    </div>
  </div>
</div>
      
    </header>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const { logout, error} = useLogout()
    const { user } = getUser()
    const router = useRouter()

    const handleClick = async (clicked) => {
      await logout()
      if(!error.value){
        if(clicked == 'signin'){
          router.push({name: 'Login'})
        }
        else if (clicked == 'signup'){
          router.push({name: 'Registration'})
        }
        else if (clicked == 'logout'){
          router.push({name: 'Home'})
        }
        else if (clicked == 'cart'){
          router.push({name: 'UsersCart'})
        }

      }
    }

    return {handleClick, user}
  }
};
</script>

<style>
.nav-container {
  background-color: rgb(0, 0, 0, 0.1);
}
</style>
