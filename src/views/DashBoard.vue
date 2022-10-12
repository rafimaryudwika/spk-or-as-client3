<template>
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <Component :is="Component" />
        </transition>
    </router-view>
</template>

<script>
import SideBar from './../components/SideBar.vue';

export default {
    name: 'spk-or-as-app',
    components: {
        SideBar,
    },
    setup() { },
}
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