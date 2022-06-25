import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home.vue'),
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
        component: () =>
            import('../views/penilaian/penilaian1/penilaian1-index.vue'),
    },
    {
        path: '/penilaian1/calculate',
        name: 'penilaian1.calculate',
        component: () =>
            import('../views/penilaian/penilaian1/penilaian1-calculate.vue'),
    },
    {
        path: '/penilaian1/calculate/:id',
        name: 'penilaian1.evaluate',
        component: () =>
            import('../views/penilaian/penilaian1/penilaian1-evaluate.vue'),
    },
    {
        path: '/penilaian1/kelulusan',
        name: 'penilaian1.kelulusan',
        component: () =>
            import('../views/penilaian/penilaian1/penilaian1-kelulusan.vue'),
    },
    {
        path: '/penilaian1/edit/:id',
        name: 'penilaian1.edit',
        component: () =>
            import('../views/penilaian/penilaian1/penilaian1-edit.vue'),
    },
    {
        path: '/penilaian1/tambah/:id',
        name: 'penilaian1.tambah',
        component: () =>
            import('../views/penilaian/penilaian1/penilaian1-tambah.vue'),
    },
    // {
    //     path: '/test',
    //     name: 'test.index',
    //     component: () => import('../views/hometest.vue')
    // },
    {
        path: '/kriteria1',
        name: 'kriteria1.index',
        component: () => import('../views/kriteria/tahap1/Kriteria1Index.vue'),
    },
    {
        path: '/kriteria1/edit/:id',
        name: 'kriteria1.edit',
        component: () => import('../views/kriteria/tahap1/Kriteria1Edit.vue'),
    },
    {
        path: '/kriteria1/subkriteria',
        name: 'subkriteria1.index',
        component: () =>
            import('../views/kriteria/tahap1/SubKriteria1Index.vue'),
    },
    {
        path: '/kriteria1/subkriteria/edit/:id',
        name: 'subkriteria1.edit',
        component: () =>
            import('../views/kriteria/tahap1/SubKriteria1Edit.vue'),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
