<template>
    <div class="flex-1 bg-white dark:bg-gray-800">
        <div class="col-6">
            <h1 class="px-6 py-6 text-3xl font-extrabold dark:text-gray-200">
                Data Penilaian
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
                    Halaman ini berfungsi untuk melihat dan menginput data penilaian masing-masing peserta Open
                    Recruitment, tabel ini beradaptasi secara dinamis sesuai dengan sub-kriteria dan
                    kriteria yang sudah ditentukan.<br>Jika
                    peserta Open Recruitment belum memiliki penilaian maka silakan klik tombol <span
                        class="font-bold">Tambah</span> untuk menginputkan penilaian, jika penilaian sudah ada maka bisa
                    klik tombol <span class="font-bold">Edit</span> untuk mengubah penilaian.
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
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Nama
                                        </th>
                                        <template v-for="sub in state.subkriteria" :key="sub.id_sk1">
                                            <th v-if="sub.subkriteria" :colspan="sub.subkriteria.length" scope="col"
                                                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                {{ sub.kriteria }}
                                            </th>
                                            <th v-else rowspan="2" scope="col"
                                                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                {{ sub.kriteria }}
                                            </th>
                                        </template>
                                        <th colspan="2" rowspan="2" scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Aksi
                                        </th>
                                    </tr>
                                    <tr>
                                        <template v-for="subk in state.subkriteria" :key="subk.id_k1">
                                            <template v-for="subkk in subk.subkriteria" :key="subkk.id_sk1">
                                                <th scope="col"
                                                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    {{ subkk.sub_kriteria }}
                                                </th>
                                            </template>
                                        </template>
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
                                        <template v-if="peserta1.nilai == 'nodata'">
                                            <td v-for="subkrit in state.listSubKriteria" :key="subkrit.kriteria"
                                                class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                Tidak ada data
                                            </td>
                                        </template>
                                        <template v-else>
                                            <template v-for="k in state.subkriteria" :key="k.id_k1">
                                                <template v-if="k.subkriteria">
                                                    <td v-for="subk in k.subkriteria" :key="subk.id_sk1"
                                                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                        {{ peserta1.nilai[k.k_sc][subk.sk_sc] }}
                                                    </td>
                                                </template>
                                                <template v-else>
                                                    <td
                                                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                        {{ peserta1.nilai[k.k_sc] }}
                                                    </td>
                                                </template>
                                            </template>
                                        </template>

                                        <td v-for="k in state.subkriteria.slice(0, 1)" :key="k.id_k1"
                                            class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <template v-if="
                                                peserta1.nilai[k.k_sc] == null
                                            ">
                                                <router-link :to="{
                                                    name: 'penilaian1.tambah',
                                                    params: {
                                                        id: peserta1.nim,
                                                    },
                                                }"
                                                    class="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline">
                                                    Tambah</router-link>
                                            </template>
                                            <template v-else>
                                                <router-link :to="{
                                                    name: 'penilaian1.edit',
                                                    params: {
                                                        id: peserta1.nim,
                                                    },
                                                }"
                                                    class="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline">
                                                    Edit</router-link>
                                            </template>
                                        </td>
                                        <td>
                                            <!-- <router-link :to="{
                                                    name: 'penilaian1.show',
                                                    params: {
                                                        id: peserta1.nim,
                                                    },
                                                }"
                                                    class="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline">
                                                    Lihat</router-link> -->
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

<script async setup>
import { onMounted, ref, reactive, computed, watchEffect } from 'vue'
import penilaianAPI from "./../../../api/listPeserta/tahap1/peserta";
import kriteriaAPI from "./../../../api/listKriteria/tahap1/kriteria1";
import subKriteriaAPI from "./../../../api/listKriteria/tahap1/subkriteria1";

const state = reactive({
    peserta1: [],
    penilaian1: [],
    subkriteria: [],
    kriteria: [],
    currentSort: 'nim',
    currentSortDir: 'asc',
    listSubKriteria: []
})

onMounted(async () => {
    await subKriteriaAPI.index()
        .then((response) => {
            state.subkriteria = response.data.data
        }).catch((err) => {
            console.log(err.response.data)
        });
    await kriteriaAPI.index()
        .then((response) => {
            state.kriteria = response.data.data
        }).catch((err) => {
            console.log(err.response.data)
        });
    await penilaianAPI.index()
        .then((response) => {
            state.peserta1 = response.data.data
        }).catch((err) => {
            console.log(err.response.data)
        });
})

watchEffect(() => {
    for (let i = 0; i < state.subkriteria.length; i++) {
        const outer = state.subkriteria[i];
        if (outer.subkriteria) {
            for (let j = 0; j < outer.subkriteria.length; j++) {
                const inner = outer.subkriteria[j];
                const kriteria = `${outer.kriteria} / ${inner.sub_kriteria}`
                const k_sc = `${outer.k_sc}-${inner.sk_sc}`;
                state.listSubKriteria.push({
                    kriteria,
                    k_sc,
                })
            }
        } else {
            state.listSubKriteria.push({
                kriteria: outer.kriteria,
                k_sc: outer.k_sc,
            })
        }
    }
})

function sorting(s) {
    if (s === state.currentSort) {
        state.currentSortDir = state.currentSortDir === 'asc' ? 'desc' : 'asc'
    }
    state.currentSort = s
}

const sortedData = computed(() => {
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    return state.peserta1.sort((a, b) => {
        let modifier = 1
        if (state.currentSortDir == 'desc') modifier = -1
        if (a[state.currentSort] < b[state.currentSort]) return -1 * modifier
        if (a[state.currentSort] > b[state.currentSort]) return 1 * modifier
        return 0
    })
})
</script>

<style>
</style>