<template>
    <!-- mobile menu bar -->
    <div class="flex justify-between text-gray-100 bg-gray-800 md:hidden">
        <!-- logo -->
        <a href="#" class="block p-4 font-bold text-white">Better Dev</a>

        <!-- mobile menu button -->
        <button
            class="p-4 mobile-menu-button focus:outline-none focus:bg-gray-700"
        >
            <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
        </button>
    </div>
</template>

<script>
import SideBar from './SideBar.vue'

export default {
    name: 'NavBar',
    components: {
        SideBar,
    },
}
</script>

<style>
</style>