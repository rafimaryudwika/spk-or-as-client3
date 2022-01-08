<template>
    <table>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>prize</th>
        </tr>
        <tr v-for="product in state.products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.prize }}</td>
        </tr>
    </table>
    <button @click="orderItems(state.products)">
        Order table ({{ orderState.direction }})
    </button>
</template>

<script>
import { reactive } from 'vue'
import order from '../../hooks/order.js'
export default {
    name: 'ProductTable',
    setup() {
        const state = reactive({
            products: [
                { id: 0, name: 'table', prize: '1000' },
                { id: 1, name: 'chair', prize: '2000' },
                { id: 2, name: 'pen', prize: '3000' },
                { id: 3, name: 'notebook', prize: '4000' },
            ],
        })
        const { orderItems, orderState } = order()
        orderItems(state.products)
        return {
            state,
            orderItems,
            orderState,
        }
    },
}
</script>