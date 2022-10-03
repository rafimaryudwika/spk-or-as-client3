import http from 'axios'

export default {
    csrf() {
        return http.get('/sanctum/csrf-cookie')
    },
    login(data) {
        return http.post('/api/login', data)
    },
    register(data) {
        return http.post('/api/register', data)
    },
    logout() {
        return http.post('/api/logout')
    },
    user() {
        return http.get('/api/profile')
    },
}
