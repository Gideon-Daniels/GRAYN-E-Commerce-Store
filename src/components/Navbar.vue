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

      <div v-if="!user" class="col-md text-end">
        <button @click="handleClick" type="button" class="btn btn-outline-primary me-2">
          Logout
        </button>
        <button type="button" class="btn btn-primary">Cart</button>
      </div>

      <div v-else class="col-sm-3 text-end">
        <router-link :to="{ name: 'Login' }" class="btn px-2 link-dark"
              >Login
        </router-link>
        <router-link :to="{ name: 'Registration' }" class="btn px-2 link-dark"
              >Register
        </router-link>
      </div>

      
    </header>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'

export default {
  setup() {
    const { logout, error} = useLogout()
    const { user } = getUser()

    const handleClick = async() => {
      await logout()
      if(!error.value){
        console.log('user logged out')
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
