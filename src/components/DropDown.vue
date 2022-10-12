<template>
    <li class="block text-sm font-semibold list-none">
        <div class="flex items-center justify-between mb-2 cursor-pointer" @click="toggleShow">
            {{ props.title }}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" :class="{'rotate-90' : showMenu.value}"
                class="dropdown-menu" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
        </div>
        <ul class="ml-4 overflow-hidden font-normal dropdown-menu" :class="custom">
            <slot></slot>
        </ul>
    </li>
</template>

<script>
export default {
    setup() {
        const props = defineProps({ "title": '', "height": '' })

        const data = ref({
            showMenu: false
        })

        const toggleShow = () => {
            showMenu.value = !showMenu.value
        }

        const custom = computed(() => {
            return showMenu.value ? props.height : "h-0";
        })

        return {
            props,
            data,
            toggleShow,
            custom
        }
    }
}



</script>
 
<style>
.dropdown-menu {
    transition: 300ms;
}

svg.rotate-90 {
    transform: rotate(90deg);
}
</style>