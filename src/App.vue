<template>

    <div class="relative min-h-screen bg-white md:flex dark:bg-gray-800">
        <SideBar v-show="isLogin" />
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <Component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import SideBar from './components/SideBar.vue';
import { useRouter, useRoute } from 'vue-router'
import { useAuth } from './store/auth'

const route = useRoute()
const auth = useAuth();
const isLogin = computed(() => {
    return auth.isLoggedIn
})
</script>
<style>
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .25s ease-out;
}
</style>