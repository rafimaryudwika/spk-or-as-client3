<template>
    <div class="flex-1 bg-white dark:bg-gray-800">
        <div class="col-6">
            <h1 class="px-6 py-6 text-3xl font-extrabold dark:text-gray-200">
                Data Kalkulasi
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
                                        <th @click="sorting('nim')" rowspan="3" scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                            NIM
                                        </th>
                                        <th @click="sorting('nama')" rowspan="3" scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                            Nama
                                        </th>
                                        <th colspan="5" scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Nilai
                                        </th>
                                        <th colspan="5" scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Normalisasi
                                        </th>
                                        <th @click="sorting('total')" rowspan="3" scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                            Total
                                        </th>
                                        <th rowspan="3" scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Lulus
                                        </th>
                                        <th rowspan="3" scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Aksi
                                        </th>

                                    </tr>
                                    <tr>
                                        <template v-for="sub in state.subkriteria" :key="sub.id_sk1">
                                            <th v-if="sub.subkriteria" :colspan="sub.subkriteria.length" scope="col"
                                                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                {{ sub.kode }}
                                            </th>
                                            <th v-else @click="sorting(`nilai.${sub.k_sc}`, true)" rowspan="2"
                                                scope="col"
                                                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                                {{ sub.kode }}
                                            </th>
                                        </template>
                                        <template v-for="sub in state.subkriteria" :key="sub.id_sk1">
                                            <th v-if="sub.subkriteria" :colspan="sub.subkriteria.length" scope="col"
                                                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                {{ sub.kode }}
                                            </th>
                                            <th v-else @click="sorting(`normalisasi.${sub.k_sc}`, true)" rowspan="2"
                                                scope="col"
                                                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                                {{ sub.kode }}
                                            </th>
                                        </template>
                                    </tr>
                                    <tr>
                                        <template v-for="subk in state.subkriteria" :key="subk.id_k1">
                                            <template v-for="subkk in subk.subkriteria" :key="subkk.id_sk1">
                                                <th @click="sorting(`nilai.${subk.k_sc}.${subkk.sk_sc}`, true)"
                                                    scope="col"
                                                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                                    {{ subkk.kode }}
                                                </th>
                                            </template>
                                        </template>
                                        <template v-for="subk in state.subkriteria" :key="subk.id_k1">
                                            <template v-for="subkk in subk.subkriteria" :key="subkk.id_sk1">
                                                <th @click="sorting(`normalisasi.${subk.k_sc}.${subkk.sk_sc}`, true)"
                                                    scope="col"
                                                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                                    {{ subkk.kode }}
                                                </th>
                                            </template>
                                        </template>
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
                                        <template v-if="peserta1.nilai == 'nodata'">
                                            <td v-for="subkrit in state.listSubKriteria" :key="subkrit.kriteria"
                                                class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                Tidak ada data
                                            </td>
                                        </template>
                                        <template v-else>
                                            <template v-for="k in state.subkriteria" :key="k.id_k1">
                                                <template v-if="k.subkriteria">
                                                    <td v-for="subk in k.subkriteria" :key="subk.id_sk1"
                                                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                        {{ peserta1.nilai[k.k_sc][subk.sk_sc] }}
                                                    </td>
                                                </template>
                                                <template v-else>
                                                    <td
                                                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                        {{ peserta1.nilai[k.k_sc] }}
                                                    </td>
                                                </template>
                                            </template>
                                        </template>
                                        <template v-if="peserta1.normalisasi == 'nodata'">
                                            <td v-for="subkrit in state.listSubKriteria" :key="subkrit.kriteria"
                                                class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                Tidak ada data
                                            </td>
                                        </template>
                                        <template v-else>
                                            <template v-for="k in state.subkriteria" :key="k.id_k1">
                                                <template v-if="k.subkriteria">
                                                    <td v-for="subk in k.subkriteria" :key="subk.id_sk1"
                                                        class="[warna(peserta1.normalisasi[k.k_sc][subk.sk_sc]), px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400]">
                                                        {{ peserta1.normalisasi[k.k_sc][subk.sk_sc] }}
                                                    </td>
                                                </template>
                                                <template v-else>
                                                    <td
                                                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                        {{ peserta1.normalisasi[k.k_sc] }}
                                                    </td>
                                                </template>
                                            </template>
                                        </template>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {{ peserta1.total }}
                                        </td>
                                        <td v-if="peserta1.lulus == 1"
                                            class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
                                            LULUS
                                        </td>
                                        <td v-else
                                            class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
                                            BELUM LULUS
                                        </td>
                                        <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <router-link :to="{
                                                name: 'penilaian1.evaluate',
                                                params: {
                                                    id: peserta1.nim,
                                                },
                                            }"
                                                class="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline">
                                                Evaluasi</router-link>
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
import kriteria1API from "./../../../api/listKriteria/tahap1/kriteria1";
import subKriteria1API from "./../../../api/listKriteria/tahap1/subkriteria1";

export default {
    components: {},

    setup() {
        const state = reactive({
            peserta1: [],
            penilaian1: [],
            subkriteria: [],
            kriteria: [],
            currentSort: 'nim',
            currentSortDir: 'asc',
            listSubKriteria: [],
            currentSortNested: [],
            nested: false,
        })

        onMounted(() => {
            subKriteria1API.index()
                .then((response) => {
                    state.subkriteria = response.data.data
                }).catch((err) => {
                    console.log(err.response.data)
                });
            kriteria1API.index()
                .then((response) => {
                    state.kriteria = response.data.data
                }).catch((err) => {
                    console.log(err.response.data)
                });
            penilaian1API.calc()
                .then((response) => {
                    state.peserta1 = response.data.data
                }).catch((err) => {
                    console.log(err.response.data)
                });
        })

        watchEffect(() => {
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
                else if (state.currentSortNested.length == 3) {
                    if (a[state.currentSortNested[0]][state.currentSortNested[1]][state.currentSortNested[2]]
                        < b[state.currentSortNested[0]][state.currentSortNested[1]][state.currentSortNested[2]]) return -1 * modifier
                    if (a[state.currentSortNested[0]][state.currentSortNested[1]][state.currentSortNested[2]]
                        > b[state.currentSortNested[0]][state.currentSortNested[1]][state.currentSortNested[2]]) return 1 * modifier
                    return 0
                }
            })
        })

        function warna(value) {
            if (value >= 75) return 'bg-green-400'
            if (value >= 50 && value <= 75) return 'bg-yellow-300'
            if (value <= 50) return 'bg-red-500'
            return 'bg-white'
            //sesuaikan saja
        }

        return {
            state,
            sorting,
            sortedData,
            warna
        }
    },
}
</script>

<style>
</style>