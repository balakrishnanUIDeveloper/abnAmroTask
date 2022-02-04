import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

const store = createStore({
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
const app = createApp(App)
app.use(store);
app.use(router).mount('#app');