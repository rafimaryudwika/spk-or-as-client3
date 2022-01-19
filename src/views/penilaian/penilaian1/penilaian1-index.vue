<template>
    <div class="flex-1">
        <div class="col-12">
            <h1 class="px-6 py-6 mb-6 text-3xl font-extrabold">
                Data Penilaian
            </h1>
        </div>
        <div class="col-12">
            <div class="flex-1">
                <div class="overflow-y-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-clip sm:px-6 lg:px-12">
                        <div class="overflow-hidden shadow-md sm:rounded-lg">
                            <table class="min-w-full">
                                <thead class="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase  dark:text-gray-400"
                                        >
                                            NIM
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase  dark:text-gray-400"
                                        >
                                            Nama
                                        </th>
                                        <template
                                            v-for="(
                                                sub, index
                                            ) in state.subkriteria"
                                            :key="index"
                                        >
                                            <th
                                                scope="col"
                                                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase  dark:text-gray-400"
                                            >
                                                {{ sub.sub_kriteria }}
                                            </th>
                                        </template>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase  dark:text-gray-400"
                                        >
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="(
                                            peserta1, index
                                        ) in state.merged"
                                        :key="index"
                                        class="bg-white border-b  dark:bg-gray-800 dark:border-gray-600"
                                    >
                                        <td
                                            class="px-6 py-4 text-sm font-medium text-gray-900  whitespace-nowrap dark:text-white"
                                        >
                                            {{ peserta1.nim }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500  whitespace-nowrap dark:text-gray-400"
                                        >
                                            {{ peserta1.nama }}
                                        </td>

                                        <template
                                            v-for="(
                                                sub, index
                                            ) in state.subkriteria"
                                            :key="index"
                                        >
                                            <template
                                                v-if="
                                                    peserta1[sub.id_sk1] == null
                                                "
                                            >
                                                <td
                                                    class="px-6 py-4 text-sm text-gray-500  whitespace-nowrap dark:text-gray-400"
                                                >
                                                    Tidak ada data
                                                </td>
                                            </template>
                                            <template v-else>
                                                <td
                                                    class="px-6 py-4 text-sm text-gray-500  whitespace-nowrap dark:text-gray-400"
                                                >
                                                    {{ peserta1[sub.id_sk1] }}
                                                </td>
                                            </template>
                                        </template>

                                        <td
                                            v-for="(
                                                sub, index
                                            ) in state.subkriteria.slice(0, 1)"
                                            :key="index"
                                            class="px-6 py-4 text-sm font-medium text-right  whitespace-nowrap"
                                        >
                                            <template
                                                v-if="
                                                    peserta1[sub.id_sk1] == null
                                                "
                                            >
                                                <router-link
                                                    :to="{
                                                        name: 'penilaian1.tambah',
                                                        params: {
                                                            id: peserta1.nim,
                                                        },
                                                    }"
                                                    class="text-blue-600  hover:text-blue-900 dark:text-blue-500 dark:hover:underline"
                                                    >Tambah</router-link
                                                >
                                            </template>
                                            <template v-else>
                                                <router-link
                                                    :to="{
                                                        name: 'penilaian1.edit',
                                                        params: {
                                                            id: peserta1.nim,
                                                        },
                                                    }"
                                                    class="text-blue-600  hover:text-blue-900 dark:text-blue-500 dark:hover:underline"
                                                    >Edit</router-link
                                                ></template
                                            >
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
import axios from 'axios'
import { onMounted, ref, reactive, computed, watchEffect } from 'vue'

export default {
    components: {},

    setup() {
        const state = reactive({
            peserta1: [],
            penilaian1: [],
            subkriteria: [],
            result: [],
            peserta1Min: [],
            rs: [],
            merged: [],
        })

        onMounted(() => {
            axios
                .get('http://127.0.0.1:8000/api/penilaian1')
                .then((response) => {
                    state.penilaian1 = response.data.data
                })
            axios
                .get('http://127.0.0.1:8000/api/penilaian1/table_sk1')
                .then((response) => {
                    state.subkriteria = response.data.data
                })
            axios
                .get('http://127.0.0.1:8000/api/penilaian1/peserta1')
                .then((response) => {
                    state.peserta1 = response.data.data
                })
        })

        watchEffect(() => {
            state.penilaian1.forEach((dat) => {
                if (!state.result.find((r) => r.nim === dat.nim)) {
                    state.result.push({ nim: dat.nim, nama: dat.nama })
                }
            })
            state.penilaian1.forEach((dat) => {
                let res = state.result.find((r) => r.nim === dat.nim)
                res[dat.id_sk1] = dat.nilai
            })

            state.peserta1Min = state.peserta1.map(
                ({
                    bidang_fak,
                    fakultas,
                    jurusan,
                    gender,
                    tgl_lahir,
                    ...rest
                }) => ({ ...rest })
            )

            const keys = state.result.map((data) =>
                Object.keys(data).filter((key) => !isNaN(parseInt(key)))
            )

            state.peserta1Min.forEach((data, index) => {
                keys[0].forEach((key) => {
                    state.peserta1Min[index][key] = null
                })
            })

            state.rs = new Set(state.result.map((n) => n.nim))
            state.merged = [
                ...state.result,
                ...state.peserta1Min.filter((n) => !state.rs.has(n.nim)),
            ]
        })

        return {
            state,
        }
    },
}
</script>

<style>
</style>