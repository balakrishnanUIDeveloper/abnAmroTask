import { createStore } from 'vuex'
export const store = createStore({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    actions: {
        actionA({ commit }) {
            return new Promise((resolve) => {
                commit('increment')
                resolve(this.state.count)
            })
        }
    }
})