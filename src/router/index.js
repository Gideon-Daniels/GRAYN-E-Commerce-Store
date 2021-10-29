import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import About from "../views/About.vue";
import Registration from '../views/Registration.vue';
import CreateProducts from '../views/products/CreateProducts.vue'

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
    path: '/products/create',
    name: 'CreateProducts',
    component: CreateProducts

  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
