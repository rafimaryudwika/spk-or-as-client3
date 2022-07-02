<template>
    <div class="flex-1">
        <div class="col-12">
            <h1 class="px-6 py-6 mb-6 text-3xl font-extrabold">
                Data Peserta Tahap 1
            </h1>
        </div>
        <div class="col-12">
            <div class="flex-1">
                <div class="overflow-y-auto sm:-mx-6 lg:-mx-0">
                    <div class="py-2 inline-clip sm:px-6 lg:px-4">

                        <div class="sm:rounded-lg ">
                            <table class="min-w-full shadow-md">
                                <thead class="bg-gray-100 dark:bg-gray-700">
                                    <colgroup span="3"></colgroup>
                                    <tr>
                                        <th @click="sorting('nim')" rowspan="2" scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                            NIM
                                        </th>
                                        <th @click="sorting('nama')" rowspan="2" scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                            Nama
                                        </th>
                                        <th @click="sorting('detail.gender', true)" rowspan="2" scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                            Gender
                                        </th>
                                        <th @click="sorting('detail.tanggal_lahir', true)" rowspan="2" scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                            Tanggal Lahir
                                        </th>
                                        <th @click="sorting('detail.fakultas', true)" rowspan="2" scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                            Fakultas
                                        </th>
                                        <th @click="sorting('detail.jurusan', true)" rowspan="2" scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                            Jurusan
                                        </th>
                                        <th rowspan="2" scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="peserta1 in sortedData" :key="peserta1.nim"
                                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-600">
                                        <td
                                            class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {{ peserta1.nim }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {{ peserta1.nama }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {{ peserta1.detail.gender }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {{ peserta1.detail.tanggal_lahir }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {{ peserta1.detail.fakultas }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {{ peserta1.detail.jurusan }}
                                        </td>

                                        <!-- <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <router-link :to="{
                                                name: 'penilaian1.view',
                                                params: {
                                                    id: peserta1.nim,
                                                },
                                            }"
                                                class="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline">
                                                Tambah</router-link>
                                        </td> -->
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
import { onMounted, reactive, computed,} from 'vue'
import penilaian1API from "./../../../api/listPeserta/tahap2/peserta";


export default {
    components: {},

    setup() {
        const state = reactive({
            peserta1: [],
            currentSort: 'nim',
            currentSortDir: 'asc',
            listSubKriteria: [],
            currentSortNested: [],
            nested: false,
        })

        onMounted(() => {
            penilaian1API.index()
                .then((response) => {
                    state.peserta1 = response.data.data
                }).catch((err) => {
                    console.log(err.response.data)
                });
        })

        function sorting(s, nested = false) {
            if (s === state.currentSort) {
                state.currentSortDir = state.currentSortDir === 'asc' ? 'desc' : 'asc'
            }
            state.nested = nested
            state.currentSort = s
            if (state.nested) {
                state.currentSortNested = s.split('.')
            } else {
                state.currentSort = s
            }
        }

        const sortedData = computed(() => {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            return state.peserta1.sort((a, b) => {
                let modifier = 1
                if (state.currentSortDir == 'desc') modifier = -1
                if (!state.nested || state.currentSortNested.length == 1) {
                    if (a[state.currentSort] < b[state.currentSort]) return -1 * modifier
                    if (a[state.currentSort] > b[state.currentSort]) return 1 * modifier
                    return 0
                } else if (state.currentSortNested.length == 2) {
                    if (a[state.currentSortNested[0]][state.currentSortNested[1]]
                        < b[state.currentSortNested[0]][state.currentSortNested[1]]) return -1 * modifier
                    if (a[state.currentSortNested[0]][state.currentSortNested[1]]
                        > b[state.currentSortNested[0]][state.currentSortNested[1]]) return 1 * modifier
                    return 0
                }
            })
        })
        return {
            state,
            sorting,
            sortedData
        }
    },
}
</script>

<style>
</style>