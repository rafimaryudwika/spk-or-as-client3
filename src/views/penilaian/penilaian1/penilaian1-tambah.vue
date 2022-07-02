<template>
    <div class="flex-1">
        <div class="col-12">
            <h1 class="px-6 py-6 mb-6 text-3xl font-extrabold">
                Data Penilaian
            </h1>
        </div>
        <div class="col-12">
            <div class="flex-1">
                <div class="overflow-y-auto sm:-mx-6 lg:-mx-0">
                    <div class="py-2 inline-clip sm:px-6 lg:px-4">
                        <div class="sm:rounded-lg">
                            <form @submit.prevent="store()">
                                <div class="mb-6">
                                    <label for="nim"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">NIM</label>
                                    <input type="nim" id="disabled-input-2"
                                        class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        disabled readonly v-model="inputPenilaian.nim" />
                                </div>
                                <div v-for="(sk, index) in state.listSubKriteria" :key="index" class="mb-6">
                                    <label for="sk.k_sc"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{
                                        sk.kriteria
                                        }}</label>
                                    <input type="text" id="sk.k_sc"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required v-model="inputPenilaian[sk.k_sc]" />
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

export default {
    components: {},
    setup() {
        const state = reactive({
            subkriteria: [],
            peserta: [],
            listSubKriteria: []
        })

        const route = useRoute()
        onMounted(() => {
            http.get(`/penilaian1/show2/${route.params.id}`)
                .then((response) => {
                    inputPenilaian.nim = response.data.data[0].nim
                    state.peserta = response.data.data[0]
                    // console.log(state.peserta)
                })
            http.get('/subkriteria1')
                .then((response) => {
                    state.subkriteria = response.data.data
                    // console.log(state.subkriteria)
                })
        })

        let inputPenilaian = reactive({})
        watchEffect(() => {
            inputPenilaian['nim'] = "";
            for (let i = 0; i < state.subkriteria.length; i++) {
                const outer = state.subkriteria[i];
                if (outer.subkriteria) {
                    for (let j = 0; j < outer.subkriteria.length; j++) {
                        const inner = outer.subkriteria[j];
                        const key = `${outer.k_sc}-${inner.sk_sc}`;
                        inputPenilaian[key] = "";
                    }
                } else {
                    inputPenilaian[outer.k_sc] = "";
                }
            }

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
        // console.log(state.listSubKriteria)
        // console.log(inputPenilaian)
        const validation = ref([]);
        const router = useRouter();
        function store() {
            http.post('/penilaian1', inputPenilaian)
                .then(() => {
                    router.push({
                        name: 'penilaian1.index'
                    })
                }).catch((err) => {
                    validation.value = err.response.data
                });
        }
        return {
            state,
            inputPenilaian,
            validation,
            router,
            store
        }
    },
}
</script>
