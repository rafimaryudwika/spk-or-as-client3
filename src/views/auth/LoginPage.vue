<template>
    <div class="flex-1 p-8 bg-white dark:bg-gray-800">
        <div class="container flex items-center justify-center h-screen px-4 mx-auto">
            <a
                class="items-center block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Login</h5>
                <form @submit.prevent="login">
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                            email</label>
                        <input v-model="user.email" type="email" class="form-control" required autofocus />
                        <p v-if="validation.email" class="mt-2 text-sm text-red-600 dark:text-red-500">
                            {{ validation.email[0] }}</p>
                    </div>
                    <div class="mb-6">
                        <label for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                            password</label>
                        <input v-model="user.password" type="password" class="form-control" />
                        <p v-if="validation.password" class="mt-2 text-sm text-red-600 dark:text-red-500">
                            {{ validation.password[0] }}</p>
                    </div>
                    <div class="flex items-start mb-6">
                        <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value=""
                                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                required>
                        </div>
                        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember
                            me</label>
                    </div>
                    <button type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
            </a>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router'
import { useAuth } from './../../store/auth';

const router = useRouter()
const store = useAuth();

const user = reactive({
    email: '',
    password: ''
})

const validation = ref([]);

const login = async () => {
    await store.login(user).
        then(() => {
            router.replace({
                name: 'dashboard'
            })
        }).catch((err) => {
            validation.value = err
        });
}
</script>