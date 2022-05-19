import { onMounted, reactive, watchEffect } from 'vue'
import http from "./../../../http-common.js";

const state = reactive({
  peserta1: [],
  penilaian1: [],
  subkriteria: [],
  result: [],
  peserta1Min: [],
  rs: [],
  merged: [],
})

onMounted(() => {
  http
      .get('/penilaian1')
      .then((response) => {
          state.penilaian1 = response.data.data
      })
//   http
//       .get('/penilaian1/table_sk1')
//       .then((response) => {
//           state.subkriteria = response.data.data
//       })
//   http
//       .get('/penilaian1/peserta1')
//       .then((response) => {
//           state.peserta1 = response.data.data
//       })
})

watchEffect(() => {
  state.penilaian1.forEach((dat) => {
      if (!state.result.find((r) => r.nim === dat.nim)) {
          state.result.push({ nim: dat.nim, nama: dat.nama })
      }
  })
  state.penilaian1.forEach((dat) => {
      let res = state.result.find((r) => r.nim === dat.nim)
      res[dat.id_sk1] = dat.nilai
  })

  state.peserta1Min = state.peserta1.map(
      ({
          bidang_fak,
          fakultas,
          jurusan,
          gender,
          tgl_lahir,
          ...rest
      }) => ({ ...rest })
  )

  const keys = state.result.map((data) =>
      Object.keys(data).filter((key) => !isNaN(parseInt(key)))
  )

  state.peserta1Min.forEach((data, index) => {
      keys[0].forEach((key) => {
          state.peserta1Min[index][key] = null
      })
  })

  state.rs = new Set(state.result.map((n) => n.nim))
  state.merged = [
      ...state.result,
      ...state.peserta1Min.filter((n) => !state.rs.has(n.nim)),
  ]
})