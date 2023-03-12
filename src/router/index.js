import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:"/",
            name: "aboutme",
            component: () => import("../views/AboutMe.vue"),
        },
        {
            path:"/education",
            name: "education",
            component: () => import("../views/EducationView.vue"),
        },
            {
            path:"/projects",
            name: "projects",
            component: () => import("../views/MyProjects.vue"),
        },
            {
            path:"/contact",
            name: "contact",
            component: () => import("../views/ContactMe.vue"),
        }
    ]
})

export default router;