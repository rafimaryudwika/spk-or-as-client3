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
                            <form>
                                <template v-for="peserta1 in state.peserta1" :key="peserta1.nim">
                                    <div class="mb-6">
                                        <input type="text" id="disabled-input-2"
                                            class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            value="Disabled readonly input" disabled readonly />
                                    </div>
                                    <div class="mb-6">
                                        <label for="email"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                                            email</label>
                                        <input type="email" id="email"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="name@flowbite.com" required />
                                    </div>
                                    <div class="mb-6">
                                        <label for="password"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                                            password</label>
                                        <input type="password" id="password"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required />
                                    </div>
                                    <button type="submit"
                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Submit
                                    </button>
                                </template>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import http from './../../../http-common.js'

export default {
    components: {},
    setup() {
        const state = reactive({
            peserta1: [],
        })

        onMounted(() => {
            http.get('/penilaian1').then((response) => {
                state.peserta1 = response.data.data
            })
        })
        return {

        }
    },
}
</script>
