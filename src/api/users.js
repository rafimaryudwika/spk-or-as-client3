import http from 'axios'

export default {
    index(params) {
        return http.get('api/users', {
            params: params,
        })
    },

    show(id) {
        return http.get('api/users/' + id)
    },

    update(id, data) {
        return http.put('api/users/' + id, data)
    },

    create(data) {
        return http.post('api/users', data)
    },

    delete(id) {
        return http.delete('api/users/' + id)
    },
}
