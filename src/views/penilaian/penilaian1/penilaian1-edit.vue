<template>
    <div class="flex-1">
        <div class="col-12">
            <h1 class="px-6 py-6 mb-6 text-3xl font-extrabold">
                Edit Data Nilai Peserta
            </h1>
        </div>
        <div class="col-12">
            <div class="flex-1">
                <div class="overflow-y-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-clip sm:px-6 lg:px-12">
                        <div class="overflow-hidden shadow-md sm:rounded-lg">
                            <form class="space-y-6" v-on:submit.prevent="update()">
                                <div class="space-y-4 rounded-md shadow-sm">
                                    <div>
                                        <label for="name" class="block text-sm font-medium text-gray-700 ">NIM</label>
                                        <div class="mt-1">
                                            <input type="text" name="name" id="name"
                                                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                v-model="penilaian1.nim" />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="email" class="block text-sm font-medium text-gray-700 ">Nama</label>
                                        <div class="mt-1">
                                            <input type="text" name="email" id="email"
                                                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                v-model="penilaian1.nim" />
                                        </div>
                                    </div>


                                </div>

                                <button type="submit"
                                    class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md ring-gray-300 hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25">
                                    Save
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
import { ref, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import http from "./../../../http-common.js";
export default {
    setup() {
        let penilaian1Form = reactive({
            nim: '',
            id_sk1: '',
            nilai: '',
        })

        const state = reactive({
            peserta1: [],
            penilaian1: [],
            subkriteria: [],
        })

        onMounted(() => {
            http
                .get('/penilaian1')
                .then((response) => {
                    state.peserta1 = response.data.data
                })
        })

        const validation = ref([])

        const router = useRouter()

        const route = useRoute()

        onMounted(() => {
            http
                .get('/penilaian1/${route.params.nim}')
                .then((result) => { })
                .catch((err) => { })
        })

        function update() {
            http
                .put(
                    '/penilaian1/${route.params.nim}',
                    penilaian1
                )
                .then(() => {
                    router
                        .push({
                            name: 'penilaian1.index',
                        })
                        .catch((err) => {
                            validation.value = err.response.data
                        })
                })
        }
        return {
            penilaian1Form,
            validation,
            router,
            update
        }
    },
}
</script>

<style>
</style>