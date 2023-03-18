import { createRouter, createWebHistory } from "vue-router";

// * Admin
import homeAdminIndex from "../components/admin/home/index.vue";

// * Pages
import homePageIndex from "../components/pages/home/index.vue";

// * Page non trouvée
import notFound from "../components/notFound.vue";

const routes = [
    // Admin
    {
        path: "/admin/home",
        component: homeAdminIndex,
    },
    // pages
    {
        path: "",
        component: homePageIndex,
    },

    // Page non trouvée
    {
        path: "/:pathMatch(.*)*",
        component: notFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
