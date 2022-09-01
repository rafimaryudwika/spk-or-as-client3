import http from './config'

export default {
    index(params) {
        return http.get('/pendaftar', {
            params: params,
        })
    },

    show(id) {
        return http.get('/pendaftar/' + id)
    },

    // update( id, data ){
    //     return axios.put( 'https://music.com/api/v1/songs/'+id, data );
    // },

    // create( data ){
    //     return axios.post( 'https://music.com/api/v1/songs', data );
    // },

    // delete( id ){
    //     return axios.delete( 'https://music.com/api/v1/songs/' + id )
    // }
}
