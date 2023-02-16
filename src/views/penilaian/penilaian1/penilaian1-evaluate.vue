<template>
    <div class="flex-1 bg-white dark:bg-gray-800">
        <div class="col-6">
            <h1 class="px-6 py-6 text-3xl font-extrabold dark:text-gray-200">
                Evaluasi Peserta
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
                    Halaman ini berfungsi untuk menentukan kelulusan peserta yang diinginkan. Untuk menentukan
                    kelulusan, pilih salah satu opsi paling dibawah, setelah itu klik tombol <b>Submit</b>.
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
                            <form @submit.prevent="update()">

                                <div class="mb-6">
                                    <label for="nim"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">NIM</label>
                                    <input type="text" id="disabled-input-2"
                                        class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        disabled readonly v-model="outputPenilaian.nim" />
                                </div>
                                <div class="mb-6">
                                    <label for="nama"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama
                                        Peserta</label>
                                    <input type="text" id="disabled-input-2"
                                        class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        disabled readonly v-model="outputPenilaian.nama" />
                                </div>
                                <div v-for="(sk, index) in state.listSubKriteria" :key="index" class="mb-6">
                                    <label for="sk.k_sc"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{
                                            sk.kriteria
                                        }} </label>
                                    <input type="text" id="sk.k_sc"
                                        class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        disabled readonly v-model="outputPenilaian[sk.k_sc]" />
                                </div>
                                <div class="mb-6">
                                    <label for="lulus"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Kelulusan
                                        Peserta</label>
                                    <select id="lulus" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                                    required " v-model="inputLulus.lulus">
                                        <option value="0">TIDAK LULUS</option>
                                        <option value="1">LULUS</option>
                                    </select>
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
import { useRouter, useRoute } from 'vue-router'
import penilaianAPI from "./../../../api/listPeserta/tahap1/peserta";
import subkriteriaAPI from "./../../../api/listKriteria/tahap1/subkriteria1";

const state = reactive({
    subkriteria: [],
    peserta: [],
    listSubKriteria: []
})
let inputLulus = reactive({
    lulus: ''
})
let outputPenilaian = reactive({
})
watchEffect(() => {
    outputPenilaian['nim'] = "";
    outputPenilaian['nama'] = "";
    for (let i = 0; i < state.subkriteria.length; i++) {
        const outer = state.subkriteria[i];
        if (outer.subkriteria) {
            for (let j = 0; j < outer.subkriteria.length; j++) {
                const inner = outer.subkriteria[j];
                const key = `${outer.k_sc}-${inner.sk_sc}`;
                outputPenilaian[key] = "";
            }
        } else {
            outputPenilaian[outer.k_sc] = "";
        }
    }
    //transpose dari table sub-kriteria menjadi list untuk perulangan (baik untuk input maupun v-model)
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
const route = useRoute()
onMounted(() => {
    subkriteriaAPI.index()
        .then((response) => {
            state.subkriteria = response.data.data
        })
    penilaianAPI.show(route.params.id)
        .then((response) => {
            outputPenilaian.nim = response.data.data.nim
            outputPenilaian.nama = response.data.data.nama
            for (let i = 0; i < state.subkriteria.length; i++) {
                const outer = state.subkriteria[i];
                if (outer.subkriteria) {
                    for (let j = 0; j < outer.subkriteria.length; j++) {
                        const inner = outer.subkriteria[j];
                        let props1 = `${outer.k_sc}-${inner.sk_sc}`;
                        outputPenilaian[props1] = `${response.data.data.nilai[outer.k_sc][inner.sk_sc]}`
                    }
                } else {
                    let props2 = `${outer.k_sc}`;
                    outputPenilaian[props2] = `${response.data.data.nilai[props2]}`
                }
            }
            state.peserta = response.data.data
            inputLulus.lulus = response.data.data.lulus
        })
})

const validation = ref([]);
const router = useRouter();
function update() {
    penilaianAPI.lulus(route.params.id, inputLulus)
        .then(() => {
            router.push({
                name: 'penilaian1.calculate'
            })
        }).catch((err) => {
            validation.value = err.response.data
        });
}
</script>