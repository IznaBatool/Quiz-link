import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/instructions",
    name: "Instructions",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/Quiz.vue"),
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: () =>
      import( /* webpackChunkName: "about" */ "../components/QuizPanel.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "../views/Dashboard.vue"),
      children: [
        {
          path: ":leftpanel",
          name: "leftpanel",
          props: true,
          component: () => 
            import(/* webpackChunkName: "LeftPanel" */ "../components/LeftPanel.vue")
        },
      ]
  },

];

const router = new VueRouter({
  routes,
});

export default router;
