import http from './config'

export default {
    index(params) {
        return http.get('/fakultas', {
            params: params,
        })
    },
}
