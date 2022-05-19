<template>
    <div class="relative min-h-screen md:flex">
        <SideBar />
        <router-view />
    </div>
</template>

<script>
import SideBar from './components/SideBar.vue';

export default {
    name: 'spk-or-as-app',
    components: {
        SideBar,
    },
    setup() {},
}
</script>
