import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../views/MainPage.vue";
import SignupPage from '../views/SignupPage.vue'
import LoginPage from '../views/LoginPage.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: MainPage
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupPage
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage
  },
  {
    path: "/product",
    name: "product",
    // route level code-splitting
    // this generates a separate chunk (product.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/ProductPage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
