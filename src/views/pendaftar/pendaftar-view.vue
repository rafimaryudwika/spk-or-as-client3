<template>
    <div class="flex-1 bg-white dark:bg-gray-800">
        <div class="col-6">
            <h1 class="px-6 py-6 text-3xl font-extrabold dark:text-gray-200">
                Detail Pendaftar
            </h1>
        </div>
        <div class="col-12">
            <div class="flex-1">
                <div class="overflow-y-auto sm:-mx-6 lg:-mx-0">
                    <div class="py-2 inline-clip sm:px-6 lg:px-4">
                        <div class="container p-5 mx-auto my-5">
                            <div class="md:flex no-wrap md:-mx-2 ">
                                <!-- Left Side -->
                                <div class="w-full md:w-3/12 md:mx-2">
                                    <!-- Profile Card -->
                                    <div class="p-3 bg-white border-t-4 border-blue-600 dark:bg-gray-900">
                                        <div class="overflow-hidden image">
                                            <img class="w-full h-auto mx-auto" src="" alt="">
                                        </div>
                                        <h1 class="my-1 text-xl font-bold leading-8 text-gray-900 dark:text-gray-200">{{
                                                state.pendaftar.nama
                                        }}</h1>
                                        <h3 class="leading-6 text-gray-600 dark:text-gray-400 font-lg text-semibold">
                                            Fakultas
                                            {{ state.pendaftar.fakultas }}</h3>
                                        <h3 class="leading-6 text-gray-600 dark:text-gray-400 font-lg text-semibold">
                                            Jurusan
                                            {{ state.pendaftar.jurusan }}</h3>
                                        <p
                                            class="text-sm leading-6 text-gray-500 hover:text-gray-600 dark:text-gray-600 hover:dark:text-gray-500">
                                        </p>
                                        <ul
                                            class="px-3 py-2 mt-3 text-gray-600 bg-gray-100 divide-y rounded shadow-sm hover:text-gray-700 hover:shadow dark:bg-gray-800 dark:text-gray-400 hover:dark:text-gray-300">
                                            <li class="flex items-center py-3">
                                                <span>Daftar Ulang</span>
                                                <span class="ml-auto"><span v-if="state.pendaftar.daftar_ulang == 1"
                                                        class="px-2 py-1 text-sm text-white bg-green-500 rounded dark:bg-green-600">Sudah</span><span
                                                        v-else
                                                        class="px-2 py-1 text-sm text-white bg-red-500 rounded dark:bg-red-600">Belum</span></span>
                                            </li>
                                            <li class="flex items-center py-3">
                                                <span>Mendaftar sejak </span>
                                                <span class="ml-auto">{{ state.date
                                                }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- End of profile card -->
                                    <div class="my-4"></div>
                                </div>
                                <!-- Right Side -->
                                <div class="w-full h-64 mx-2 md:w-9/12">
                                    <!-- Profile tab -->
                                    <!-- About Section -->
                                    <div class="p-3 bg-white rounded-sm shadow-sm dark:bg-gray-900">
                                        <div
                                            class="flex items-center space-x-2 font-semibold leading-8 text-gray-900 dark:text-gray-200">
                                            <span clas="text-green-500">
                                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </span>
                                            <span class="tracking-wide">Biodata</span>
                                        </div>
                                        <div class="text-gray-700 dark:text-gray-200">
                                            <div class="grid text-sm md:grid-cols-2">
                                                <div class="grid grid-cols-2">
                                                    <div class="px-4 py-2 font-semibold">Panggilan</div>
                                                    <div class="px-4 py-2">{{ state.pendaftar.panggilan }}</div>
                                                </div>
                                                <div class="grid grid-cols-2">
                                                    <div class="px-4 py-2 font-semibold">NIM</div>
                                                    <div class="px-4 py-2">{{ state.pendaftar.nim }}</div>
                                                </div>
                                                <div class="grid grid-cols-2">
                                                    <div class="px-4 py-2 font-semibold">Gender</div>
                                                    <div class="px-4 py-2">{{ state.pendaftar.gender }}</div>
                                                </div>
                                                <div class="grid grid-cols-2">
                                                    <div class="px-4 py-2 font-semibold">No Telepon</div>
                                                    <div class="px-4 py-2">0{{ state.pendaftar.no_hp }}</div>
                                                </div>
                                                <div class="grid grid-cols-2">
                                                    <div class="px-4 py-2 font-semibold">Email.</div>
                                                    <div class="px-4 py-2">
                                                        <a class="text-blue-800 dark:text-blue-500" href="mailto:">{{
                                                                state.pendaftar.email
                                                        }}</a>
                                                    </div>
                                                </div>
                                                <div class="grid grid-cols-2">
                                                    <div class="px-4 py-2 font-semibold">Alamat di Padang</div>
                                                    <div class="px-4 py-2">{{ state.pendaftar.alamat_pdg }}</div>
                                                </div>
                                                <div class="grid grid-cols-2">
                                                    <div class="px-4 py-2 font-semibold">Tempat/Tanggal Lahir</div>
                                                    <div class="px-4 py-2">{{ state.pendaftar.tempat_lahir }} / {{
                                                            state.pendaftar.tgl_lahir
                                                    }}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End of about section -->

                                    <div class="my-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, onMounted } from 'vue'
import http from "./../../http-common.js";
import { useRouter, useRoute } from 'vue-router'
export default {
    setup() {
        const state = reactive({
            pendaftar: [],
            date: []
        })
        const route = useRoute()
        onMounted(() => {
            http
                .get(`/pendaftar/${route.params.id}`)
                .then((response) => {
                    state.pendaftar = response.data.data
                    state.date = response.data.data.tgl_daftar.slice(0, 10)
                    console.log(state.pendaftar)

                })
        })


        return {
            state,
            route
        }
    }
}
</script>

<style>
</style>