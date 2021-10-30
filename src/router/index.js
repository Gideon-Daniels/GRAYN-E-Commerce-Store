import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import About from "../views/About.vue";
import Registration from '../views/auth/Registration.vue';
import Login from '../views/auth/Login.vue';
import CreateProducts from '../views/products/CreateProducts.vue'
import UsersCart from '../views/UsersCart.vue'
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },

  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: '/registration',
    name:'Registration',
    component: Registration
  },
  {
    path: '/login',
    name:'Login',
    component: Login
  },
  {
    path: '/products/create',
    name: 'CreateProducts',
    component: CreateProducts
  },
  {
    path: '/user/cart',
    name: 'UsersCart',
    component: UsersCart
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
