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
                        <div class="sm:rounded-lg ">
                            <table class="min-w-full shadow-md">
                                <thead class="bg-gray-100 dark:bg-gray-700">
                                    <colgroup span="3"></colgroup>
                                    <tr>
                                        <th @click="sort('nim')"
                                        rowspan="2"
                                            scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400"
                                        >
                                            NIM
                                        </th>
                                        <th
                                        rowspan="2"
                                            scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                        >
                                            Nama
                                        </th>
                                        <template v-for="sub in state.subkriteria" :key="sub.id_sk1" >
                                            <th v-if="sub.subkriteria"
                                            colspan="3"
                                                scope="col"
                                                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                            >
                                                {{ sub.kriteria }}
                                            </th>
                                            <th v-else
                                            rowspan="2"
                                                scope="col"
                                                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                            >
                                                {{ sub.kriteria }}
                                            </th>
                                        </template>
                                        <th
                                        rowspan="2"
                                            scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                        >
                                            Aksi
                                        </th>
                                    </tr>
                                    <tr>
                                        <template v-for="subk in state.subkriteria" :key="subk.id_k1" >
                                        <template v-for="subkk in subk.subkriteria" :key="subkk.id_sk1" >
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                        >
                                            {{ subkk.sub_kriteria }}
                                        </th>
                                        </template>
                                        </template>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="peserta1 in state.penilaian1" :key="peserta1.nim"
                                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-600"
                                    >
                                        <td
                                            class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {{ peserta1.NIM }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
                                        >
                                            {{ peserta1.Nama }}
                                        </td>

                                        <template v-for="k in state.kriteria" :key="k.id_k1">
                                            <template v-if=" peserta1.Nilai[k.kriteria] == null">
                                                <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    Tidak ada data
                                                </td>
                                            </template>
                                            <template v-else>
                                                
                                            
                                                <template v-for="nilai in peserta1.Nilai[k.kriteria]" :key="nilai">
                                                <template v-for="sk in state.subkriteria" :key="sk.id_k1">
                                                <template v-for="skk in sk.subkriteria" :key="skk.id_sk1">
                                                <td
                                                    class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
                                                >
                                                    {{ peserta1.Nilai[k.kriteria[skk.sub_kriteria]] }}
                                                </td>
                                                </template></template>
                                            </template>
                                            </template>
                                        </template>

                                        <td
                                            v-for="(
                                                sub, index
                                            ) in state.subkriteria.slice(0, 1)"
                                            :key="index"
                                            class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"
                                        >
                                            <template
                                                v-if="
                                                    peserta1[sub.Kriteria] != null
                                                "
                                            >
                                                <router-link
                                                    :to="{
                                                        name: 'penilaian1.tambah',
                                                        params: {
                                                            id: peserta1.NIM,
                                                        },
                                                    }"
                                                    class="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline"
                                                    >Tambah</router-link
                                                >
                                            </template>
                                            <template v-else>
                                                <router-link
                                                    :to="{
                                                        name: 'penilaian1.edit',
                                                        params: {
                                                            id: peserta1.NIM,
                                                        },
                                                    }"
                                                    class="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline"
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
import { onMounted, ref, reactive, computed, watchEffect } from 'vue'
import http from "./../../../http-common.js";


export default {
    components: {},

    setup() {
        const state = reactive({
            peserta1: [],
            penilaian1: [],
            subkriteria: [],
            kriteria: [],
            result: [],
            peserta1Min: [],
            rs: [],
            merged: [],
        })

        onMounted(() => {
            http
                .get('/penilaian1/calculate')
                .then((response) => {
                    state.penilaian1 = response.data.data
                })
            http
                .get('/subkriteria1')
                .then((response) => {
                    state.subkriteria = response.data.data
                })
            http
                .get('/kriteria1')
                .then((response) => {
                    state.kriteria = response.data.data
                })
            http
                .get('/penilaian1')
                .then((response) => {
                    state.peserta1 = response.data.data
                })
        })

        // watchEffect(() => {
        //     state.peserta1Min = state.peserta1.map(
        //         ({
        //             bidang_fak,
        //             fakultas,
        //             jurusan,
        //             gender,
        //             tgl_lahir,
        //             ...rest
        //         }) => ({ ...rest })
        //     )

        //     const keys = state.penilaian1.map((data) =>
        //         Object.keys(data).filter((key) => !isNaN(parseInt(key)))
        //     )

        //     state.peserta1Min.forEach((data, index) => {
        //         keys[0].forEach((key) => {
        //             state.peserta1Min[index][key] = null
        //         })
        //     })

        //     state.rs = new Set(state.penilaian1.map((n) => n.nim))
        //     state.merged = [
        //         ...state.penilaian1,
        //         ...state.peserta1Min.filter((n) => !state.rs.has(n.nim)),
        //     ]
        //     console.log(state.merged)
        // })

        const currentSort = ref('name')
        const currentSortDir = ref('asc')

        const sort = function(s){
            //if s == current sort, reverse
            if(s === currentSort.value) {
            currentSortDir.value = currentSortDir.value==='asc'?'desc':'asc';
            }
        currentSort.value = s;
        }
        
        const sortedPenilaian1 = function(){
            return state.merged.sort((a,b) => {
                let modifier = 1;
                if(currentSortDir.value === 'desc') modifier = -1;
                if(a[currentSort.value] < b[currentSort.value]) return -1 * modifier;
                if(a[currentSort.value] > b[currentSort.value]) return 1 * modifier;
                return 0;
            });
        }
            
        const sp1C = computed(() => sortedPenilaian1.value)
        

        

        return {
            state,
            sort,
            sp1C
        }
    },
}
</script>

<style>
</style>