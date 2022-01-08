<template>
    <aside class="sticky top-0 h-screen">
        <div
            class="fixed inset-y-0 top-0 left-0 w-64 h-screen px-2 space-y-6 text-blue-100 transition duration-200 ease-in-out transform -translate-x-full bg-blue-800 shadow-lg  sidebar py-7 md:relative md:translate-x-0"
        >
            <!-- logo -->
            <a href="#" class="flex items-center px-4 space-x-2 text-white">
                <svg
                    class="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                </svg>
                <span class="text-2xl font-extrabold">Better Dev</span>
            </a>

            <!-- nav -->
            <nav>
                <router-link
                    :to="{
                        name: 'home',
                    }"
                    href="#"
                    class="
                        block
                        py-2.5
                        px-4
                        rounded
                        transition
                        duration-200
                        hover:bg-blue-700 hover:text-white
                    "
                >
                    Beranda
                </router-link>
                <router-link
                    :to="{
                        name: 'pendaftar.index',
                    }"
                    href=""
                    class="
                        block
                        py-2.5
                        px-4
                        rounded
                        transition
                        duration-200
                        hover:bg-blue-700 hover:text-white
                    "
                >
                    Data Pendaftar
                </router-link>
                <router-link
                    :to="{
                        name: 'penilaian1.index',
                    }"
                    href=""
                    class="
                        block
                        py-2.5
                        px-4
                        rounded
                        transition
                        duration-200
                        hover:bg-blue-700 hover:text-white
                    "
                >
                    Data Penilaian
                </router-link>
                <a
                    href=""
                    class="
                        block
                        py-2.5
                        px-4
                        rounded
                        transition
                        duration-200
                        hover:bg-blue-700 hover:text-white
                    "
                >
                    Data Hasil
                </a>
            </nav>
        </div>
    </aside>
</template>

<script>
export default {}
</script>

<style>
</style>