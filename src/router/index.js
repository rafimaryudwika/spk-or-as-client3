import { createRouter , createWebHistory} from 'vue-router'

const routes= [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home.vue')
    },  
    {
        path: '/pendaftar',
        name: 'pendaftar.index',
        component: () => import('../views/pendaftar/pendaftar-index.vue'),
    },
    {
        path: '/pendaftar/view/:id',
        name: 'pendaftar.view',
        component: () => import('../views/pendaftar/pendaftar-view.vue'),
    },
    {
        path: '/penilaian1',
        name: 'penilaian1.index',
        component: () => import('../views/penilaian/penilaian1/penilaian1-index.vue'),
    },
    {
        path: '/test',
        name: 'test.index',
        component: () => import('../views/hometest.vue')
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router