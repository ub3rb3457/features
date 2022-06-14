import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/pages/Home";
import Search from "@/pages/Search";

const routes = [
  { path: "/", component: Home },
  {
    path: "/search",
    component: Search,
    meta: {
      feature: "search"
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes // short for `routes: routes`
});

export default router;
