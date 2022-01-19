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
                    <div class="py-2 inline-clip sm:px-6 lg:px-8">
                        <div class="overflow-hidden shadow-md sm:rounded-lg">
                            <table class="min-w-full">
                                <thead class="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th
                                            scope="col"
                                            class="
                                                px-6
                                                py-3
                                                text-xs
                                                font-medium
                                                tracking-wider
                                                text-left text-gray-700
                                                uppercase
                                                dark:text-gray-400
                                            "
                                        >
                                            NIM
                                        </th>
                                        <th
                                            scope="col"
                                            class="
                                                px-6
                                                py-3
                                                text-xs
                                                font-medium
                                                tracking-wider
                                                text-left text-gray-700
                                                uppercase
                                                dark:text-gray-400
                                            "
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
                                                class="
                                                    px-6
                                                    py-3
                                                    text-xs
                                                    font-medium
                                                    tracking-wider
                                                    text-left text-gray-700
                                                    uppercase
                                                    dark:text-gray-400
                                                "
                                            >
                                                {{ sub.sub_kriteria }}
                                            </th>
                                        </template>
                                        <th
                                            scope="col"
                                            class="relative px-6 py-3"
                                        >
                                            <span class="sr-only">Aksi</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- Product 1 -->
                                    <template
                                        v-if="
                                            peserta1 !== null && peserta1 !== ''
                                        "
                                    >
                                        <tr
                                            v-for="(
                                                peserta1, index
                                            ) in state.peserta1"
                                            :key="index"
                                            class="
                                                bg-white
                                                border-b
                                                dark:bg-gray-800
                                                dark:border-gray-600
                                            "
                                        >
                                            <td
                                                class="
                                                    px-6
                                                    py-4
                                                    text-sm
                                                    font-medium
                                                    text-gray-900
                                                    whitespace-nowrap
                                                    dark:text-white
                                                "
                                            >
                                                {{ peserta1.nim }}
                                            </td>
                                            <td
                                                class="
                                                    px-6
                                                    py-4
                                                    text-sm text-gray-500
                                                    whitespace-nowrap
                                                    dark:text-gray-400
                                                "
                                            >
                                                {{ peserta1.nama }}
                                            </td>
                                            <template
                                                v-for="(
                                                    penilaian, index
                                                ) in state.result"
                                                :key="index"
                                            >
                                                <template
                                                    v-for="(
                                                        sub, index
                                                    ) in state.subkriteria"
                                                    :key="index"
                                                >
                                                    <template
                                                        v-if="
                                                            penilaian.nilai == 0
                                                        "
                                                    >
                                                        <td
                                                            class="
                                                                px-6
                                                                py-4
                                                                text-sm
                                                                font-medium
                                                                text-right
                                                                whitespace-nowrap
                                                            "
                                                        >
                                                            Tidak ada data
                                                        </td>
                                                    </template>
                                                    <template v-else>
                                                        <td
                                                            class="
                                                                px-6
                                                                py-4
                                                                text-sm
                                                                font-medium
                                                                text-right
                                                                whitespace-nowrap
                                                            "
                                                        >
                                                            {{ sub.id_sk1 }}
                                                        </td>
                                                    </template>
                                                </template>
                                            </template>
                                            <!-- <template
                                                v-for="(
                                                    penilaian, index
                                                ) in penilaian1.data"
                                                :key="index"
                                            >
                                                <td
                                                    v-if="penilaian.nilai == 0"
                                                    class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"
                                                >
                                                    <router-link
                                                        :to="{
                                                            name: 'penilaian1.tambah',
                                                            params: {
                                                                id: penilaian.nim,
                                                            },
                                                        }"
                                                        class="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline"
                                                        >Tambah</router-link
                                                    >
                                                </td>
                                                <td
                                                    v-else
                                                    class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"
                                                >
                                                    <router-link
                                                        :to="{
                                                            name: 'penilaian1.edit',
                                                            params: {
                                                                id: penilaian.nim,
                                                            },
                                                        }"
                                                        class="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline"
                                                        >Edit</router-link
                                                    >
                                                </td>
                                            </template> -->
                                        </tr>
                                    </template>
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
        })

        onMounted(() => {
            axios
                .get('http://127.0.0.1:8000/api/penilaian1')
                .then((response) => {
                    state.penilaian1 = response.data.data
                    console.log(state.penilaian1)
                })
            axios
                .get('http://127.0.0.1:8000/api/penilaian1/table_sk1')
                .then((response) => {
                    state.subkriteria = response.data.data
                    console.log(state.subkriteria)
                })
            axios
                .get('http://127.0.0.1:8000/api/penilaian1/peserta1')
                .then((response) => {
                    state.peserta1 = response.data.data
                    console.log(state.peserta1)
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
            console.log(state.result)
        })

        return {
            state,
        }
    },
}
</script>

<style>
</style>