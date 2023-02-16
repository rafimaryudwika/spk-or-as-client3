<template>
    <div class="flex-1 bg-white dark:bg-gray-800">
        <div class="col-6">
            <h1 class="px-6 py-6 text-3xl font-extrabold dark:text-gray-200">
                Data Pendaftar
            </h1>
        </div>
        <div class="p-2">
            <div id="alert-5" class="flex p-4 bg-gray-100 rounded-lg dark:bg-gray-700" role="alert">
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-700 dark:text-gray-300"
                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"></path>
                </svg>
                <span class="sr-only">Info</span>
                <div class="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Halaman ini berfungsi untuk melihat pendaftar yang telah mendaftar di Open Recruitment, untuk
                    melihat detail pendaftar silahkan klik tombol <b>Lihat</b> pada pendaftar yang diinginkan.
                </div>
                <button type="button"
                    class="ml-auto -mx-1.5 -my-1.5 bg-gray-100 text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 p-1.5 hover:bg-gray-200 inline-flex h-8 w-8 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    data-dismiss-target="#alert-5" aria-label="Close">
                    <span class="sr-only">Dismiss</span>
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
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
                                            {{ pendaftar.gender.gender }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {{ pendaftar.tgl_lahir }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {{ pendaftar.fakultas.fakultas }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {{ pendaftar.jurusan.jurusan }}
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
                            <Pagination :table="state.pendaftar" :pageSize="12" :currentPage="1"
                                @pageChanged="onPageChange" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, reactive, computed, watchEffect } from 'vue'
import pendaftar from "./../../api/pendaftar"
import Pagination from "./../../components/PaginationData.vue"

const state = reactive({
    pendaftar: [],
    currentSort: 'nim',
    currentSortDir: 'asc',
    pageSize: 12,
    currentPage: 1,
    page: []
})

onMounted(() => {
    pendaftar.index()
        .then((response) => {
            state.pendaftar = response.data.data
        })
})

function sorting(s) {
    if (s === state.currentSort) {
        state.currentSortDir = state.currentSortDir === 'asc' ? 'desc' : 'asc'
    }
    state.currentSort = s
}

function onPageChange(page) {
    console.log(page)
    state.currentPage = page;
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

const pagesComputed = computed(() => {
    let pageCount = Math.ceil(state.pendaftar.length / state.pageSize)
    const page = []
    for (let i = 1; i <= pageCount; i++) {
        page.push({
            name: i,
            isDisabled: i == state.currentPage
        })
    }
    return page;
})
</script>