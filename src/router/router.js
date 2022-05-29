import MainPage from "@/pages/MainPage";
import TestPage from "@/pages/TestPage";
import PostPage from "@/pages/PostPage";
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
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;