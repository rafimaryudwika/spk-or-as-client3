<template>
    <div class="flex-1">
        <div class="col-12">
            <h1 class="px-6 py-6 mb-6 text-3xl font-extrabold">
                Edit Data Nilai Peserta
            </h1>
        </div>
        <div class="col-12">
            <div class="flex-1">
                <div class="overflow-y-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-clip sm:px-6 lg:px-12">
                        <div class="overflow-hidden shadow-md sm:rounded-lg">
                            <form
                                class="space-y-6"
                                v-on:submit.prevent="update()"
                            >
                                <div class="space-y-4 rounded-md shadow-sm">
                                    <div>
                                        <label
                                            for="name"
                                            class="block text-sm font-medium text-gray-700 "
                                            >Name</label
                                        >
                                        <div class="mt-1">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                v-model="company.name"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            for="email"
                                            class="block text-sm font-medium text-gray-700 "
                                            >Email</label
                                        >
                                        <div class="mt-1">
                                            <input
                                                type="text"
                                                name="email"
                                                id="email"
                                                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                v-model="company.email"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            for="address"
                                            class="block text-sm font-medium text-gray-700 "
                                            >Address</label
                                        >
                                        <div class="mt-1">
                                            <input
                                                type="text"
                                                name="address"
                                                id="address"
                                                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                v-model="company.address"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            for="website"
                                            class="block text-sm font-medium text-gray-700 "
                                            >Website</label
                                        >
                                        <div class="mt-1">
                                            <input
                                                type="text"
                                                name="website"
                                                id="website"
                                                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                v-model="company.website"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md  ring-gray-300 hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25"
                                >
                                    Save
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
export default {
    setup() {
        let penilaian1 = reactive({
            nim: '',
            id_sk1: '',
            nilai: '',
        })

        const validation = ref([])

        const router = useRouter()

        const route = useRoute()

        onMounted(() => {
            axios
                .get('http://127.0.0.1:8000/api/penilaian1/${route.params.nim}')
                .then((result) => {})
                .catch((err) => {})
        })

        function update() {
            axios
                .put(
                    'http://127.0.0.1:8000/api/penilaian1/${route.params.nim}',
                    penilaian1
                )
                .then(() => {
                    router
                        .push({
                            name: 'penilaian1.index',
                        })
                        .catch((err) => {
                            validation.value = err.response.data
                        })
                })
        }
    },
}
</script>

<style>
</style>