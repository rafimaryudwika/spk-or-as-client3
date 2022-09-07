<template>
    <div class="flex-1 bg-white dark:bg-gray-800">
        <div class="col-6">
            <h1 class="px-6 py-6 text-3xl font-extrabold dark:text-gray-200">
                Data Kalkulasi Penilaian Tahap 1
            </h1>
        </div>
        <div class="p-2">
            <div id="alert-5" class="flex p-4 bg-gray-100 rounded-lg dark:bg-gray-700" role="alert">
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-700 dark:text-gray-300"
                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"></path>
                </svg>
                <span class="sr-only">Info</span>
                <div class="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Halaman ini berfungsi untuk menentukan keputusan siapa yang akan lulus dan tidak lulus.<br>
                    Halaman kalkulasi ini dibantu dengan filter berdasarkan profil dan latar belakang peserta serta
                    filter berdasarkan rentang penilaian total, hal ini memudahkan pengguna menentukan keputusan
                    berdasarkan penilaian dan profil.<br>
                    Selain filtering, halaman kalkulasi ini dibantu dengan pewarnaan tabel berdasarkan rentang penilaian
                    sehingga pengguna bisa memutuskan siapa yang layak diluluskan berdasarkan penilaian.<br>
                    Gunakan filtering dan pewarnaan tabel sebijaknya agar pengguna bisa meluluskan peserta yang tepat.
                    Klik tombol <b>Evaluasi</b> untuk melakukan evaluasi peserta yang diinginkan.
                </div>
                <button type="button"
                    class="ml-auto -mx-1.5 -my-1.5 bg-gray-100 text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 p-1.5 hover:bg-gray-200 inline-flex h-8 w-8 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    data-dismiss-target="#alert-5" aria-label="Close">
                    <span class="sr-only">Dismiss</span>
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </div>
        <div class="col-12">
            <div class="flex-1">
                <div class="overflow-y-auto sm:-mx-6 lg:-mx-0">
                    <div class="py-2 inline-clip sm:px-6 lg:px-4">
                        <div class="flex pb-4">
                            <div class="m-1 flex-w-auto">

                                <label for="search"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Filter dari
                                    Nama</label>
                                <div class="relative w-full">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <input type="text" id="simple-search"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Search" required v-model="filterCalc.search">
                                </div>
                            </div>
                            <div class="m-1 flex-w-48">
                                <label for="bp"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Filter dari
                                    Bidang Fakultas</label>
                                <select id="bidang_fak"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    v-model="filterCalc.bidang_fak">
                                    <option value="">None</option>
                                    <option value="Saintek">Saintek</option>
                                    <option value="Soshum">Soshum</option>
                                </select>
                            </div>
                            <div class="m-1 flex-w-48">
                                <label for="bp"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Filter dari
                                    Fakultas</label>
                                <select id="fakultas"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    v-model="filterCalc.fakultas">
                                    <option value="">None</option>
                                    <option v-for="fakultas in filteredFakultas" :key="fakultas.id_f"
                                        :value="fakultas.fakultas">{{  fakultas.fakultas  }}</option>
                                </select>
                            </div>
                            <div class="m-1 flex-w-24">
                                <label for="bp"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Filter dari
                                    BP</label>
                                <select id="bp"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    v-model="filterCalc.bp">
                                    <option value="">None</option>
                                    <option value="18">2018</option>
                                    <option value="19">2019</option>
                                </select>
                            </div>
                            <div class="m-1 flex-w-24">
                                <label for="gender"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Filter dari
                                    Gender</label>
                                <select id="bp"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    v-model="filterCalc.gender">
                                    <option value="">None</option>
                                    <option value="Laki-Laki">Laki-Laki</option>
                                    <option value="Perempuan">Perempuan</option>
                                </select>
                            </div>
                            <div class="m-1 flex-w-auto">
                                <label for="rentang"
                                    class="block pb-4 mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Filter
                                    dari
                                    Rentang Penilaian</label>
                                <br class="pb-4">
                                <vue3Slider v-model="filterCalc.rangeNilai" :classes="{
                                    target: 'relative box-border select-none touch-none tap-highlight-transparent touch-callout-none disabled:cursor-not-allowed',
                                    focused: 'slider-focused',
                                    tooltipFocus: 'slider-tooltip-focus',
                                    tooltipDrag: 'slider-tooltip-drag',
                                    ltr: 'slider-ltr',
                                    rtl: 'slider-rtl',
                                    horizontal: 'slider-horizontal h-1.5',
                                    vertical: 'slider-vertical w-1.5 h-80',
                                    textDirectionRtl: 'slider-txt-rtl',
                                    textDirectionLtr: 'slider-txt-ltr',
                                    base: 'w-full h-full relative z-1 bg-gray-300 rounded',
                                    connects: 'w-full h-full relative overflow-hidden z-0 rounded',
                                    connect: 'absolute z-1 top-0 right-0 transform-origin-0 transform-style-flat h-full w-full bg-blue-500 dark:bg-blue-700 cursor-pointer tap:duration-300 tap:transition-transform disabled:bg-gray-400 disabled:cursor-not-allowed',
                                    origin: 'slider-origin absolute z-1 top-0 right-0 transform-origin-0 transform-style-flat h-full w-full h:h-0 v:-top-full txt-rtl-h:left-0 txt-rtl-h:right-auto v:w-0 tap:duration-300 tap:transition-transform',
                                    handle: 'absolute rounded-full bg-white border-0 shadow-slider cursor-grab focus:outline-none h:w-4 h:h-4 h:-top-1.5 h:-right-2 txt-rtl-h:-left-2 txt-rtl-h:right-auto v:w-4 v:h-4 v:-top-2 v:-right-1.25 disabled:cursor-not-allowed focus:ring focus:ring-green-500 focus:ring-opacity-30',
                                    handleLower: 'slider-hande-lower',
                                    handleUpper: 'slider-hande-upper',
                                    touchArea: 'h-full w-full',
                                    tooltip: 'absolute block text-sm font-semibold whitespace-nowrap py-1 px-1.5 min-w-5 text-center text-white rounded border border-blue-500 bg-blue-500 dark:bg-blue-700 dark:border-blue-700 transform h:-translate-x-1/2 h:left-1/2 v:-translate-y-1/2 v:top-1/2 disabled:bg-gray-400 disabled:border-gray-400 merge-h:translate-x-1/2 merge-h:left-auto merge-v:-translate-x-4 merge-v:top-auto tt-focus:hidden tt-focused:block tt-drag:hidden tt-dragging:block',
                                    tooltipTop: 'bottom-6 h:arrow-bottom merge-h:bottom-3.5',
                                    tooltipBottom: 'top-6 h:arrow-top merge-h:top-5',
                                    tooltipLeft: 'right-6 v:arrow-right merge-v:right-1',
                                    tooltipRight: 'left-6 v:arrow-left merge-v:left-7',
                                    tooltipHidden: 'slider-tooltip-hidden',
                                    active: 'slider-active shadow-slider-active cursor-grabbing',
                                    draggable: 'cursor-ew-resize v:cursor-ns-resize',
                                    tap: 'slider-state-tap',
                                    drag: 'slider-state-drag',
                                }" />
                            </div>
                        </div>
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
                                        <th :colspan="state.listSubKriteria.length" scope="colgroup"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Nilai
                                        </th>
                                        <th :colspan="state.listSubKriteria.length + 2" scope="colgroup"
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
                                        <template v-for="sub in state.subkriteria" :key="sub.id_sk1">
                                            <th v-if="sub.subkriteria" :colspan="sub.subkriteria.length" scope="col"
                                                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                {{  sub.kode  }}
                                            </th>
                                            <th v-else @click="sorting(`nilai.${sub.k_sc}`, true)" rowspan="2"
                                                scope="col"
                                                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                                {{  sub.kode  }}
                                            </th>
                                        </template>
                                        <template v-for="sub in state.subkriteria" :key="sub.id_sk1">
                                            <th v-if="sub.subkriteria" :colspan="sub.subkriteria.length + 2" scope="col"
                                                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                {{  sub.kode  }}
                                            </th>
                                            <th v-else @click="sorting(`normalisasi.${sub.k_sc}`, true)" rowspan="2"
                                                scope="col"
                                                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                                {{  sub.kode  }}
                                            </th>
                                        </template>
                                    </tr>
                                    <tr>
                                        <template v-for="subk in state.subkriteria" :key="subk.id_k1">
                                            <template v-for="subkk in subk.subkriteria" :key="subkk.id_sk1">
                                                <th @click="sorting(`nilai.${subk.k_sc}.${subkk.sk_sc}`, true)"
                                                    scope="col"
                                                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                                    {{  subkk.kode  }}
                                                </th>
                                            </template>
                                        </template>
                                        <template v-for="subk in state.subkriteria" :key="subk.id_k1">
                                            <template v-for="subkk in subk.subkriteria" :key="subkk.id_sk1">
                                                <th @click="sorting(`normalisasi.${subk.k_sc}.${subkk.sk_sc}`, true)"
                                                    scope="col"
                                                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-gray-400">
                                                    {{  subkk.kode  }}
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
                                            {{  peserta1.nim  }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {{  peserta1.nama  }}
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
                                                        {{  peserta1.nilai[k.k_sc][subk.sk_sc]  }}
                                                    </td>
                                                </template>
                                                <template v-else>
                                                    <td
                                                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                        {{  peserta1.nilai[k.k_sc]  }}
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
                                                        :class="[warna(peserta1.normalisasi[k.k_sc][subk.sk_sc]), 'px-6', 'py-4', 'text-sm', 'text-gray-500', 'whitespace-nowrap', 'dark:text-gray-400']">
                                                        {{  peserta1.normalisasi[k.k_sc][subk.sk_sc]  }}
                                                    </td>
                                                    <td
                                                        :class="[warna(peserta1.normalisasi[k.k_sc].total), 'px-6', 'py-4', 'text-sm', 'text-gray-500', 'whitespace-nowrap', 'dark:text-gray-400']">
                                                        {{  peserta1.normalisasi[k.k_sc].total  }}
                                                    </td>
                                                    <td
                                                        :class="[warna(peserta1.new_norm[k.k_sc]), 'px-6', 'py-4', 'text-sm', 'text-gray-500', 'whitespace-nowrap', 'dark:text-gray-400']">
                                                        {{  peserta1.new_norm[k.k_sc]  }}
                                                    </td>
                                                </template>
                                                <template v-else>
                                                    <td
                                                        :class="[warna(peserta1.normalisasi[k.k_sc]), 'px-6', 'py-4', 'text-sm', 'text-gray-500', 'whitespace-nowrap', 'dark:text-gray-400']">
                                                        {{  peserta1.normalisasi[k.k_sc]  }}
                                                    </td>
                                                </template>
                                            </template>
                                        </template>
                                        <td
                                            :class="[warna(peserta1.total), 'px-6', 'py-4', 'text-sm', 'text-gray-500', 'whitespace-nowrap', 'dark:text-gray-400']">
                                            {{  peserta1.total  }}
                                        </td>
                                        <td
                                            :class="[warna(peserta1.total), 'px-6', 'py-4', 'text-sm', 'text-gray-500', 'whitespace-nowrap', 'dark:text-gray-400']">
                                            {{  parseFloat(peserta1.total * 100).toFixed(1)  }}
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

<script setup>
import { onMounted, ref, reactive, computed, watchEffect } from 'vue'
import penilaianAPI from "./../../../api/listPeserta/tahap1/peserta";
import kriteriaAPI from "./../../../api/listKriteria/tahap1/kriteria1";
import subKriteriaAPI from "./../../../api/listKriteria/tahap1/subkriteria1";
import fakultas from "./../../../api/fakultas"
import vue3Slider from "@vueform/slider"

const state = reactive({
    peserta1: [],
    penilaian1: [],
    subkriteria: [],
    kriteria: [],
    fakultas: [],
    currentSort: 'nim',
    currentSortDir: 'asc',
    listSubKriteria: [],
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

onMounted(() => {
    subKriteriaAPI.index()
        .then((response) => {
            state.subkriteria = response.data.data
        }).catch((err) => {
            console.log(err.response.data)
        });
    kriteriaAPI.index()
        .then((response) => {
            state.kriteria = response.data.data
        }).catch((err) => {
            console.log(err.response.data)
        });
    penilaianAPI.index()
        .then((response) => {
            state.peserta1 = response.data.data
        }).catch((err) => {
            console.log(err.response.data)
        });
    fakultas.index()
        .then((response) => {
            state.fakultas = response.data.data
        })
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
    for (let i = 0; i < state.subkriteria.length; i++) {
        const outer = state.subkriteria[i];
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

function filterNilaiByParameters(nilai) {
    const obj = []
    for (let i = 0; i < state.subkriteria.length; i++) {
        const outer = state.subkriteria[i];
        if (outer.subkriteria) {
            for (let j = 0; j < outer.subkriteria.length; j++) {
                const inner = outer.subkriteria[j];
                let props1 = `${outer.k_sc}_${inner.sk_sc}`;
                obj[`filterNilaiBy${props1}`] = () => {
                    return nilai.filter(
                        nilai.normalisasi[props1] >= filterCalc[props1][0] &&
                        nilai.normalisasi[props1] <= filterCalc[props1][1]
                    )
                }
            }
        } else {
            let props2 = `${outer.k_sc}`;
            obj[`filterNilaiBy${props2}`] = () => {
                return nilai.filter(
                    nilai.normalisasi[props2] >= filterCalc[props2][0] &&
                    nilai.normalisasi[props2] <= filterCalc[props2][1]
                )
            }
        }
    }
    return obj
}

const filteredFakultas = computed(() => {
    return state.fakultas.filter((f) => {
        if (filterCalc.bidang_fak == '') return true;
        return f.bidang_fakultas.bidang_fak === filterCalc.bidang_fak
    })
})

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

const filteredData = computed(() => {
    return filterNilaiByParameters(sortedData)
})

function warna(value) {
    if (value >= 0.8) return 'text-gray-50 bg-green-400 dark:bg-green-800 dark:text-gray-100'
    if (value >= 0.5 && value <= 0.8) return 'text-gray-500 bg-yellow-300 dark:bg-yellow-600 dark:text-gray-100'
    if (value <= 0.5) return 'text-gray-50 bg-red-400 dark:bg-red-800 dark:text-gray-100'
    return 'bg-white'
    //sesuaikan saja
}
function warnaLulus(value) {
    if (value >= 80) return 'text-gray-50 bg-green-400 dark:bg-green-800 dark:text-gray-100'
    if (value >= 50 && value <= 80) return 'text-gray-500 bg-yellow-300 dark:bg-yellow-600 dark:text-gray-100'
    if (value <= 50) return 'text-gray-50 bg-red-400 dark:bg-red-800 dark:text-gray-100'
    return 'bg-white'
    //sesuaikan saja
}
</script>