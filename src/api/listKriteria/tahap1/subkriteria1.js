import http from './../../config'

export default {
    index(params) {
        return http.get('api/subkriteria1', {
            params: params,
        })
    },

    show(id) {
        return http.get('api/subkriteria1/' + id)
    },

    update(id, data) {
        return http.put('api/subkriteria1/' + id, data)
    },

    create(data) {
        return http.post('api/subkriteria1', data)
    },

    delete(id) {
        return http.delete('api/subkriteria1/' + id)
    },
}
