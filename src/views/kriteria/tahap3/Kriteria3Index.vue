<template>
    <div class="flex-1 bg-white dark:bg-gray-800">
        <div class="col-6">
            <h1 class="px-6 py-6 text-3xl font-extrabold dark:text-gray-200">
                Data Kriteria Tahap 3
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
                    Halaman ini berfungsi untuk mengelola kriteria untuk penilaian Sistem Pendukung Keputusan.<br>
                    Untuk memulai penilaian dan pengambilan keputusan, maka tambahkan kriteria dengan klik tombol
                    <b>Tambah</b> dibawah.<br>
                    Jika kriteria sudah ditambah maka pengguna dapat mengisi nilai kriteria tersebut dan jika perlu
                    pengguna bisa mengedit kriteria dengan klik <b>Edit</b> di samping kriteria yang mau diedit.
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
                        <div class="sm:rounded-lg">
                            <div v-if="role === 'admin' || role === 'panitia'" class="col-12">
                                <router-link :to="{
                                    name: 'kriteria3.tambah',
                                }" type="button"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    Tambah</router-link>
                            </div>
                            <table class="min-w-full shadow-md ">
                                <thead class="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Kode
                                        </th>
                                        <th scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Nama
                                        </th>
                                        <th scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Bobot
                                        </th>
                                        <th scope="col" class="relative px-6 py-3">
                                            <span class="sr-only">Aksi</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- Product 1 -->
                                    <tr v-for="kriteria in state.kriteria" :key="kriteria.id_k2"
                                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-600">
                                        <td
                                            class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {{ kriteria.id_k3 }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {{ kriteria.kriteria }}
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                            {{ kriteria.bobot }}
                                        </td>
                                        <td v-if="role === 'admin' || role === 'panitia'"
                                            class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <router-link :to="{
                                                name: 'kriteria3.edit',
                                                params: {
                                                    id: kriteria.id_k3,
                                                },
                                            }"
                                                class="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline">
                                                Edit</router-link>
                                            <a @click.prevent="destroy(kriteria.id_k3)" href=""
                                                class="px-6 py-4 text-sm font-medium text-right text-red-500 whitespace-nowrap">Delete</a>
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
import kriteriaAPI from "./../../../api/listKriteria/tahap3/kriteria3";
import { onMounted, reactive, computed } from 'vue'
import { useAuth } from './../../../store/auth'

const state = reactive({
    kriteria: []
})

const auth = useAuth();

const role = computed(() => {
    return auth.role
})
onMounted(() => {
    kriteriaAPI.index()
        .then((response) => {
            state.kriteria = response.data.data
        }).catch((err) => {

        });
})
const destroy = (id) => {
    if (confirm("Apakah anda yakin menghapus kriteria ini?")) {
        kriteriaAPI.delete(id)
            .then(() => {
                const idToRemove = id;
                const index = state.kriteria.map(function (item) {
                    return item.id
                }).indexOf(idToRemove);
                state.kriteria.splice(index, 1)
            }).catch((err) => {
                alert(err.response.data.message)
            });
    }
}

</script>