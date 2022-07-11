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
        path: '/penilaian1/penilaian',
        name: 'penilaian1.index',
        component: () =>
            import('../views/penilaian/penilaian1/penilaian1-index.vue'),
    },
    {
        path: '/penilaian1',
        name: 'penilaian1.peserta',
        component: () =>
            import('../views/penilaian/penilaian1/penilaian1-peserta.vue'),
    },
    {
        path: '/penilaian1/view/:id',
        name: 'penilaian1.view',
        component: () =>
            import('../views/penilaian/penilaian1/penilaian1-view.vue'),
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
        path: '/kriteria1/tambah',
        name: 'kriteria1.tambah',
        component: () => import('../views/kriteria/tahap1/Kriteria1Tambah.vue'),
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
        path: '/kriteria1/subkriteria/tambah',
        name: 'subkriteria1.tambah',
        component: () =>
            import('../views/kriteria/tahap1/SubKriteria1Tambah.vue'),
    },
    {
        path: '/kriteria1/subkriteria/edit/:id',
        name: 'subkriteria1.edit',
        component: () =>
            import('../views/kriteria/tahap1/SubKriteria1Edit.vue'),
    },
    // Tahap 2
    {
        path: '/kriteria2',
        name: 'kriteria2.index',
        component: () => import('../views/kriteria/tahap2/Kriteria2Index.vue'),
    },
    {
        path: '/kriteria2/tambah',
        name: 'kriteria2.tambah',
        component: () => import('../views/kriteria/tahap2/Kriteria2Tambah.vue'),
    },
    {
        path: '/kriteria2/edit/:id',
        name: 'kriteria2.edit',
        component: () => import('../views/kriteria/tahap2/Kriteria2Edit.vue'),
    },
    {
        path: '/kriteria2/subkriteria',
        name: 'subkriteria2.index',
        component: () =>
            import('../views/kriteria/tahap2/SubKriteria2Index.vue'),
    },
    {
        path: '/kriteria2/subkriteria/tambah',
        name: 'subkriteria2.tambah',
        component: () =>
            import('../views/kriteria/tahap2/SubKriteria2Tambah.vue'),
    },
    {
        path: '/kriteria2/subkriteria/edit/:id',
        name: 'subkriteria2.edit',
        component: () =>
            import('../views/kriteria/tahap2/SubKriteria2Edit.vue'),
    },
    {
        path: '/penilaian2/penilaian',
        name: 'penilaian2.index',
        component: () =>
            import('../views/penilaian/penilaian2/penilaian2-index.vue'),
    },
    {
        path: '/penilaian2',
        name: 'penilaian2.peserta',
        component: () =>
            import('../views/penilaian/penilaian2/penilaian2-peserta.vue'),
    },
    // {
    //     path: '/penilaian2/view/:id',
    //     name: 'penilaian2.view',
    //     component: () =>
    //         import('../views/penilaian/penilaian2/penilaian2-view.vue'),
    // },
    // {
    //     path: '/penilaian2/calculate',
    //     name: 'penilaian2.calculate',
    //     component: () =>
    //         import('../views/penilaian/penilaian2/penilaian2-calculate.vue'),
    // },
    // {
    //     path: '/penilaian2/calculate/:id',
    //     name: 'penilaian2.evaluate',
    //     component: () =>
    //         import('../views/penilaian/penilaian1/penilaian2-evaluate.vue'),
    // },
    // {
    //     path: '/penilaian2/kelulusan',
    //     name: 'penilaian2.kelulusan',
    //     component: () =>
    //         import('../views/penilaian/penilaian1/penilaian2-kelulusan.vue'),
    // },
    // {
    //     path: '/penilaian2/edit/:id',
    //     name: 'penilaian2.edit',
    //     component: () =>
    //         import('../views/penilaian/penilaian2/penilaian2-edit.vue'),
    // },
    {
        path: '/penilaian2/tambah/:id',
        name: 'penilaian2.tambah',
        component: () =>
            import('../views/penilaian/penilaian2/penilaian2-tambah.vue'),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
