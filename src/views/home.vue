<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="flex-1 bg-white dark:bg-gray-800">
        <div class="col-6">
            <h1 class="px-6 py-6 text-3xl font-extrabold dark:text-gray-200">
                Dashboard
            </h1>
        </div>
        <div class="p-2">
            <div id="alert-5" class="flex p-4 bg-gray-100 rounded-lg dark:bg-gray-700" role="alert">
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-700 dark:text-gray-300"
                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"></path>
                </svg>
                <span class="sr-only">Info</span>
                <div class="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Halaman ini merupakan halaman utama sekaligus untuk melihat data fakta Open Recruitment.
                </div>
                <button type="button"
                    class="ml-auto -mx-1.5 -my-1.5 bg-gray-100 text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 p-1.5 hover:bg-gray-200 inline-flex h-8 w-8 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    data-dismiss-target="#alert-5" aria-label="Close">
                    <span class="sr-only">Dismiss</span>
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </div>

        <div class="grid max-h-full grid-cols-3">
            <div class="m-2 col-6">
                <BarChart :chartData="chartFakultas" :options="optionsFakultas" />
            </div>
            <div class="col-span-2 m-2 col-6">
                <LineChart :chartData="chartGrafikPendaftar" :options="optionsGrafikPendaftar" />
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
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted, watchEffect, computed } from 'vue';
import { BarChart, DoughnutChart, LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";
import chart from "./../api/chart"

Chart.register(...registerables);

onMounted(() => {
    chart.index()
        .then((response) => {
            // state.chart = response.data.data
            console.log(response.data.data.bp)
            for (let i = 0; i < response.data.data.gender.length; i++) {
                chartGender.labels.push(response.data.data.gender[i].gender.gender);
                chartGender.datasets[0].data.push(response.data.data.gender[i].total);
            }
            for (let i = 0; i < response.data.data.fakultas.length; i++) {
                chartFakultas.labels.push(response.data.data.fakultas[i].fakultas.fakultas);
                chartFakultas.datasets[0].data.push(response.data.data.fakultas[i].total);
            }
            for (let i = 0; i < response.data.data.bp.length; i++) {
                chartBP.labels.push(response.data.data.bp[i].bp);
                chartBP.datasets[0].data.push(response.data.data.bp[i].total);
            }
            for (let i = 0; i < response.data.data.tgl_daftar.length; i++) {
                chartGrafikPendaftar.labels.push(response.data.data.tgl_daftar[i].date);
                chartGrafikPendaftar.datasets[0].data.push(response.data.data.tgl_daftar[i].total);
            }
            for (let i = 0; i < response.data.data.bidang_fakultas.length; i++) {
                chartBidangFak.labels.push(response.data.data.bidang_fakultas[i].bidang_fak);
                chartBidangFak.datasets[0].data.push(response.data.data.bidang_fakultas[i].total);
            }
        })
})

const count = function (ary, classifier) {
    classifier = classifier || String;
    return ary.reduce(function (counter, item) {
        var p = classifier(item);
        counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
        return counter;
    }, {})
};

const chartFakultas = reactive({
    labels: [],
    datasets: [
        {
            data: [],
            backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
    ],
});

const optionsFakultas = ref({
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Jumlah Pendaftar Berdasarkan Fakultas',
        },
    },
});

const chartGender = reactive({
    labels: [],
    datasets: [
        {
            data: [],
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
    labels: [],
    datasets: [
        {
            data: [],
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
    labels: [],
    datasets: [
        {
            data: [],
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
    labels: [],
    datasets: [
        {
            data: [],
            backgroundColor: ['#77CEFF'],
            borderColor: ['#0079AF'],
        },
    ],
});

const optionsGrafikPendaftar = ref({
    responsive: true,
    plugins: {
        legend: {
            display: false
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