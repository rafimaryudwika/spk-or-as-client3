import http from './../../config'

export default {
    index(params) {
        return http.get('/kriteria1', {
            params: params,
        })
    },

    show(id) {
        return http.get('/kriteria1/' + id)
    },

    update(id, data) {
        return http.put('/kriteria1/' + id, data)
    },

    create(data) {
        return http.post('/kriteria1', data)
    },

    delete(id) {
        return http.delete('/kriteria1/' + id)
    },
}
