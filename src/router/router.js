import MainPage from "@/pages/MainPage";
import TestPage from "@/pages/TestPage";
import PostPage from "@/pages/PostPage";
import PostAdd from "@/pages/PostAdd";
import HomeApp from "@/pages/HomeApp";
import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/test',
    component: TestPage
  },
  {
    path: '/post/:id',
    component: PostPage,
  },
  {
    path: '/post/add',
    component: PostAdd,
  },
  {
    path: '/home',
    component: HomeApp,
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;