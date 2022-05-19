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
import { reactive } from 'vue'
import order from '../../hooks/order.js'
export default {
    name: 'UserTable',
    setup() {
        const state = reactive({
            users: [
                { id: 0, name: 'John', email: 'john@a.com' },
                { id: 1, name: 'Peter', email: 'peter@a.com' },
                { id: 2, name: 'Dora', email: 'dora@a.com' },
                { id: 3, name: 'Ben', email: 'ben@a.com' },
            ],
        })
        const { orderItems, orderState } = order()
        orderItems(state.users)
        return {
            state,
            orderItems,
            orderState,
        }
    },
}
</script>