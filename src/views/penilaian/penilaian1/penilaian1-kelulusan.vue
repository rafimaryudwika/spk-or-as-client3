<template>
    <div class="flex-1">
        <div class="col-12">
            <h1 class="px-6 py-6 mb-6 text-3xl font-extrabold">
                Data Kelulusan Peserta Tahap 1
            </h1>
        </div>
        <div class="col-12">
            <div class="flex-1">
                <div class="overflow-y-auto sm:-mx-6 lg:-mx-0">
                    <div class="py-2 inline-clip sm:px-6 lg:px-4">
                        <div class="sm:rounded-lg ">
                            <table class="min-w-full shadow-md">
                                <thead class="bg-gray-100 dark:bg-gray-700">
                                    <colgroup span="5"></colgroup>
                                    <tr>
                                        <th rowspan="3" scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            NIM
                                        </th>
                                        <th rowspan="3" scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Nama
                                        </th>
                                        <th rowspan="3" scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Lulus
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="peserta1 in filteredKelulusan" :key="peserta1.nim"
                                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-600">
                                        <td
                                            class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {{ peserta1.nim }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {{ peserta1.nama }}
                                        </td>
                                        <td v-if="peserta1.lulus == 1"
                                            class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
                                            LULUS
                                        </td>
                                        <td v-else
                                            class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
                                            BELUM LULUS
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
import { onMounted, ref, reactive, computed, watchEffect } from 'vue'
import penilaian1API from "./../../../api/listPeserta/tahap1/peserta";

export default {
    components: {},

    setup() {
        const state = reactive({
            peserta1: [],
            penilaian1: [],
        })

        onMounted(() => {
            penilaian1API.calc()
                .then((response) => {
                    state.peserta1 = response.data.data
                    console.log(state.peserta1)
                }).catch((err) => {
                    console.log(err.response.data)
                });
        })

        const filteredKelulusan = computed(() => {
            return state.peserta1.filter((e) => {
                return e.lulus == 1;
            }).sort((a, b) => {
                 return a.total - b.total;
            })
        })

        
        return {
            state,
            filteredKelulusan
        }
    },
}
</script>

<style>
</style>