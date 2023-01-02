<template>
    <div class="flex pb-4">
        <div class="m-1 flex-w-auto">
            <label for="search" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Filter dari
                Nama</label>
            <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
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
            <label for="bp" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Filter dari
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
            <label for="bp" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Filter dari
                Fakultas</label>
            <select id="fakultas"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="filterCalc.fakultas">
                <option value="">None</option>
                <option v-for="fakultas in filteredFakultas" :key="fakultas.id_f" :value="fakultas.fakultas">{{
        fakultas.fakultas
}}</option>
            </select>
        </div>
        <div class="m-1 flex-w-24">
            <label for="bp" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Filter dari
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
            <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Filter dari
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
            <label for="rentang" class="block pb-4 mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Filter
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
</template>

<script setup>
import { onMounted, ref, reactive, computed, watchEffect } from 'vue'
import vue3Slider from "@vueform/slider"

const props = defineProps({
    filteredCalc: Object,
    filterFakultas: Object
})

const filterCalc = computed(() => {
    return props.filteredCalc
})

const filteredFakultas = computed(() => {
    return props.filterFakultas
})
</script>