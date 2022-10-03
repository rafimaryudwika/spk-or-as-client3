import http from 'axios'

export default {
    index(params) {
        return http.get('api/penilaian2', {
            params: params,
        })
    },

    calc(params) {
        return http.get('api/penilaian2/calculate', {
            params: params,
        })
    },

    lulus(id, data) {
        return http.put('api/penilaian2/lulus/' + id, data)
    },

    show(id) {
        return http.get('api/penilaian2/show/' + id)
    },

    import() {
        return http.post('api/penilaian2/import')
    },

    update(id, data) {
        return http.put('api/penilaian2/' + id, data)
    },

    create(data) {
        return http.post('api/penilaian2', data)
    },

    delete(id) {
        return axios.delete('api/penilaian2/' + id)
    },
}
