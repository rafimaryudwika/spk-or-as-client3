import http from './../../config'

export default {
    index(params) {
        return http.get('/subkriteria2', {
            params: params,
        })
    },

    show(id) {
        return http.get('/subkriteria2/' + id)
    },

    update(id, data) {
        return http.put('/subkriteria2/' + id, data)
    },

    create(data) {
        return http.post('/subkriteria2', data)
    },

    delete(id) {
        return http.delete('/subkriteria2/' + id)
    },
}
