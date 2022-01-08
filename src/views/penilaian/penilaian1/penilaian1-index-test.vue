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
                                                subkriteria, index
                                            ) in subkriteria.data"
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
                                                {{ subkriteria.sub_kriteria }}
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
                                            ) in peserta1.data"
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
                                                v-if="peserta1.length == 0"
                                            >
                                                <template
                                                    v-for="(
                                                        subkriteria, index
                                                    ) in subkriteria.data"
                                                    :key="index"
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
                                            </template>
                                            <template v-else>
                                                <template
                                                    v-for="(
                                                        penilaian, index
                                                    ) in transpose.data"
                                                    :key="index"
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
                                                        {{ penilaian.nilai }}
                                                    </td>
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
import { onMounted, ref, computed } from 'vue'
import SideBar from './../../../components/SideBar.vue'

export default {
    components: {},

    setup() {
        let peserta1 = ref([])
        let result = ref([])
        let penilaian1 = ref([])
        let subkriteria = ref([])

        onMounted(() => {
            axios
                .get('http://127.0.0.1:8000/api/penilaian1')
                .then((result) => {
                    penilaian1.value = result.data
                })
                .catch((err) => {
                    console.log(err.response)
                })
            axios
                .get('http://127.0.0.1:8000/api/penilaian1/table_sk1')
                .then((result) => {
                    subkriteria.value = result.data
                })
                .catch((err) => {
                    console.log(err.response)
                })
            axios
                .get('http://127.0.0.1:8000/api/penilaian1/peserta1')
                .then((result) => {
                    peserta1.value = result.data
                })
                .catch((err) => {
                    console.log(err.response)
                })
            penilaian1.value.forEach((dat) => {
                if (!result.value.find((r) => r.nim === dat.nim)) {
                    result.value.push({ nim: dat.nim, nama: dat.nama })
                }
            }),
                penilaian1.value.forEach((dat) => {
                    let res = result.value.find((r) => r.nim === dat.nim)
                    res[dat.id_sk1] = dat.nilai
                })
        })

        return {
            peserta1,
            penilaian1,
            subkriteria,
            transpose,
        }
    },
}
</script>

<style>
</style>