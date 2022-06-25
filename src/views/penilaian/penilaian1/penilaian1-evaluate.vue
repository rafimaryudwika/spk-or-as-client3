<template>
    <div class="flex-1">
        <div class="col-12">
            <h1 class="px-6 py-6 mb-6 text-3xl font-extrabold">
                Edit Data Penilaian Peserta
            </h1>
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
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama Peserta</label>
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
                                        disabled readonly v-model="outputPenilaian[sk.k_sc]"/>
                                </div>
                                <div class="mb-6">
                                <label for="lulus"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Kelulusan Peserta</label>
                                <select id="lulus"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
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

<script>
import { onMounted, reactive, ref, watchEffect, computed } from 'vue'
import http from './../../../http-common.js'
import { useRouter, useRoute } from 'vue-router'
import penilaian1API from "./../../../api/listPeserta/tahap1/peserta";


export default {
    components: {},
    setup() {
        const state = reactive({
            subkriteria: [],
            peserta: [],
            listSubKriteria: []
        })
        let inputLulus = reactive({
            lulus:  ''
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
            console.log(state.listSubKriteria)
        })
        console.log(outputPenilaian)

        const route = useRoute()
        onMounted(() => {
            http.get('/subkriteria1')
                .then((response) => {
                    state.subkriteria = response.data.data
                    
                })
            http.get(`/penilaian1/show/${route.params.id}`)
                .then((response) => {
                     
                     outputPenilaian.nim = response.data.data[0].nim
                     outputPenilaian.nama = response.data.data[0].nama
                    for (let i = 0; i < state.subkriteria.length; i++) {
                        const outer = state.subkriteria[i];
                        if (outer.subkriteria) {
                            for (let j = 0; j < outer.subkriteria.length; j++) {
                                const inner = outer.subkriteria[j];
                                let props1 = `${outer.k_sc}-${inner.sk_sc}`;
                                outputPenilaian[props1] = `${response.data.data[0].nilai[outer.k_sc][inner.sk_sc]}`
                            }
                        } else {
                            let props2 = `${outer.k_sc}`;
                            outputPenilaian[props2] = `${response.data.data[0].nilai[props2]}`
                        }
                    }     
                    state.peserta = response.data.data
                    inputLulus.lulus = response.data.data.lulus              
                })
        })

        const validation = ref([]);
        const router = useRouter();
        function update() {
            penilaian1API.lulus(route.params.id, inputLulus)
                .then(() => {
                    router.push({
                        name: 'penilaian1.calculate'
                    })
                }).catch((err) => {
                    validation.value = err.response.data
                });
        }
        return {
            state,
            inputLulus,
            outputPenilaian,
            validation,
            router,
            update
        }
    },
}
</script>