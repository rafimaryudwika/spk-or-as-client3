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
                                    <input type="nim" id="disabled-input-2"
                                        class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        disabled readonly v-model="inputPenilaian.nim" />
                                </div>
                                <div v-for="(sk, index) in state.listSubKriteria" :key="index" class="mb-6">
                                    <label for="sk.k_sc"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{
                                                sk.kriteria
                                        }} </label>
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
        let inputPenilaian = reactive({})
        watchEffect(() => {
            //transpose dari table sub-kriteria menjadi object untuk input data
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
            http.get('/subkriteria1')
                .then((response) => {
                    state.subkriteria = response.data.data
                })
            http.get(`/penilaian1/show/${route.params.id}`)
                .then((response) => {
                    inputPenilaian.nim = response.data.data[0].nim
                    for (let i = 0; i < state.subkriteria.length; i++) {
                        const outer = state.subkriteria[i];
                        if (outer.subkriteria) {
                            for (let j = 0; j < outer.subkriteria.length; j++) {
                                const inner = outer.subkriteria[j];
                                let props1 = `${outer.k_sc}-${inner.sk_sc}`;
                                inputPenilaian[props1] = `${response.data.data[0].nilai[outer.k_sc][inner.sk_sc]}`
                            }
                        } else {
                            let props2 = `${outer.k_sc}`;
                            inputPenilaian[props2] = `${response.data.data[0].nilai[props2]}`
                        }
                    }
                })
        })

        const validation = ref([]);
        const router = useRouter();
        function update() {
            http.put(`/penilaian1/${route.params.id}`, inputPenilaian)
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
            update
        }
    },
}
</script>