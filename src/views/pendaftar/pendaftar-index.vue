<template>
    <div class="flex-1">
        <div class="col-12">
            <h1 class="px-6 py-6 mb-6 text-3xl font-extrabold">
                Data Pendaftar
            </h1>
        </div>
        <div class="col-12">
            <div class="flex-1">
                <div class="overflow-y-auto sm:-mx-6 lg:-mx-0">
                    <div class="py-2 inline-clip sm:px-6 lg:px-4">
                        <div class="sm:rounded-lg">
                            <button
                                v-on:click="sorting"
                                type="button"
                                class="
                                    text-white
                                    bg-blue-700
                                    hover:bg-blue-800
                                    focus:ring-4 focus:ring-blue-300
                                    font-medium
                                    rounded-lg
                                    text-sm
                                    px-5
                                    py-2.5
                                    text-center
                                    mr-2
                                    mb-2
                                    dark:bg-blue-600
                                    dark:hover:bg-blue-700
                                    dark:focus:ring-blue-800
                                "
                            >
                                SortNIMAsc
                            </button>
                            <button
                                v-on:click="sorting2"
                                type="button"
                                class="
                                    text-white
                                    bg-blue-700
                                    hover:bg-blue-800
                                    focus:ring-4 focus:ring-blue-300
                                    font-medium
                                    rounded-lg
                                    text-sm
                                    px-5
                                    py-2.5
                                    text-center
                                    mr-2
                                    mb-2
                                    dark:bg-blue-600
                                    dark:hover:bg-blue-700
                                    dark:focus:ring-blue-800
                                "
                            >
                                SortNIMDsc
                            </button>
                            <button
                                v-on:click="sortNameAsc"
                                type="button"
                                class="
                                    text-white
                                    bg-blue-700
                                    hover:bg-blue-800
                                    focus:ring-4 focus:ring-blue-300
                                    font-medium
                                    rounded-lg
                                    text-sm
                                    px-5
                                    py-2.5
                                    text-center
                                    mr-2
                                    mb-2
                                    dark:bg-blue-600
                                    dark:hover:bg-blue-700
                                    dark:focus:ring-blue-800
                                "
                            >
                                SortNameAsc
                            </button>
                            <button
                                v-on:click="sortNameDsc"
                                type="button"
                                class="
                                    text-white
                                    bg-blue-700
                                    hover:bg-blue-800
                                    focus:ring-4 focus:ring-blue-300
                                    font-medium
                                    rounded-lg
                                    text-sm
                                    px-5
                                    py-2.5
                                    text-center
                                    mr-2
                                    mb-2
                                    dark:bg-blue-600
                                    dark:hover:bg-blue-700
                                    dark:focus:ring-blue-800
                                "
                            >
                                SortNameDsc
                            </button>

                            <table class="min-w-full shadow-md ">
                                <thead class="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase  dark:text-gray-400"
                                        >
                                            NIM
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase  dark:text-gray-400"
                                        >
                                            Nama
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase  dark:text-gray-400"
                                        >
                                            Gender
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase  dark:text-gray-400"
                                        >
                                            Tanggal Lahir
                                        </th>

                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase  dark:text-gray-400"
                                        >
                                            Fakultas
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase  dark:text-gray-400"
                                        >
                                            Jurusan
                                        </th>
                                        <th
                                            scope="col"
                                            class="relative px-6 py-3"
                                        >
                                            <span class="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- Product 1 -->
                                    <tr
                                        v-for="pendaftar in state.pendaftar"
                                        :key="pendaftar.id"
                                        class="bg-white border-b  dark:bg-gray-800 dark:border-gray-600"
                                    >
                                        <td
                                            class="px-6 py-4 text-sm font-medium text-gray-900  whitespace-nowrap dark:text-white"
                                        >
                                            {{ pendaftar.nim }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500  whitespace-nowrap dark:text-gray-400"
                                        >
                                            {{ pendaftar.nama }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500  whitespace-nowrap dark:text-gray-400"
                                        >
                                            {{ pendaftar.gender }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500  whitespace-nowrap dark:text-gray-400"
                                        >
                                            {{ pendaftar.tgl_lahir }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500  whitespace-nowrap dark:text-gray-400"
                                        >
                                            {{ pendaftar.fakultas }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500  whitespace-nowrap dark:text-gray-400"
                                        >
                                            {{ pendaftar.jurusan }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm font-medium text-right  whitespace-nowrap"
                                        >
                                            <router-link
                                                :to="{
                                                    name: 'pendaftar.view',
                                                    params: {
                                                        id: pendaftar.nim,
                                                    },
                                                }"
                                                class="text-blue-600  hover:text-blue-900 dark:text-blue-500 dark:hover:underline"
                                                >Lihat</router-link
                                            >
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref, reactive, computed } from 'vue'
import http from "./../../http-common.js";

export default {
    name: 'pendaftar-index',
    components: {},

    setup(props) {
        const state = reactive({ pendaftar: [] })

        onMounted(() => {
            http
                .get('/pendaftar')
                .then((response) => {
                    state.pendaftar = response.data.data
                })
        })

        onMounted(() => {})

        const sorting = () =>
            state.pendaftar.sort((a, b) => (a.nim > b.nim ? 1 : -1))
        const sorting2 = () =>
            state.pendaftar.sort((a, b) => (a.nim < b.nim ? 1 : -1))

        const sortNameDsc = () =>
            state.pendaftar.sort(function (x, y) {
                let a = x.nama.toUpperCase(),
                    b = y.nama.toUpperCase()
                return b == a ? 0 : b > a ? 1 : -1
            })
        const sortNameAsc = () =>
            state.pendaftar.sort(function (x, y) {
                let a = x.nama.toUpperCase(),
                    b = y.nama.toUpperCase()
                return a == b ? 0 : a > b ? 1 : -1
            })

        return {
            state,
            sorting,
            sorting2,
            sortNameAsc,
            sortNameDsc,
        }
    },
}
</script>

<style>
</style>