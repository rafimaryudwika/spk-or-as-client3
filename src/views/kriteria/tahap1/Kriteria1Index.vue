<template>
    <div class="flex-1">
        <div class="col-6">
            <h1 class="px-6 py-6 text-3xl font-extrabold">
                Data Kriteria Tahap 1
            </h1>
        </div>
        <div class="col-12">
            <div class="flex-1">
                <div class="overflow-y-auto sm:-mx-6 lg:-mx-0">
                    <div class="py-2 inline-clip sm:px-6 lg:px-4">
                        <div class="sm:rounded-lg">


                            <table class="min-w-full shadow-md ">
                                <thead class="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Kode
                                        </th>
                                        <th  scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Nama
                                        </th>
                                        <th  scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Bobot
                                        </th>
                                        <th scope="col" class="relative px-6 py-3">
                                            <span class="sr-only">Aksi</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- Product 1 -->
                                    <tr v-for="kriteria in state.kriteria" :key="kriteria.id_k1"
                                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-600">
                                        <td
                                            class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {{ kriteria.id_k1 }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {{ kriteria.kriteria }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {{ kriteria.bobot }}
                                        </td>
                                        <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <router-link :to="{
                                                name: 'kriteria1.edit',
                                                params: {
                                                    id: kriteria.id_k1,
                                                },
                                            }"
                                                class="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline">
                                                Edit</router-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import kriteria1API from "./../../../api/listKriteria/tahap1/kriteria1";
import { onMounted, reactive } from 'vue'
export default {
    components: {},

    setup() {
        const state = reactive({
            kriteria: []
        })
        onMounted(() => {
            kriteria1API.index()
            .then((response) => {
                state.kriteria = response.data.data
                console.log(state.kriteria)
            }).catch((err) => {
                
            });
        })
    return {
        state
    }
    }
}
</script>