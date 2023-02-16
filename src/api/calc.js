import http from 'axios'

export default {
    tahap1(params) {
        return http.get('api/penilaian1', {
            params: params,
        })
    },
    tahap2(params) {
        return http.get('api/penilaian2', {
            params: params,
        })
    },
    tahap3(params) {
        return http.get('api/penilaian3', {
            params: params,
        })
    },
}
