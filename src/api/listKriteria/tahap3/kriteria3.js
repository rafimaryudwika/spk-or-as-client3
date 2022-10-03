import http from 'axios'

export default {
    index(params) {
        return http.get('api/kriteria3', {
            params: params,
        })
    },

    show(id) {
        return http.get('api/kriteria3/' + id)
    },

    update(id, data) {
        return http.put('api/kriteria3/' + id, data)
    },

    create(data) {
        return http.post('api/kriteria3', data)
    },

    delete(id) {
        return http.delete('api/kriteria3/' + id)
    },
}
