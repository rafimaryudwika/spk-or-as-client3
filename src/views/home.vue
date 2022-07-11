<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="flex-1 bg-white dark:bg-gray-800">
        <div class="col-6">
            <h1 class="px-6 py-6 text-3xl font-extrabold dark:text-gray-200">
                Selamat datang di SPK OR AS
            </h1>
        </div>
        <div class="grid grid-cols-3">
            <div class="m-2 col-6">
                <DoughnutChart :chartData="chartFakultas" :options="optionsFakultas" />
            </div>
            <div class="m-2 col-6">
                <DoughnutChart :chartData="chartGender" :options="optionsGender" />
            </div>
            <div class="m-2 col-6">
                <DoughnutChart :chartData="chartBP" :options="optionsBP" />
            </div>
            <div class="m-2 col-6">
                <DoughnutChart :chartData="chartBidangFak" :options="optionsBidangFak" />
            </div>
            <div class="m-2 col-6">
                <LineChart :chartData="chartGrafikPendaftar" :options="optionsGrafikPendaftar" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { DoughnutChart, LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const chartFakultas = reactive({
    labels: ['Teknik', 'Pertanian', 'Peternakan', 'Hukum', 'Ekonomi'],
    datasets: [
        {
            data: [30, 40, 60, 70, 5],
            backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
    ],
});

const optionsFakultas = ref({
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Jumlah Pendaftar Berdasarkan Fakultas',
        },
    },
});

const chartGender = reactive({
    labels: ['Laki-Laki', 'Perempuan'],
    datasets: [
        {
            data: [30, 40],
            backgroundColor: ['#77CEFF', '#0079AF'],
        },
    ],
});

const optionsGender = ref({
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Jumlah Pendaftar Berdasarkan Gender',
        },
    },
});

const chartBP = reactive({
    labels: ['2018', '2019'],
    datasets: [
        {
            data: [45, 60],
            backgroundColor: ['#77CEFF', '#0079AF'],
        },
    ],
});

const optionsBP = ref({
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Jumlah Pendaftar Berdasarkan BP',
        },
    },
});

const chartBidangFak = reactive({
    labels: ['Soshum', 'Saintek'],
    datasets: [
        {
            data: [45, 60],
            backgroundColor: ['#77CEFF', '#0079AF'],
        },
    ],
});

const optionsBidangFak = ref({
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Jumlah Pendaftar Berdasarkan Bidang Fakultas',
        },
    },
});

const chartGrafikPendaftar = reactive({
    labels: [
        '2020-1-1',
        '2020-1-2',
        '2020-1-3',
        '2020-1-4',
        '2020-1-5',
        '2020-1-6',
        '2020-1-7',
    ],
    datasets: [
        {
            data: [
                5,
                3,
                2,
                6,
                8,
                8,
                12,
            ],
            backgroundColor: ['#77CEFF'],
            borderColor: ['#0079AF'],
        },
    ],
});

const optionsGrafikPendaftar = ref({
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Tren Pendaftaran Hari ke Hari',
        },
    },
});

</script>

<style>
</style>