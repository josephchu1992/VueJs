import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/users",
    name: "users",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "users" */ "../views/Users.vue");
    }
  },
  {
    path: "/posts",
    name: "posts",
    component: function() {
      return import(/* webpackChunkName: "posts" */ "../views/Posts.vue");
    }
  },
  {
    path: "/comments",
    name: "comments",
    component: function() {
      return import(/* webpackChunkName: "posts" */ "../views/Comments.vue");
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
