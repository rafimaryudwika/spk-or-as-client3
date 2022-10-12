<template>
    <div class="flex-1 bg-white dark:bg-gray-800">
        <div class="col-6">
            <h1 class="px-6 py-6 text-3xl font-extrabold dark:text-gray-200">
                Edit User
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
                    Halaman ini berfungsi untuk menambah data user.<br>
                    Masukan Nama diinginkan, lalu isi Email, Roles dan Password
                    , Roles berfungsi untuk pembatasan penggunaan fungsi. Jika sudah selesai, klik tombol
                    <b>Submit</b>.<br>
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
                            <form @submit.prevent="store()">
                                <div class="mb-6">
                                    <label for="nama"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama
                                    </label>
                                    <input type="text" id="nama"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required v-model="inputUser.name" />
                                    <p v-if="validation.name" class="mt-2 text-sm text-red-600 dark:text-red-500">
                                        {{ validation.name[0] }}</p>
                                </div>
                                <div class="mb-6">
                                    <label for="email"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                                    <input type="text" id="email"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required v-model="inputUser.email" />
                                    <p v-if="validation.email" class="mt-2 text-sm text-red-600 dark:text-red-500">
                                        {{ validation.email[0] }}</p>
                                </div>
                                <div class="mb-6">
                                    <label for="roles"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Roles</label>
                                    <select id="roles" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                                    required " v-model="inputUser.roles">
                                        <option value="1">Admin</option>
                                        <option value="2">Panitia</option>
                                        <option value="3">Penilai</option>
                                    </select>
                                    <p v-if="validation.roles" class="mt-2 text-sm text-red-600 dark:text-red-500">
                                        {{ validation.roles[0] }}</p>
                                </div>
                                <div class="mb-6">
                                    <label for="password"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                                    <input type="password" id="password"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required v-model="inputUser.password" />
                                    <p v-if="validation.password" class="mt-2 text-sm text-red-600 dark:text-red-500">
                                        {{ validation.password[0] }}</p>
                                </div>
                                <div class="mb-6">
                                    <label for="password_confirm"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm
                                        Password</label>
                                    <input type="password" id="password_confirm"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required v-model="inputUser.password_confirmation" />

                                </div>
                                <button type="submit"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import userAPI from "./../../api/users";
import { onMounted, reactive, ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

let inputUser = reactive({
    name: '',
    email: '',
    roles: '',
    password: '',
    password_confirmation: ''
})

const route = useRoute()

const validation = ref([]);
const router = useRouter();
function store() {
    userAPI.create(inputUser)
        .then(() => {
            router.push({
                name: 'users.index'
            })
        }).catch((err) => {
            validation.value = err.response.data
        });
}

</script>