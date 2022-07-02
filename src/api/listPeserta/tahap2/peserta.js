import http from './../../config'

export default {
    index(params) {
        return http.get('/penilaian2', {
            params: params,
        })
    },

    calc(params) {
        return http.get('/penilaian2/calculate', {
            params: params,
        })
    },

    lulus(id, data) {
        return http.put('/penilaian2/lulus/' + id, data)
    },

    show(id) {
        return http.get('/penilaian2/show/' + id)
    },

    create() {
        return http.post('/penilaian2/import')
    },

    update(id, data) {
        return http.put('/penilaian2/' + id, data)
    },

    create(data) {
        return http.post('/penilaian2', data)
    },

    delete(id) {
        return axios.delete('/penilaian2/' + id)
    },
}
