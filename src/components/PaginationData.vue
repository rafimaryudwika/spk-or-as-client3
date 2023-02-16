<template>
    <nav aria-label="Page navigation">
        <ul class="inline-flex items-center -space-x-px">
            <li>
                <a href="#" @click="prevPage"
                    class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Previous</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </li>
            <li v-for="pages in pagesComputed" :key="pages.name">
                <a href="#" @click="clickPage(pages.name)"
                    :class="[isPageActive(pages.name), 'px-3', 'py-2', 'leading-tight', 'text-gray-500', 'bg-white', 'border', 'border-gray-300', 'hover:bg-gray-100', 'hover:text-gray-700', 'dark:bg-gray-800', 'dark:border-gray-700', 'dark:text-gray-400', 'dark:hover:bg-gray-700', 'dark:hover:text-white']"
                    :disabled="pages.isDisabled">
                    {{ pages.name }}</a>
            </li>

            <li>
                <a href="#" @click="nextPage"
                    class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Next</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue'

const props = defineProps({
    table: Object,
    pageSize: {
        type: Number,
        required: true,
        default: 10
    },
    currentPage: {
        type: Number,
        required: true,
    }
})

const emit = defineEmits(['pageChanged'])

function nextPage() {
    if ((props.currentPage * props.pageSize) < props.table.length) emit('pageChanged', props.currentPage++);
}

function prevPage() {
    if (props.currentPage > 1) emit('pageChanged', props.currentPage--);
}

function clickPage(page) {
    emit('pageChanged', page);
}

function isPageActive(page) {
    if (props.currentPage == page) return "z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
}

const pagesComputed = computed(() => {
    let pageCount = Math.ceil(props.table.length / props.pageSize)
    const page = []
    for (let i = 1; i <= pageCount; i++) {
        page.push({
            name: i,
            isDisabled: i == props.currentPage
        })
    }
    return page;
})
</script>