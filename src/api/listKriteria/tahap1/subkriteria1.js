import http from './../../config'

export default {
    index(params) {
        return http.get('/subkriteria1', {
            params: params,
        })
    },

    show(id) {
        return http.get('/subkriteria1/' + id)
    },

    update(id, data) {
        return http.put('/subkriteria1/' + id, data)
    },

    create(data) {
        return http.post('/subkriteria1', data)
    },

    delete(id) {
        return http.delete('/subkriteria1/' + id)
    },
}
