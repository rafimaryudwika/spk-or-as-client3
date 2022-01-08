<template>
    <table>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
        </tr>
        <tr v-for="user in state.users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
        </tr>
    </table>
    <button @click="orderItems(state.users)">
        Order table ({{ orderState.direction }})
    </button>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import { onMounted, ref, reactive, computed } from 'vue'
import SideBar from './../../components/SideBar.vue'
import order from './../../hooks/order'

export default {
    name: 'pendaftar-index',
    components: {
        SideBar,
    },

    setup() {
        const state = reactive({ pendaftar: [] })

        onMounted(() => {
            axios
                .get('http://127.0.0.1:8000/api/pendaftar')
                .then((response) => {
                    state.pendaftar = response.data
                    console.log(state.pendaftar)
                })
        })

        const { orderItems, orderState } = order()
        orderItems(state.pendaftar)

        return {
            state,
            orderItems,
            orderState,
        }
    },
}
</script>