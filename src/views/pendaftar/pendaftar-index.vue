<template>
    <div class="flex-1 bg-white dark:bg-gray-800">
        <div class="col-6">
            <h1 class="px-6 py-6 text-3xl font-extrabold dark:text-gray-200">
                Data Pendaftar
            </h1>
        </div>
        <div class="col-12">
            <div class="flex-1">
                <div class="overflow-y-auto sm:-mx-6 lg:-mx-0">
                    <div class="py-2 inline-clip sm:px-6 lg:px-4">
                        <div class="sm:rounded-lg">


                            <table class="min-w-full shadow-md ">
                                <thead class="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th @click="sorting('nim')" scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            NIM
                                        </th>
                                        <th @click="sorting('nama')" scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Nama
                                        </th>
                                        <th @click="sorting('gender')" scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Gender
                                        </th>
                                        <th @click="sorting('tgl_lahir')" scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Tanggal Lahir
                                        </th>

                                        <th @click="sorting('fakultas')" scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Fakultas
                                        </th>
                                        <th @click="sorting('jurusan')" scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Jurusan
                                        </th>
                                        <th scope="col" class="relative px-6 py-3">
                                            <span class="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- Product 1 -->
                                    <tr v-for="pendaftar in sortedData" :key="pendaftar.id"
                                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-600">
                                        <td
                                            class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {{ pendaftar.nim }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {{ pendaftar.nama }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {{ pendaftar.gender }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {{ pendaftar.tgl_lahir }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {{ pendaftar.fakultas }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {{ pendaftar.jurusan }}
                                        </td>
                                        <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <router-link :to="{
                                                name: 'pendaftar.view',
                                                params: {
                                                    id: pendaftar.nim,
                                                },
                                            }"
                                                class="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline">
                                                Lihat</router-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <br>
                            <nav aria-label="Page navigation">
                                <ul class="inline-flex items-center -space-x-px">
                                    <li>
                                        <a href="#" @click="prevPage"
                                            class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                            <span class="sr-only">Previous</span>
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li v-for="pages in state.page" :key="pages.name">
                                        <a href="#" @click="clickPage(pages.name)"
                                            :class="[isPageActive(pages.name), 'px-3', 'py-2', 'leading-tight', 'text-gray-500', 'bg-white', 'border', 'border-gray-300', 'hover:bg-gray-100', 'hover:text-gray-700', 'dark:bg-gray-800', 'dark:border-gray-700', 'dark:text-gray-400', 'dark:hover:bg-gray-700', 'dark:hover:text-white']"
                                            :disabled="pages.isDisabled">
                                            {{ pages.name }}</a>
                                    </li>

                                    <li>
                                        <a href="#" @click="nextPage"
                                            class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                            <span class="sr-only">Next</span>
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref, reactive, computed, watchEffect } from 'vue'
import http from "./../../http-common.js";

export default {
    name: 'pendaftar-index',
    components: {},

    setup() {
        const state = reactive({
            pendaftar: [],
            currentSort: 'nim',
            currentSortDir: 'asc',
            pageSize: 12,
            currentPage: 1,
            page: []
        })

        onMounted(() => {
            http
                .get('/pendaftar')
                .then((response) => {
                    state.pendaftar = response.data.data
                    console.log(state.pendaftar)

                })
        })

        watchEffect(() => {
            let pageCount = Math.ceil(state.pendaftar.length / state.pageSize)
            state.page = []
            for (let i = 1; i <= pageCount; i++) {
                state.page.push({
                    name: i,
                    isDisabled: i == state.currentPage
                })
            }
            console.log(state.page)
        })


        function sorting(s) {
            if (s === state.currentSort) {
                state.currentSortDir = state.currentSortDir === 'asc' ? 'desc' : 'asc'
            }
            state.currentSort = s
        }

        function nextPage() {
            if ((state.currentPage * state.pageSize) < state.pendaftar.length) state.currentPage++;
        }

        function prevPage() {
            if (state.currentPage > 1) state.currentPage--;
        }

        function clickPage(page) {
            state.currentPage = page;
        }

        function isPageActive(page) {
            if (state.currentPage === page) return "z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
        }

        const sortedData = computed(() => {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            return state.pendaftar.sort((a, b) => {
                let modifier = 1
                if (state.currentSortDir == 'desc') modifier = -1
                if (a[state.currentSort] < b[state.currentSort]) return -1 * modifier
                if (a[state.currentSort] > b[state.currentSort]) return 1 * modifier
                return 0
            }).filter((row, index) => {
                let start = (state.currentPage - 1) * state.pageSize;
                let end = state.currentPage * state.pageSize;
                if (index >= start && index < end) return true;
            });
        })


        return {
            state,
            sorting,
            sortedData,
            nextPage,
            prevPage,
            clickPage,
            isPageActive
        }
    },
}
</script>

<style>
</style>