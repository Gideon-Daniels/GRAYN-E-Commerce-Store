import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import About from "../views/About.vue";
import Registration from '../views/auth/Registration.vue';
import Login from '../views/auth/Login.vue';
import CreateProducts from '../views/products/CreateProducts.vue'
import UsersCart from '../views/UsersCart.vue'

// route guard
import { projectAuth } from '../firebase/config'

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  // check if there is user
  if (!user) {
    next({ name: 'Home'})
  }else {
    next()
  }
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: '/products/create',
    name: 'CreateProducts',
    component: CreateProducts,
  }
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
