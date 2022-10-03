import http from 'axios'

export default {
    index(params) {
        return http.get('api/kriteria2', {
            params: params,
        })
    },

    show(id) {
        return http.get('api/kriteria2/' + id)
    },

    update(id, data) {
        return http.put('api/kriteria2/' + id, data)
    },

    create(data) {
        return http.post('api/kriteria2', data)
    },

    delete(id) {
        return http.delete('api/kriteria2/' + id)
    },
}
