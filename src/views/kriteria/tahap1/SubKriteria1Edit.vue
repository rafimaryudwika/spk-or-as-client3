<template>
    <div class="flex-1 bg-white dark:bg-gray-800">
        <div class="col-6">
            <h1 class="px-6 py-6 text-3xl font-extrabold dark:text-gray-200">
                Edit Data Sub-Kriteria
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
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kriteria</label>
                                    <input type="nim" id="disabled-input-2"
                                        class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        disabled readonly v-model="outputSubKriteria.kriteria" />
                                </div>
                                <div class="mb-6">
                                    <label for="nama"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama
                                        Sub-Kriteria</label>
                                    <input type="text" id="nama"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required v-model="inputSubKriteria.sub_kriteria" />
                                </div>
                                <div class="mb-6">
                                    <label for="kode"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kode
                                        Sub-Kriteria</label>
                                    <input type="text" id="kode"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required v-model="inputSubKriteria.kode" />
                                </div>
                                <div class="mb-6">
                                    <label for="bobot"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bobot
                                        Kriteria</label>
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
import subKriteriaAPI from "./../../../api/listKriteria/tahap1/subkriteria1";
import { useRouter, useRoute } from 'vue-router'

const state = reactive({
    kriteria: [],
})
let inputSubKriteria = reactive({
    sub_kriteria: '',
    kode: '',
    bobot: ''
})
let outputSubKriteria = reactive({
    kriteria: '',
})

const route = useRoute()
onMounted(() => {
    subKriteriaAPI.show(route.params.id)
        .then((response) => {
            state.kriteria = response.data.data
            console.log(state.kriteria)
            inputSubKriteria.sub_kriteria = response.data.data.sub_kriteria
            inputSubKriteria.kode = response.data.data.kode
            inputSubKriteria.bobot = response.data.data.bobot
            outputSubKriteria.kriteria = response.data.data.kriteria_tahap1.kriteria
        }).catch((err) => {

        });
})

const validation = ref([]);
const router = useRouter();
function update() {
    subKriteria1API.update(route.params.id, inputSubKriteria)
        .then(() => {
            router.push({
                name: 'subkriteria1.index'
            })
        }).catch((err) => {
            validation.value = err.response.data
        });
}

</script>