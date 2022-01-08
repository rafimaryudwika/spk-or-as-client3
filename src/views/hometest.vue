<template>
    <ProductTable />
    <UserTable />
</template>

<script>
import ProductTable from './test/ProductTable.vue'
import UserTable from './test/UserTable.vue'
export default {
    name: 'HomePage',
    components: {
        ProductTable,
        UserTable,
    },
}
</script>

<style>
table {
    border: 1px solid rgb(13, 58, 126);
}
th {
    background: rgb(183, 202, 245);
    border: 1px solid black;
    padding: 4px 10px 4px 10px;
}
td {
    border: 1px solid rgb(185, 221, 245);
    padding: 4px;
}
button {
    background: rgb(183, 202, 245);
    border: 1px solid #999;
    padding: 4px;
    font-size: 0.9rem;
    margin-top: 10px;
    margin-bottom: 10px;
}
button:hover {
    cursor: pointer;
    background: rgb(102, 138, 221);
}
</style>