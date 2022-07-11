<template>
    <ul class="inline-flex items-center -space-x-px">
        <li>
            <a href="#"
                class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                type="button" @click="onClickFirstPage" :disabled="isInFirstPage" aria-label="Go to first page">
                First
            </a>
        </li>

        <li>
            <a href="#"
                class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                type="button" @click="onClickPreviousPage" :disabled="isInFirstPage" aria-label="Go to previous page">
                <span class="sr-only">Previous</span>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                </svg>
            </a>
        </li>

        <li v-for="page in pages" :key="page.name">
            <a type="button" @click="onClickPage(page.name)" :disabled="page.isDisabled"
                :class="[isPageActive(page.name), 'py-2', 'px-3', 'leading-tight', 'text-gray-500', 'bg-white', 'border', 'border-gray-300', 'hover:bg-gray-100', 'hover:text-gray-700', 'dark:bg-gray-800', 'dark:border-gray-700', 'dark:text-gray-400', 'dark:hover:bg-gray-700', 'dark:hover:text-white']"
                :aria-label="`Go to page number ${page.name}`">
                {{ page.name }}
            </a>
        </li>

        <li>
            <a href="#"
                class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                type="button" @click="onClickNextPage" :disabled="isInLastPage" aria-label="Go to next page">
                <span class="sr-only">Next</span>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"></path>
                </svg>
            </a>
        </li>

        <li>
            <a href="#"
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                type="button" @click="onClickLastPage" :disabled="isInLastPage" aria-label="Go to last page">
                Last
            </a>
        </li>
    </ul>
</template>

<script setup>
import { reactive, computed, defineEmits } from 'vue'

const emit = defineEmits(['page-changed'])

const state = reactive({
    maxVisibleButtons: {
        type: Number,
        required: false,
        default: 3
    },
    totalPages: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    perPage: {
        type: Number,
        required: true
    },
    currentPage: {
        type: Number,
        required: true
    },
})

const startPage = computed(() => {
    if (state.currentPage === 1) {
        return 1;
    }
    if (state.currentPage === state.totalPages) {
        return state.totalPages - state.maxVisibleButtons + 1;
    }
    return state.currentPage - 1;
})
const endPage = computed(() => {
    return Math.min(startPage.value + state.maxVisibleButtons - 1, state.totalPages);
})
const pages = computed(() => {
    const range = [];
    for (let i = startPage.value; i <= endPage.value; i += 1) {
        range.push({
            name: i,
            isDisabled: i === state.currentPage
        });
    }
    return range;
})
const isInFirstPage = computed(() => {
    return state.currentPage === 1;
})
const isInLastPage = computed(() => {
    return state.currentPage === state.totalPages;
})

function onClickFirstPage() {
    emit('page-changed', 1);
}
function onClickPreviousPage() {
    emit('page-changed', state.currentPage - 1);
}
function onClickPage(page) {
    emit('page-changed', page);
}
function onClickNextPage() {
    emit('page-changed', state.currentPage + 1);
}
function onClickLastPage() {
    emit('page-changed', state.totalPages);
}
function isPageActive(page) {
    return state.currentPage === page, "z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white";
}
</script>