import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'aboutme',
      component: () => import('../views/AboutMe.vue')
    },
    {
      path: '/background',
      name: 'background',
      component: () => import('../views/BackgroundView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/MyProjects.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactMe.vue')
    },
    {
      path: '/projects/phonebillAndroid',
      name: 'phonebillAndroid',
      component: () => import('../components/Project-Android.vue')
    },
    {
      path: '/projects/AbilitiesAtWork',
      name: 'AbilitiesAtWork',
      component: () => import('../components/AbilitiesAtWork.vue')
    }

  ]
})

export default router
