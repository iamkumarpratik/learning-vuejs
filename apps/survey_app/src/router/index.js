import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView";
import NotFound from "@/components/NotFound"
import SurveyFormView from "@/views/SurveyFormView";
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },

  { path: '/survey',
    name: 'survey-form',
    component: SurveyFormView
  },

  { path: "/:pathMatch(.*)", name: "bad-not-found", component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
