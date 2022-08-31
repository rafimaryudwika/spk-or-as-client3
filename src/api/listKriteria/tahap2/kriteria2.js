import http from './../../config'

export default {
    index(params) {
        return http.get('/kriteria2', {
            params: params,
        })
    },

    show(id) {
        return http.get('/kriteria2/' + id)
    },

    update(id, data) {
        return http.put('/kriteria2/' + id, data)
    },

    create(data) {
        return http.post('/kriteria2', data)
    },

    delete(id) {
        return http.delete('/kriteria2/' + id)
    },
}
