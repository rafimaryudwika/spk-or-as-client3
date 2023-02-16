<template>
    <div class="flex-1 bg-white dark:bg-gray-800">
        <div class="col-6">
            <h1 class="px-6 py-6 text-3xl font-extrabold dark:text-gray-200">
                Data Kalkulasi Penilaian Tahap 1
            </h1>
        </div>
        <Alert>Halaman ini berfungsi untuk menentukan keputusan siapa yang akan lulus dan tidak lulus.<br>
            Halaman kalkulasi ini dibantu dengan filter berdasarkan profil dan latar belakang peserta serta
            filter berdasarkan rentang penilaian total, hal ini memudahkan pengguna menentukan keputusan
            berdasarkan penilaian dan profil.<br>
            Selain filtering, halaman kalkulasi ini dibantu dengan pewarnaan tabel berdasarkan rentang penilaian
            sehingga pengguna bisa memutuskan siapa yang layak diluluskan berdasarkan penilaian.<br>
            Gunakan filtering dan pewarnaan tabel sebijaknya agar pengguna bisa meluluskan peserta yang tepat.
            Klik tombol <b>Evaluasi</b> untuk melakukan evaluasi peserta yang diinginkan.</Alert>
        <Table :kriteria="state.kriteria" :subkriteria="state.subkriteria" :listSubKriteria="state.listSubKriteria"
            :peserta1="state.peserta1" :fakultas="state.fakultas" :conditionalLength="state.conditionalLength" />
    </div>
</template>

<script async setup>
import { onMounted, reactive } from 'vue'
import calc from "./../../../api/calc";
import Alert from "./../../../components/AlertComponent.vue"
import Table from "./../../../components/kalkulasi/TabelSeleksi.vue"

const state = reactive({
    peserta1: [],
    penilaian1: [],
    subkriteria: [],
    kriteria: [],
    fakultas: [],
    listSubKriteria: [],
    conditionalLength: []
})

onMounted(() => {
    calc.tahap1()
        .then((response) => {
            state.kriteria = response.data.data.kriteria
            state.subkriteria = response.data.data.subkriteria
            state.listSubKriteria = response.data.data.subkriteriatranspose
            state.peserta1 = response.data.data.penilaian
            state.fakultas = response.data.data.fakultas
            state.conditionalLength = state.subkriteria.filter(item => 'subkriteria' in item).length * 2 // next time pindahin ke backend
        })
})
</script>