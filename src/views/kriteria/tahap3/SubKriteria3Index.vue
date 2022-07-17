<template>
    <div class="flex-1 bg-white dark:bg-gray-800">
        <div class="col-6">
            <h1 class="px-6 py-6 text-3xl font-extrabold dark:text-gray-200">
                Data Sub-Kriteria Tahap 3
            </h1>
        </div>
        <div class="col-12">
            <div class="flex-1">
                <div class="overflow-y-auto sm:-mx-6 lg:-mx-0">
                    <div class="py-2 inline-clip sm:px-6 lg:px-4">
                        <div class="sm:rounded-lg">
                            <div class="col-12">
                                <router-link :to="{
                                    name: 'subkriteria3.tambah',
                                }" type="button"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    Tambah</router-link>
                            </div>
                            <table class="min-w-full shadow-md ">
                                <thead class="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Kode
                                        </th>

                                        <th scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Subkriteria
                                        </th>
                                        <th scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Kriteria
                                        </th>
                                        <th scope="col"
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

                                    <tr v-for="sk in state.listSubKriteria" :key="sk.id_sk3"
                                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-600">
                                        <td
                                            class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {{ sk.id_sk3 }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {{ sk.subkriteria }}
                                        </td>

                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {{ sk.kriteria }}
                                        </td>

                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {{ sk.bobot }}
                                        </td>
                                        <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <router-link :to="{
                                                name: 'subkriteria3.edit',
                                                params: {
                                                    id: sk.id_sk3,
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

<script setup>
import subKriteriaAPI from "./../../../api/listKriteria/tahap3/subkriteria3";
import { onMounted, reactive, watchEffect } from 'vue'

const state = reactive({
    subkriteria: [],
    listSubKriteria: []
})
onMounted(() => {
    subKriteriaAPI.index()
        .then((response) => {
            state.subkriteria = response.data.data
            console.log(state.subkriteria)
        }).catch((err) => {

        });
})

watchEffect(() => {
    for (let i = 0; i < state.subkriteria.length; i++) {
        const outer = state.subkriteria[i];
        if (outer.subkriteria) {
            for (let j = 0; j < outer.subkriteria.length; j++) {
                const inner = outer.subkriteria[j];
                const id_sk3 = `${inner.id_sk3}`
                const kriteria = `${outer.kriteria}`
                const subkriteria = `${inner.sub_kriteria}`
                const bobot = `${inner.bobot}`
                state.listSubKriteria.push({
                    id_sk3,
                    kriteria,
                    subkriteria,
                    bobot
                })
            }
        } else {
            state.listSubKriteria.push({
                id_sk3: outer.id_sk3,
                kriteria: outer.kriteria,
                subkriteria: outer.kriteria,
                bobot: outer.bobot_sk
            })
        }
    }
})

console.log(state.listSubKriteria)

</script>