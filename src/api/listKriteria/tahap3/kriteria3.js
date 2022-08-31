import http from './../../config'

export default {
    index(params) {
        return http.get('/kriteria3', {
            params: params,
        })
    },

    show(id) {
        return http.get('/kriteria3/' + id)
    },

    update(id, data) {
        return http.put('/kriteria3/' + id, data)
    },

    create(data) {
        return http.post('/kriteria3', data)
    },

    delete(id) {
        return http.delete('/kriteria3/' + id)
    },
}
