import http from 'axios'

export default {
    index(params) {
        return http.get('api/subkriteria2', {
            params: params,
        })
    },
    transpose() {
        return http.get('api/subkriteria2/t')
    },

    show(id) {
        return http.get('api/subkriteria2/' + id)
    },

    update(id, data) {
        return http.put('api/subkriteria2/' + id, data)
    },

    create(data) {
        return http.post('api/subkriteria2', data)
    },

    delete(id) {
        return http.delete('api/subkriteria2/' + id)
    },
}
