<template>
    <div class="flex-1 bg-white dark:bg-gray-800">
        <div class="col-6">
            <h1 class="px-6 py-6 text-3xl font-extrabold dark:text-gray-200">
                Detail Pendaftar
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
                    Halaman ini berfungsi untuk melihat detail dan biodata peserta yang sedang kita lihat.
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
                <div class="sm:-mx-6 lg:-mx-0">
                    <div class="py-2 inline-clip sm:px-6 lg:px-4">
                        <div class="container p-5 mx-auto my-5">
                            <div class="md:flex no-wrap md:-mx-2 ">
                                <!-- Left Side -->
                                <div class="w-full md:w-3/12 md:mx-2">
                                    <!-- Profile Card -->
                                    <div class="p-3 bg-white border-t-4 border-blue-600 dark:bg-gray-900 ">
                                        <div class="overflow-hidden image">
                                            <img class="w-full h-auto mx-auto" src="" alt="">
                                        </div>
                                        <h1 class="my-1 text-xl font-bold leading-8 text-gray-900 dark:text-gray-200">{{
                                                state.pendaftar?.nama
                                        }}</h1>
                                        <h3 class="leading-6 text-gray-600 dark:text-gray-400 font-lg text-semibold">
                                            Fakultas
                                            {{ state.pendaftar?.detail?.fakultas }}</h3>
                                        <h3 class="leading-6 text-gray-600 dark:text-gray-400 font-lg text-semibold">
                                            Jurusan
                                            {{ state.pendaftar?.detail?.jurusan }}</h3>
                                        <p class="text-sm leading-6 text-gray-500 hover:text-gray-600"></p>
                                        <!--  <ul
                                            class="px-3 py-2 mt-3 text-gray-600 bg-gray-100 divide-y rounded shadow-sm dark:bg-gray-800 dark:text-gray-500 hover:text-gray-700 hover:dark:text-gray-400 hover:shadow">
                                            <li class="flex items-center py-3">
                                                <span>Daftar Ulang</span>
                                                <span class="ml-auto"><span v-if="state.pendaftar.daftar_ulang == 1"
                                                        class="px-2 py-1 text-sm text-white bg-green-500 rounded">Sudah</span><span
                                                        v-else
                                                        class="px-2 py-1 text-sm text-white bg-red-500 rounded">Belum</span></span>
                                            </li>
                                            <li class="flex items-center py-3">
                                                <span>Mendaftar sejak </span>
                                                <span class="ml-auto">{{ state.date
                                                }}</span> 
                                            </li> 
                                        </ul> -->
                                    </div>
                                    <!-- End of profile card -->
                                    <div class="my-4"></div>
                                </div>
                                <!-- Right Side -->
                                <div class="w-full h-64 mx-2 md:w-9/12">
                                    <!-- Profile tab -->
                                    <!-- About Section -->
                                    <div class="p-3 bg-white rounded-sm shadow-sm dark:bg-gray-900">
                                        <div
                                            class="flex items-center space-x-2 font-semibold leading-8 text-gray-900 dark:text-gray-50">
                                            <span clas="text-green-500">
                                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </span>
                                            <span class="tracking-wide">Biodata</span>
                                        </div>
                                        <div class="text-gray-700 dark:text-gray-200">
                                            <div class="grid text-sm md:grid-cols-2">
                                                <div class="grid grid-cols-2">
                                                    <div class="px-4 py-2 font-semibold">Panggilan</div>
                                                    <div class="px-4 py-2">{{ state.pendaftar?.detail?.nama_panggilan
                                                    }}
                                                    </div>
                                                </div>
                                                <div class="grid grid-cols-2">
                                                    <div class="px-4 py-2 font-semibold">NIM</div>
                                                    <div class="px-4 py-2">{{ state.pendaftar?.nim }}</div>
                                                </div>
                                                <div class="grid grid-cols-2">
                                                    <div class="px-4 py-2 font-semibold">Gender</div>
                                                    <div class="px-4 py-2">{{ state.pendaftar?.detail?.gender }}</div>
                                                </div>
                                                <div class="grid grid-cols-2">
                                                    <div class="px-4 py-2 font-semibold">No Telepon</div>
                                                    <div class="px-4 py-2">0{{ state.pendaftar?.detail?.nomor_hp }}
                                                    </div>
                                                </div>
                                                <div class="grid grid-cols-2">
                                                    <div class="px-4 py-2 font-semibold">Email.</div>
                                                    <div class="px-4 py-2">
                                                        <a class="text-blue-800 dark:text-blue-500" href="mailto:">{{
                                                                state.pendaftar?.detail?.e_mail
                                                        }}</a>
                                                    </div>
                                                </div>
                                                <div class="grid grid-cols-2">
                                                    <div class="px-4 py-2 font-semibold">Alamat di Padang</div>
                                                    <div class="px-4 py-2">{{ state.pendaftar?.detail?.alamat_di_padang
                                                    }}
                                                    </div>
                                                </div>
                                                <div class="grid grid-cols-2">
                                                    <div class="px-4 py-2 font-semibold">Tempat/Tanggal Lahir</div>
                                                    <div class="px-4 py-2">{{ state.pendaftar?.detail?.tempat_lahir }} /
                                                        {{
                                                                state.pendaftar?.detail?.tanggal_lahir
                                                        }}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End of about section -->

                                    <div class="my-4"></div>
                                    <!-- Experience and education -->
                                    <div class="p-3 bg-white rounded-sm shadow-sm dark:bg-gray-900">
                                        <div class="grid grid-cols-2">
                                            <div>
                                                <div
                                                    class="flex items-center mb-3 space-x-2 font-semibold leading-8 text-gray-900 dark:text-gray-200">
                                                    <span clas="text-green-500">
                                                        <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                        </svg>
                                                    </span>
                                                    <span class="tracking-wide">Informasi</span>
                                                </div>
                                                <ul class="space-y-2 list-inside">
                                                    <li>
                                                        <div class="text-xs text-gray-500 dark:text-gray-400">Jenis Tes
                                                            Bakat</div>
                                                        <div class="text-gray-500 dark:text-gray-300">Fotografi
                                                        </div>

                                                    </li>
                                                    <!-- <li>
                                                        <div class="text-teal-600">Owner at Her Company Inc.</div>
                                                        <div class="text-xs text-gray-500">March 2020 - Now</div>
                                                    </li>
                                                    <li>
                                                        <div class="text-teal-600">Owner at Her Company Inc.</div>
                                                        <div class="text-xs text-gray-500">March 2020 - Now</div>
                                                    </li>
                                                    <li>
                                                        <div class="text-teal-600">Owner at Her Company Inc.</div>
                                                        <div class="text-xs text-gray-500">March 2020 - Now</div>
                                                    </li> -->
                                                </ul>
                                            </div>
                                            <!-- <div>
                                                <div
                                                    class="flex items-center mb-3 space-x-2 font-semibold leading-8 text-gray-900 dark:text-gray-200">
                                                    <span clas="text-green-500">
                                                        <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke="currentColor">
                                                            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                                            <path fill="#fff"
                                                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                                        </svg>
                                                    </span>
                                                    <span class="tracking-wide">Education</span>
                                                </div>
                                                <ul class="space-y-2 list-inside">
                                                    <li>
                                                        <div class="text-teal-600">Masters Degree in Oxford</div>
                                                        <div class="text-xs text-gray-500">March 2020 - Now</div>
                                                    </li>
                                                    <li>
                                                        <div class="text-teal-600">Bachelors Degreen in LPU</div>
                                                        <div class="text-xs text-gray-500">March 2020 - Now</div>
                                                    </li>
                                                </ul>
                                            </div> -->
                                        </div>
                                        <!-- End of Experience and education grid -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import http from "./../../../http-common";
import { useRouter, useRoute } from 'vue-router'

const state = reactive({
    pendaftar: [],
})
const route = useRoute()
onMounted(() => {
    http
        .get(`/penilaian2/show2/${route.params.id}`)
        .then((response) => {
            state.pendaftar = response.data.data[0]
            console.log(state.pendaftar)

        })
})
</script>

<style>
</style>