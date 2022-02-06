import { shallowMount } from '@vue/test-utils'
import Home from '@/view/Home.vue'
import { testData } from '../testData.contants.js'
import { store } from '../../src/store/store.js'
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(testData),
    })
)
describe('Home.vue', () => {
    it('renders Home page', async() => {
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