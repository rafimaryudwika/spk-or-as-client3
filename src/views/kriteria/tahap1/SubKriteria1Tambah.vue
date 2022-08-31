<template>
    <div class="flex-1 bg-white dark:bg-gray-800">
        <div class="col-6">
            <h1 class="px-6 py-6 text-3xl font-extrabold dark:text-gray-200">
                Tambah Sub-Kriteria
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
                    Halaman ini berfungsi untuk menambah sub-kriteria dengan mengisi informasi yang dibutuhkan.<br>
                    Pilih Kriteria yang diinginkan, lalu masukan Nama Sub-Kriteria yang diinginkan, setelah itu isi Kode
                    Sub-Kriteria dengan mengisi singkatan dari sub-kriteria
                    tersebut, terakhir masukan Bobot Kriteria tersebut. Jika sudah selesai, klik tombol
                    <b>Submit</b>.<br>
                    Kode Sub-Kriteria berfungsi untuk mengidentifikasi sub-kriteria tersebut pada tabel kalkulasi supaya
                    tidak memakan banyak ruang.
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
                            <form @submit.prevent="store()">
                                <div class="mb-6">
                                    <label for="kriteria"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama
                                        Kriteria</label>
                                    <select id="kriteria" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                                    required " v-model="inputSubKriteria.id_k1">
                                        <option v-for="krit in state.kriteria" :key="krit.id_k1" :value="krit.id_k1">{{
                                                krit.kriteria
                                        }}</option>
                                    </select>
                                </div>
                                <div class="mb-6">
                                    <label for="subkriteria"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama
                                        Sub-kriteria</label>
                                    <input type="text" id="subkriteria"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required v-model="inputSubKriteria.sub_kriteria" />
                                </div>
                                <div class="mb-6">
                                    <label for="kode"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kode</label>
                                    <input type="text" id="subkriteria"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required v-model="inputSubKriteria.kode" />
                                </div>
                                <div class="mb-6">
                                    <label for="bobot"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bobot
                                        Sub-Kriteria</label>
                                    <input type="text" id="bobot"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required v-model="inputSubKriteria.bobot" />
                                </div>
                                <button type="submit"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref, watchEffect, computed } from 'vue'
import kriteriaAPI from "./../../../api/listKriteria/tahap1/kriteria1";
import subKriteriaAPI from "./../../../api/listKriteria/tahap1/subkriteria1";
import { useRouter, useRoute } from 'vue-router'

const state = reactive({
    kriteria: [],
})
let inputSubKriteria = reactive({
    id_k1: '',
    sub_kriteria: '',
    kode: '',
    bobot: ''
})
onMounted(() => {
    kriteriaAPI.index()
        .then((response) => {
            state.kriteria = response.data.data
            console.log(state.kriteria)
        }).catch((err) => {

        });
})

const validation = ref([]);
const router = useRouter();
function store() {
    subKriteriaAPI.create(inputSubKriteria)
        .then(() => {
            router.push({
                name: 'subkriteria1.index'
            })
        }).catch((err) => {
            validation.value = err.response.data
        });
}
</script>