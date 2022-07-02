<template>
    <div class="flex-1">
        <div class="col-12">
            <h1 class="px-6 py-6 mb-6 text-3xl font-extrabold">
                Data Peserta & Penilaian
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
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Nama
                                        </th>
                                        <template v-for="sub in state.subkriteria" :key="sub.id_sk1">
                                            <th v-if="sub.subkriteria" :colspan="sub.subkriteria.length" scope="col"
                                                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                {{ sub.kriteria }}
                                            </th>
                                            <th v-else rowspan="2" scope="col"
                                                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                {{ sub.kriteria }}
                                            </th>
                                        </template>
                                        <th colspan="2" rowspan="2" scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Aksi
                                        </th>
                                    </tr>
                                    <tr>
                                        <template v-for="subk in state.subkriteria" :key="subk.id_k1">
                                            <template v-for="subkk in subk.subkriteria" :key="subkk.id_sk1">
                                                <th scope="col"
                                                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    {{ subkk.sub_kriteria }}
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

                                        <td v-for="k in state.subkriteria.slice(0, 1)" :key="k.id_k1"
                                            class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <template v-if="
                                                peserta1.nilai[k.k_sc] == null
                                            ">
                                                <router-link :to="{
                                                    name: 'penilaian2.tambah',
                                                    params: {
                                                        id: peserta1.nim,
                                                    },
                                                }"
                                                    class="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline">
                                                    Tambah</router-link>
                                            </template>
                                            <template v-else>
                                                <router-link :to="{
                                                    name: 'penilaian2.edit',
                                                    params: {
                                                        id: peserta1.nim,
                                                    },
                                                }"
                                                    class="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline">
                                                    Edit</router-link>
                                            </template>
                                        </td>
                                        <td>
                                            <!-- <router-link :to="{
                                                    name: 'penilaian1.show',
                                                    params: {
                                                        id: peserta1.nim,
                                                    },
                                                }"
                                                    class="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline">
                                                    Lihat</router-link> -->
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
import penilaian2API from "./../../../api/listPeserta/tahap2/peserta";
import kriteria2API from "./../../../api/listKriteria/tahap2/kriteria2";
import subKriteria2API from "./../../../api/listKriteria/tahap2/subkriteria2";


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
            listSubKriteria: []
        })

        onMounted(() => {
            subKriteria2API.index()
            .then((response) => {
                state.subkriteria = response.data.data
                console.log(state.subkriteria)
            }).catch((err) => {
                console.log(err.response.data)
            });
            kriteria2API.index()
                .then((response) => {
                    state.kriteria = response.data.data
                }).catch((err) => {
                    console.log(err.response.data)
                });
            penilaian2API.index()
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

        function sorting(s) {
            if (s === state.currentSort) {
                state.currentSortDir = state.currentSortDir === 'asc' ? 'desc' : 'asc'
            }
            state.currentSort = s
        }

        const sortedData = computed(() => {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            return state.peserta1.sort((a, b) => {
                let modifier = 1
                if (state.currentSortDir == 'desc') modifier = -1
                if (a[state.currentSort] < b[state.currentSort]) return -1 * modifier
                if (a[state.currentSort] > b[state.currentSort]) return 1 * modifier
                return 0
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