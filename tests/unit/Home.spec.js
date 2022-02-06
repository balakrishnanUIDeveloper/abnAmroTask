import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Home from '@/view/Home.vue'
import { testData } from '../testData.contants.js'
import { store } from '../../src/store/store.js'
import { createStore } from 'vuex'
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(testData),
    })
)
describe('Home.vue', () => {
    let mockFn;
    beforeEach(() => {
        mockFn = jest.fn(1);
    })
    it('renders Home page', async() => {
        const msg = 'new message'
        const wrapper = shallowMount(Home, {
            global: {
                plugins: [store]
            },
            propsData: {
                title: 'Home text',
            }
        })
        wrapper.vm.fetchTVShows();
        expect(wrapper.vm.fetchTVShows).toHaveBeenCalled;
    })
})