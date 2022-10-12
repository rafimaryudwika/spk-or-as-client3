<template>
   <aside class="sticky top-0 h-screen">
      <div
         class="flex flex-col fixed inset-y-0 top-0 left-0 w-64 h-full px-2 space-y-6 text-blue-100 transition duration-200 ease-in-out transform -translate-x-full bg-blue-800 shadow-lg dark:bg-blue-900 sidebar py-7 md:relative md:translate-x-0">
         <!-- logo -->
         <a href="#" class="flex items-center px-4 space-x-2 text-white dark:text-gray-200">
            <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <span class="text-2xl font-extrabold ">Better Dev</span>
         </a>
         <!-- nav -->
         <nav class="flex flex-col flex-wrap h-full">
            <ul class="flex-1 space-y-2 overflow-y-auto">
               <li>
                  <router-link :to="{
                     name: 'home',
                  }" href=""
                     class="flex items-center p-2 text-base font-normal rounded-lg hover:bg-blue-700 hover:dark:bg-blue-800">
                     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                           d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                        </path>
                     </svg>
                     <span class="ml-3">Beranda</span>
                  </router-link>
               </li>
               <li v-if="role == 'admin'">
                  <router-link :to="{
                     name: 'users.index',
                  }" href=""
                     class="flex items-center p-2 text-base font-normal rounded-lg hover:bg-blue-700 hover:dark:bg-blue-800">
                     <svg class="w-6 h-6" data-darkreader-inline-stroke="" fill="none" stroke="currentColor"
                        style="--darkreader-inline-stroke:currentColor;" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                           d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                        </path>
                     </svg>
                     <span class="ml-3">Kelola Pengguna</span>
                  </router-link>
               </li>
               <li>
                  <router-link :to="{
                     name: 'pendaftar.index',
                  }" href=""
                     class="flex items-center p-2 text-base font-normal rounded-lg dark:text-gray-200 hover:bg-blue-700 hover:dark:bg-blue-800">
                     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                           d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                     </svg>
                     <span class="ml-3">Data Pendaftar</span>
                  </router-link>
               </li>
               <li>
                  <button type="button"
                     class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-blue-700 dark:text-gray-200 hover:dark:bg-blue-800"
                     aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                           d="M4 6h16M4 12h16M4 18h16"></path>
                     </svg>
                     <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Tahap 1</span>
                     <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                           d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                           clip-rule="evenodd"></path>
                     </svg>
                  </button>
                  <ul id="dropdown-example" class="hidden py-2 space-y-2">
                     <li>
                        <router-link :to="{
                           name: 'kriteria1.index',
                        }" href=""
                           class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800">
                           Kriteria</router-link>
                     </li>
                     <li>
                        <router-link :to="{
                           name: 'subkriteria1.index',
                        }" href=""
                           class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800">
                           Subkriteria</router-link>
                     </li>
                     <li>
                        <router-link :to="{
                           name: 'penilaian1.peserta',
                        }" href=""
                           class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800">
                           Peserta</router-link>
                     </li>
                     <li>
                        <router-link :to="{
                           name: 'penilaian1.index',
                        }" href="#"
                           class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800">
                           Penilaian</router-link>
                     </li>
                     <li>
                        <router-link :to="{
                           name: 'penilaian1.calculate',
                        }" href=""
                           class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800">
                           Kalkulasi</router-link>
                     </li>
                     <li>
                        <router-link :to="{
                           name: 'penilaian1.kelulusan',
                        }" href=""
                           class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800">
                           Kelulusan</router-link>
                     </li>
                  </ul>
               </li>
               <li>
                  <button type="button"
                     class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800"
                     aria-controls="dropdown-subkriteria" data-collapse-toggle="dropdown-subkriteria">
                     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                           d="M4 6h16M4 12h16M4 18h16"></path>
                     </svg>
                     <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Tahap 2</span>
                     <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                           d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                           clip-rule="evenodd"></path>
                     </svg>
                  </button>
                  <ul id="dropdown-subkriteria" class="hidden py-2 space-y-2">
                     <li>
                        <router-link :to="{
                           name: 'kriteria2.index',
                        }" href=""
                           class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800">
                           Kriteria</router-link>
                     </li>
                     <li>
                        <router-link :to="{
                           name: 'subkriteria2.index',
                        }" href=""
                           class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800">
                           Subkriteria</router-link>
                     </li>
                     <li>
                        <router-link :to="{
                           name: 'penilaian2.peserta',
                        }" href="#"
                           class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800">
                           Peserta</router-link>
                     </li>
                     <li>
                        <router-link :to="{
                           name: 'penilaian2.index',
                        }" href="#"
                           class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800">
                           Penilaian</router-link>
                     </li>
                     <li>
                        <router-link :to="{
                           name: 'penilaian2.calculate',
                        }" href="#"
                           class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800">
                           Kalkulasi</router-link>
                     </li>
                     <li>
                        <router-link :to="{
                           name: 'penilaian2.kelulusan',
                        }" href="#"
                           class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800">
                           Kelulusan</router-link>
                     </li>
                  </ul>
               </li>
               <li>
                  <button type="button"
                     class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800"
                     aria-controls="dropdown-peserta" data-collapse-toggle="dropdown-peserta" aria-expanded="false">
                     <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                           d="M4 6h16M4 12h16M4 18h16"></path>
                     </svg>
                     <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Tahap 3</span>
                     <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                           d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                           clip-rule="evenodd"></path>
                     </svg>
                  </button>
                  <ul id="dropdown-peserta" class="hidden py-2 space-y-2">
                     <li>
                        <router-link :to="{
                           name: 'kriteria3.index',
                        }" href="#"
                           class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800">
                           Kriteria</router-link>
                     </li>
                     <li>
                        <router-link :to="{
                           name: 'subkriteria3.index',
                        }" href="#"
                           class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800">
                           Subkriteria</router-link>
                     </li>
                     <li>
                        <router-link :to="{
                           name: 'penilaian3.peserta',
                        }" href="#"
                           class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800">
                           Peserta</router-link>
                     </li>
                     <li>
                        <router-link :to="{
                           name: 'penilaian3.index',
                        }" href="#"
                           class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800">
                           Penilaian</router-link>
                     </li>
                     <li>
                        <router-link :to="{
                           name: 'penilaian3.calculate',
                        }" href="#"
                           class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800">
                           Kalkulasi</router-link>
                     </li>
                     <li>
                        <router-link :to="{
                           name: 'penilaian3.kelulusan',
                        }" href="#"
                           class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800">
                           Kelulusan</router-link>
                     </li>
                  </ul>
               </li>
               <li>
                  <a href=""
                     class="flex items-center p-2 text-base font-normal rounded-lg hover:bg-blue-700 hover:dark:bg-blue-800"
                     @click.prevent="logout">
                     <svg class="w-6 h-6" data-darkreader-inline-stroke="" fill="none" stroke="currentColor"
                        style="--darkreader-inline-stroke:currentColor;" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                           d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                        </path>
                     </svg>
                     <span class="ml-3">Logout</span>
                  </a>
               </li>
            </ul>
            <ul class="flex-none">
               <li class="pl-6 pr-4 py-4 flex items-center justify-between">
                  <div class=" flex justify-between items-center w-full">
                     <div class="flex justify-center items-center  space-x-2">
                        <div>
                           <img class="rounded-full" src="https://i.ibb.co/L1LQtBm/Ellipse-1.png" alt="avatar" />
                        </div>
                        <div class="flex justify-start flex-col items-start">
                           <p class="cursor-pointer text-sm leading-5 text-white">{{ user?.name }}</p>
                           <p class="cursor-pointer text-xs leading-3 text-gray-300">{{ user?.email }}</p>
                        </div>
                     </div>
                     <svg class="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                           d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z"
                           stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                           d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                           stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                  </div>
               </li>
            </ul>
         </nav>
      </div>
   </aside>
</template>


<script setup>
import { computed, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import { useAuth } from './../store/auth'

const state = reactive({
   user: [],
})

const router = useRouter();
const auth = useAuth();

const role = computed(() => {
   return auth.role
})

const user = computed(() => {
   return auth.user
})


const logout = async () => {
   await auth.logout()
   router.replace({
      name: 'login'
   })
}
</script>

<style lang="scss" scoped>

</style>

<style>

</style>