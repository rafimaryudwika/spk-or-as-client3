import http from './../../config'

export default {
    index(params) {
        return http.get('/subkriteria3', {
            params: params,
        })
    },

    show(id) {
        return http.get('/subkriteria3/' + id)
    },

    update(id, data) {
        return http.put('/subkriteria3/' + id, data)
    },

    create(data) {
        return http.post('/subkriteria3', data)
    },

    delete(id) {
        return axios.delete('/subkriteria3/' + id)
    },
}
