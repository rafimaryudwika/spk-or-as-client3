import http from './../../config'

export default {
    index(params) {
        return http.get('/penilaian1', {
            params: params,
        })
    },

    calc(params) {
        return http.get('/penilaian1/calculate', {
            params: params,
        })
    },

    lulus(id, data) {
        return http.put('/penilaian1/lulus/' + id, data)
    },

    show(id) {
        return http.get('/penilaian1/show/' + id)
    },

    import() {
        return http.post('/penilaian1/import')
    },

    update(id, data) {
        return http.put('/penilaian1/' + id, data)
    },

    create(data) {
        return http.post('/penilaian1', data)
    },

    delete(id) {
        return axios.delete('/penilaian1/' + id)
    },
}
