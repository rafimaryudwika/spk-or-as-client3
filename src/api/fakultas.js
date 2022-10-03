import http from 'axios'

export default {
    index(params) {
        return http.get('api/fakultas', {
            params: params,
        })
    },
}
