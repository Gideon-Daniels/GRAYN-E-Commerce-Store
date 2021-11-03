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
            class="nav-link px-2 link-dark"
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
      <button
        @click="handleClick('logout')"
        type="button"
        class="btn btn-outline-primary me-2"
      >
        Logout
      </button>
      <button
        @click="handleClick('cart')"
        type="button"
        class="btn btn-primary"
      >
        Cart
      </button>
    </div>

    <div v-else class="col-sm-3 text-end">
      <button
        @click="handleClick('signin')"
        type="button"
        class="btn btn-outline-primary me-2"
      >
        Signin
      </button>
      <button
        @click="handleClick('signup')"
        type="button"
        class="btn btn-primary"
      >
        Signup
      </button>
    </div>
  </header>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { logout, error } = useLogout();
    const { user } = getUser();
    const router = useRouter();

    const handleClick = async (clicked) => {
      await logout();
      if (!error.value) {
        if (clicked == "signin") {
          router.push({ name: "Login" });
        } else if (clicked == "signup") {
          router.push({ name: "Registration" });
        } else if (clicked == "logout") {
          router.push({ name: "Home" });
        } else if (clicked == "cart") {
          router.push({ name: "UsersCart" });
        }
      }
    };

    return { handleClick, user };
  },
};
</script>

<style>
.nav-container {
  background-color: rgb(0, 0, 0, 0.1);
}
</style>
