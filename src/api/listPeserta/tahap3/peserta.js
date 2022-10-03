import http from 'axios'

export default {
    index(params) {
        return http.get('api/penilaian3', {
            params: params,
        })
    },

    calc(params) {
        return http.get('api/penilaian3/calculate', {
            params: params,
        })
    },

    lulus(id, data) {
        return http.put('api/penilaian3/lulus/' + id, data)
    },

    show(id) {
        return http.get('api/penilaian3/show/' + id)
    },

    import() {
        return http.post('api/penilaian3/import')
    },

    update(id, data) {
        return http.put('api/penilaian3/' + id, data)
    },

    create(data) {
        return http.post('api/penilaian3', data)
    },

    delete(id) {
        return axios.delete('api/penilaian3/' + id)
    },
}
