import http from 'axios'

export default {
    index(params) {
        return http.get('api/kriteria1', {
            params: params,
        })
    },

    show(id) {
        return http.get('api/kriteria1/' + id)
    },

    update(id, data) {
        return http.put('api/kriteria1/' + id, data)
    },

    create(data) {
        return http.post('api/kriteria1', data)
    },

    delete(id) {
        return http.delete('api/kriteria1/' + id)
    },
}
