<template>
    <div class="flex-1 bg-white dark:bg-gray-800">
        <div class="col-6">
            <h1 class="px-6 py-6 text-3xl font-extrabold dark:text-gray-200">
                Data Peserta Tahap 2
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
                    Halaman ini berfungsi untuk melihat peserta yang mengikuti kegiatan Open Recruitment Tahap 1, untuk
                    melakukan penilaian maka silahkan klik tombol <b>Import Data</b> di bawah untuk mengimpor data
                    pendaftar yang sudah mendaftar ulang. Untuk melihat detail peserta, klik <b>Lihat</b> di samping
                    peserta yang diinginkan.
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
                        <div class="col-12">
                            <button @click="getData"
                                class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                <span
                                    class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Import Data
                                </span>
                            </button>
                        </div>
                        <div class="sm:rounded-lg ">
                            <table class="min-w-full shadow-md">
                                <thead class="bg-gray-100 dark:bg-gray-700">
                                    <colgroup span="3"></colgroup>
                                    <tr>
                                        <th @click="sorting('nim')" rowspan="2" scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                            NIM
                                        </th>
                                        <th @click="sorting('nama')" rowspan="2" scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                            Nama
                                        </th>
                                        <th @click="sorting('detail.gender', true)" rowspan="2" scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                            Gender
                                        </th>
                                        <th @click="sorting('detail.tanggal_lahir', true)" rowspan="2" scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                            Tanggal Lahir
                                        </th>
                                        <th @click="sorting('detail.fakultas', true)" rowspan="2" scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                            Fakultas
                                        </th>
                                        <th @click="sorting('detail.jurusan', true)" rowspan="2" scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                            Jurusan
                                        </th>
                                        <th rowspan="2" scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="peserta1 in sortedData" :key="peserta1.nim"
                                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-600">
                                        <td
                                            class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {{ peserta1.nim }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {{ peserta1.nama }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {{ peserta1.detail.gender }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {{ peserta1.detail.tanggal_lahir }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {{ peserta1.detail.fakultas }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {{ peserta1.detail.jurusan }}
                                        </td>
                                        <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <router-link :to="{
                                                name: 'penilaian2.view',
                                                params: {
                                                    id: peserta1.nim,
                                                },
                                            }"
                                                class="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline">
                                                Lihat</router-link>
                                        </td>

                                        <!-- <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <router-link :to="{
                                                name: 'penilaian1.view',
                                                params: {
                                                    id: peserta1.nim,
                                                },
                                            }"
                                                class="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline">
                                                Tambah</router-link>
                                        </td> -->
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

<script setup>
import { onMounted, reactive, computed, ref, watchEffect } from 'vue'
import penilaianAPI from "./../../../api/listPeserta/tahap2/peserta";

const state = reactive({
    peserta1: [],
    currentSort: 'nim',
    currentSortDir: 'asc',
    listSubKriteria: [],
    currentSortNested: [],
    nested: false,
    currentSort: 'nim',
    currentSortDir: 'asc',
    pageSize: 12,
    currentPage: 1,
    page: []
})

onMounted(() => {
    penilaianAPI.index()
        .then((response) => {
            state.peserta1 = response.data.data
        }).catch((err) => {
            console.log(err.response.data)
        });
})
watchEffect(() => {
    let pageCount = Math.ceil(state.peserta1.length / state.pageSize)
    state.page = []
    for (let i = 1; i <= pageCount; i++) {
        state.page.push({
            name: i,
            isDisabled: i == state.currentPage
        })
    }
    console.log(state.page)
})

function sorting(s, nested = false) {
    if (s === state.currentSort) {
        state.currentSortDir = state.currentSortDir === 'asc' ? 'desc' : 'asc'
    }
    state.nested = nested
    state.currentSort = s
    if (state.nested) {
        state.currentSortNested = s.split('.')
    } else {
        state.currentSort = s
    }
}

function nextPage() {
    if ((state.currentPage * state.pageSize) < state.peserta1.length) state.currentPage++;
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
    return state.peserta1.sort((a, b) => {
        let modifier = 1
        if (state.currentSortDir == 'desc') modifier = -1
        if (!state.nested || state.currentSortNested.length == 1) {
            if (a[state.currentSort] < b[state.currentSort]) return -1 * modifier
            if (a[state.currentSort] > b[state.currentSort]) return 1 * modifier
            return 0
        } else if (state.currentSortNested.length == 2) {
            if (a[state.currentSortNested[0]][state.currentSortNested[1]]
                < b[state.currentSortNested[0]][state.currentSortNested[1]]) return -1 * modifier
            if (a[state.currentSortNested[0]][state.currentSortNested[1]]
                > b[state.currentSortNested[0]][state.currentSortNested[1]]) return 1 * modifier
            return 0
        }
    }).filter((row, index) => {
        let start = (state.currentPage - 1) * state.pageSize;
        let end = state.currentPage * state.pageSize;
        if (index >= start && index < end) return true;
    });
})
const validation = ref([]);
function getData() {
    penilaianAPI.import()
        .then(() => {
            window.location.reload();
        }).catch((err) => {
            validation.value = err.response.data
        });
}
</script>

<style>
</style>