const { ref } = require("vue")

let penilaian1 = ref([])

axios.get('http://127.0.0.1:8000/api/penilaian1')
                .then((result) => {
                    penilaian1.value = result.data
                })
                .catch((err) => {
                    console.log(err.response)
                })

const data = penilaian1
  const result = [];
  data.forEach(dat => {
    if(!result.find(r => r.nim === dat.nim)) {
      result.push({"nim":dat.nim, "nama": dat.nama})
    }
  });
  data.forEach(dat => {
    let res = result.find(r => r.nim === dat.nim)
    res[dat.id_sk1] = dat.nilai
  });

  console.log(result)