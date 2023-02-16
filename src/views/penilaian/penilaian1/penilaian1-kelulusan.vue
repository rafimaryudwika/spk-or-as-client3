<template>
    <div class="flex-1 bg-white dark:bg-gray-800">
        <div class="col-6">
            <h1 class="px-6 py-6 text-3xl font-extrabold dark:text-gray-200">
                Data Kelulusan Peserta Tahap 1
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
                    Halaman ini berfungsi untuk melihat peserta yang lulus di tahapan tersebut.
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
                                    <colgroup span="5"></colgroup>
                                    <tr>
                                        <th rowspan="3" scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            NIM
                                        </th>
                                        <th rowspan="3" scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Nama
                                        </th>
                                        <th rowspan="3" scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Lulus
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="peserta1 in filteredKelulusan" :key="peserta1.nim"
                                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-600">
                                        <td
                                            class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {{ peserta1.nim }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {{ peserta1.nama }}
                                        </td>
                                        <td v-if="peserta1.lulus == 1"
                                            class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
                                            LULUS
                                        </td>
                                        <td v-else
                                            class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
                                            BELUM LULUS
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

<script setup>
import { onMounted, ref, reactive, computed, watchEffect } from 'vue'
import penilaian1API from "./../../../api/listPeserta/tahap1/peserta";

const state = reactive({
    peserta1: [],
    penilaian1: [],
})

onMounted(() => {
    penilaian1API.index()
        .then((response) => {
            state.peserta1 = response.data.data.penilaian
        }).catch((err) => {
            console.log(err.response.data)
        });
})

const filteredKelulusan = computed(() => {
    return state.peserta1.filter((e) => {
        return e.lulus == 1;
    }).sort((a, b) => {
        return a.total - b.total;
    })
})

</script>