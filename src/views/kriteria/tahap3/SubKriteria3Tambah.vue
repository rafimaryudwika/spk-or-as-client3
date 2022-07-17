<template>
    <div class="flex-1 bg-white dark:bg-gray-800">
        <div class="col-6">
            <h1 class="px-6 py-6 text-3xl font-extrabold dark:text-gray-200">
                Tambah Sub-Kriteria
            </h1>
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
                                    required " v-model="inputSubKriteria.id_k3">
                                        <option v-for="krit in state.kriteria" :key="krit.id_k2" :value="krit.id_k2">{{
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
import kriteria2API from "./../../../api/listKriteria/tahap2/kriteria2";
import subKriteriaAPI from "./../../../api/listKriteria/tahap3/subkriteria3";
import { useRouter, useRoute } from 'vue-router'

const state = reactive({
    kriteria: [],
})
let inputSubKriteria = reactive({
    id_k3: '',
    sub_kriteria: '',
    kode: '',
    bobot: ''
})
onMounted(() => {
    kriteria2API.index()
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
                name: 'subkriteria3.index'
            })
        }).catch((err) => {
            validation.value = err.response.data
        });
}
</script>