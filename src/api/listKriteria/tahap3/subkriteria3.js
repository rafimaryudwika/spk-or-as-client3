import http from 'axios'

export default {
    index(params) {
        return http.get('api/subkriteria3', {
            params: params,
        })
    },
    transpose() {
        return http.get('api/subkriteria3/t')
    },

    show(id) {
        return http.get('api/subkriteria3/' + id)
    },

    update(id, data) {
        return http.put('api/subkriteria3/' + id, data)
    },

    create(data) {
        return http.post('api/subkriteria3', data)
    },

    delete(id) {
        return http.delete('api/subkriteria3/' + id)
    },
}
