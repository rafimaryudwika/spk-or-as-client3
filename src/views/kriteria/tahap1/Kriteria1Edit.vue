<template>
    <div class="flex-1">
        <div class="col-12">
            <h1 class="px-6 py-6 mb-6 text-3xl font-extrabold">
                Edit Data Kriteria
            </h1>
        </div>
        <div class="col-12">
            <div class="flex-1">
                <div class="overflow-y-auto sm:-mx-6 lg:-mx-0">
                    <div class="py-2 inline-clip sm:px-6 lg:px-4">
                        <div class="sm:rounded-lg">
                            <form @submit.prevent="update()">
                                <div class="mb-6">
                                    <label for="nama"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama Kriteria</label>
                                    <input type="text" id="nama"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required v-model="inputKriteria.kriteria" />
                                </div>
                                <div class="mb-6">
                                    <label for="bobot"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bobot Kriteria</label>
                                    <input type="text" id="bobot"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required v-model="inputKriteria.bobot" />
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
import kriteria1API from "./../../../api/listKriteria/tahap1/kriteria1";
import { useRouter, useRoute } from 'vue-router'

export default {
    components: {},
    setup() {
        const state = reactive({
            kriteria: [],
        })
        let inputKriteria = reactive({
            kriteria: '',
            bobot: ''
        })

        const route = useRoute()
        onMounted(() => {
            kriteria1API.show(route.params.id)
            .then((response) => {
                state.kriteria = response.data.data
                inputKriteria.id_k1 = response.data.data[0].id_k1
                    inputKriteria.kriteria = response.data.data[0].kriteria
                    inputKriteria.bobot = response.data.data[0].bobot
                console.log(state.kriteria)
            }).catch((err) => {
                
            });
        })

        const validation = ref([]);
        const router = useRouter();
        function update() {
            kriteria1API.update(route.params.id, inputKriteria)
                .then(() => {
                    router.push({
                        name: 'kriteria1.index'
                    })
                }).catch((err) => {
                    validation.value = err.response.data
                });
        }
        return {
            state,
            inputKriteria,
            validation,
            router,
            update
        }
    },
}
</script>