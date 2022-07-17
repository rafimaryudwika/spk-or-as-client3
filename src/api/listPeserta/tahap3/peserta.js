import http from './../../config'

export default {
    index(params) {
        return http.get('/penilaian3', {
            params: params,
        })
    },

    calc(params) {
        return http.get('/penilaian3/calculate', {
            params: params,
        })
    },

    lulus(id, data) {
        return http.put('/penilaian3/lulus/' + id, data)
    },

    show(id) {
        return http.get('/penilaian3/show/' + id)
    },

    import() {
        return http.post('/penilaian3/import')
    },

    update(id, data) {
        return http.put('/penilaian3/' + id, data)
    },

    create(data) {
        return http.post('/penilaian3', data)
    },

    delete(id) {
        return axios.delete('/penilaian3/' + id)
    },
}
