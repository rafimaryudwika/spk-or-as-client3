<template>
   <aside class="sticky top-0 h-screen">
      <div
         class="fixed inset-y-0 top-0 left-0 w-64 h-screen px-2 space-y-6 text-blue-100 transition duration-200 ease-in-out transform -translate-x-full bg-blue-800 shadow-lg dark:bg-blue-900 sidebar py-7 md:relative md:translate-x-0">
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
         <nav>
            <ul class="space-y-2">
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
                        <a href="#"
                           class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800">Kalkulasi</a>
                     </li>
                     <li>
                        <a href="#"
                           class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800">Kelulusan</a>
                     </li>
                  </ul>
               </li>
               <li>
                  <button type="button"
                     class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800"
                     aria-controls="dropdown-peserta" data-collapse-toggle="dropdown-peserta">
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
                        <a href="#"
                           class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800">Kriteria</a>
                     </li>
                     <li>
                        <a href="#"
                           class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800">Subkriteria</a>
                     </li>
                     <li>
                        <a href="#"
                           class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800">Peserta</a>
                     </li>
                     <li>
                        <a href="#"
                           class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800">Penilaian</a>
                     </li>
                     <li>
                        <a href="#"
                           class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800">Kalkulasi</a>
                     </li>
                     <li>
                        <a href="#"
                           class="flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group hover:bg-blue-700 dark:text-white hover:dark:bg-blue-800">Kelulusan</a>
                     </li>
                  </ul>
               </li>
            </ul>
         </nav>
      </div>
   </aside>
</template>

<script>
export default {}
</script>

<style>
</style>