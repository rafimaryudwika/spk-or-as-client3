export default {
    state: () => ({
        name: 'Rafi'
    }),
    getters: {},
    mutations: {
        SET_NAME(state, payload) {
            state.name = payload
        },
    },
    actions: {
        saveName({commit}, data){
            commit('SET NAME', data)
        },
    },
}