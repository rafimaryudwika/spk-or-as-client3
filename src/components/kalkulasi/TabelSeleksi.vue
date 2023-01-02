<template>
    <div class="col-12">
        <div class="flex-1">
            <div class="overflow-y-auto sm:-mx-6 lg:-mx-0">
                <div class="py-2 inline-clip sm:px-6 lg:px-4">
                    <Toolbar :filteredCalc="filterCalc" :filterFakultas="filteredFakultas" />
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
                                    <th :colspan="props.listSubKriteria.length" scope="colgroup"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Nilai
                                    </th>
                                    <th :colspan="props.listSubKriteria.length + props.conditionalLength"
                                        scope="colgroup"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Normalisasi
                                    </th>
                                    <th @click="sorting('total')" rowspan="3" scope="colgroup"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                        Total
                                    </th>
                                    <th @click="sorting('total')" rowspan="3" scope="colgroup"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                        Total Genap
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
                                    <template v-for="sub in props.subkriteria" :key="sub.id_sk1">
                                        <th v-if="sub.subkriteria" :colspan="sub.subkriteria.length" scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            {{ sub.kode }}
                                        </th>
                                        <th v-else @click="sorting(`nilai.${sub.k_sc}`, true)" rowspan="2" scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                            {{ sub.kode }}
                                        </th>
                                    </template>
                                    <template v-for="sub in props.subkriteria" :key="sub.id_sk1">
                                        <th v-if="sub.subkriteria" :colspan="sub.subkriteria.length + 2" scope="col"
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
                                    <template v-for="subk in props.subkriteria" :key="subk.id_k1">
                                        <template v-for="subkk in subk.subkriteria" :key="subkk.id_sk1">
                                            <th @click="sorting(`nilai.${subk.k_sc}.${subkk.sk_sc}`, true)" scope="col"
                                                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                                {{ subkk.kode }}
                                            </th>
                                        </template>
                                    </template>
                                    <template v-for="subk in props.subkriteria" :key="subk.id_k1">
                                        <template v-for="subkk in subk.subkriteria" :key="subkk.id_sk1">
                                            <th @click="sorting(`normalisasi.${subk.k_sc}.${subkk.sk_sc}`, true)"
                                                scope="col"
                                                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                                {{ subkk.kode }}
                                            </th>
                                        </template>
                                        <th v-if="subk.subkriteria"
                                            @click="sorting(`normalisasi.${subk.k_sc}.total`, true)" scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                            Total
                                        </th>
                                        <th v-if="subk.subkriteria" @click="sorting(`new_norm.${subk.k_sc}`, true)"
                                            scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                            Norm
                                        </th>
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
                                    <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                        {{ peserta1.nama }}
                                    </td>
                                    <template v-if="peserta1.nilai == 'nodata'">
                                        <td v-for="subkrit in props.listSubKriteria" :key="subkrit.kriteria"
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            Tidak ada data
                                        </td>
                                    </template>
                                    <template v-else>
                                        <template v-for="k in props.subkriteria" :key="k.id_k1">
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
                                        <td v-for="subkrit in props.listSubKriteria" :key="subkrit.kriteria"
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            Tidak ada data
                                        </td>
                                    </template>
                                    <template v-else>
                                        <template v-for="k in props.subkriteria" :key="k.id_k1">
                                            <template v-if="k.subkriteria">
                                                <td v-for="subk in k.subkriteria" :key="subk.id_sk1"
                                                    :class="[warna(peserta1.normalisasi[k.k_sc][subk.sk_sc]), 'px-6', 'py-4', 'text-sm', 'text-gray-500', 'whitespace-nowrap', 'dark:text-gray-400']">
                                                    {{ peserta1.normalisasi[k.k_sc][subk.sk_sc] }}
                                                </td>
                                                <td
                                                    :class="[warna(peserta1.normalisasi[k.k_sc].total), 'px-6', 'py-4', 'text-sm', 'text-gray-500', 'whitespace-nowrap', 'dark:text-gray-400']">
                                                    {{ peserta1.normalisasi[k.k_sc].total }}
                                                </td>
                                                <td
                                                    :class="[warna(peserta1.new_norm[k.k_sc]), 'px-6', 'py-4', 'text-sm', 'text-gray-500', 'whitespace-nowrap', 'dark:text-gray-400']">
                                                    {{ peserta1.new_norm[k.k_sc] }}
                                                </td>
                                            </template>
                                            <template v-else>
                                                <td
                                                    :class="[warna(peserta1.normalisasi[k.k_sc]), 'px-6', 'py-4', 'text-sm', 'text-gray-500', 'whitespace-nowrap', 'dark:text-gray-400']">
                                                    {{ peserta1.normalisasi[k.k_sc] }}
                                                </td>
                                            </template>
                                        </template>
                                    </template>
                                    <td
                                        :class="[warna(peserta1.total), 'px-6', 'py-4', 'text-sm', 'text-gray-500', 'whitespace-nowrap', 'dark:text-gray-400']">
                                        {{ peserta1.total }}
                                    </td>
                                    <td
                                        :class="[warna(peserta1.total), 'px-6', 'py-4', 'text-sm', 'text-gray-500', 'whitespace-nowrap', 'dark:text-gray-400']">
                                        {{ parseFloat(peserta1.total * 100).toFixed(1) }}
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
}" class="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline">
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
</template>
<script setup>
import { onMounted, ref, reactive, computed, watchEffect } from 'vue'
import Toolbar from "./ToolbarTabelSeleksi.vue"

const props = defineProps({
    kriteria: Object,
    subkriteria: Object,
    listSubKriteria: Object,
    peserta1: Object,
    fakultas: Object,
    conditionalLength: Number
})

const state = reactive({
    currentSort: 'nim',
    currentSortDir: 'asc',
    currentSortNested: [],
    nested: false,
})

let filterCalc = reactive({
    fakultas: '',
    bidang_fak: '',
    bp: '',
    gender: '',
    rangeNilai: [50, 100],
    search: '',
})


watchEffect(() => {
    for (let i = 0; i < props.subkriteria.length; i++) {
        const outer = props.subkriteria[i];
        if (outer.subkriteria) {
            for (let j = 0; j < outer.subkriteria.length; j++) {
                const inner = outer.subkriteria[j];
                const key = `${outer.k_sc}_${inner.sk_sc}`;
                filterCalc[key] = [0.5, 1.0];
            }
        } else {
            filterCalc[outer.k_sc] = [0.5, 1.0];
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

const filteredFakultas = computed(() => {
    return props.fakultas.filter((f) => {
        if (filterCalc.bidang_fak == '') return true;
        return f.bidang_fakultas.bidang_fak === filterCalc.bidang_fak
    })
})


const sortedData = computed(() => {
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties, vue/no-mutating-props
    return props.peserta1.sort((a, b) => {
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
    }).filter((p) => {
        return p.nim.toString().startsWith(filterCalc.bp)
    }).filter((p) => {
        return p.total * 100 >= filterCalc.rangeNilai[0]
            && p.total * 100 <= filterCalc.rangeNilai[1]
    }).filter(c => {
        if (filterCalc.search == '') return true;
        return c.nama.toLowerCase().indexOf(filterCalc.search.toLowerCase()) >= 0;
    }).filter((p) => {
        if (filterCalc.gender == '') return true;
        return p.detail.gender == filterCalc.gender;
    }).filter((p) => {
        if (filterCalc.bidang_fak == '') return true;
        return p.detail.bidang_fakultas == filterCalc.bidang_fak
    }).filter((p) => {
        if (filterCalc.fakultas == '') return true;
        return p.detail.fakultas == filterCalc.fakultas
    })
})

function warna(value) {
    if (value >= 0.8) return 'text-gray-50 bg-green-400 dark:bg-green-800 dark:text-gray-100'
    if (value >= 0.5 && value <= 0.8) return 'text-gray-500 bg-yellow-300 dark:bg-yellow-600 dark:text-gray-100'
    if (value <= 0.5) return 'text-gray-50 bg-red-400 dark:bg-red-800 dark:text-gray-100'
    return 'bg-white'
    //sesuaikan saja
}
</script>