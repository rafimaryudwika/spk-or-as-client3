import http from 'axios'

export default {
    index(params) {
        return http.get('api/penilaian1', {
            params: params,
        })
    },

    calc(params) {
        return http.get('api/penilaian1/calculate', {
            params: params,
        })
    },

    lulus(id, data) {
        return http.put('api/penilaian1/lulus/' + id, data)
    },

    show(id) {
        return http.get('api/penilaian1/show/' + id)
    },

    import() {
        return http.post('api/penilaian1/import')
    },

    update(id, data) {
        return http.put('api/penilaian1/' + id, data)
    },

    create(data) {
        return http.post('api/penilaian1', data)
    },

    delete(id) {
        return axios.delete('api/penilaian1/' + id)
    },
}
