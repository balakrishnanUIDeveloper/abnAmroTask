import { shallowMount } from '@vue/test-utils'
import ListView from '@/components/ListView.vue'
import { testData } from '../testData.contants.js'
describe('ListView.vue', () => {
    it('renders shows when passed', async() => {
        const wrapper = shallowMount(ListView, {
            propsData: {
                shows: testData
            }
        })
        let col = wrapper.findAll('.col')
        expect(col.length).toEqual(1);
    })
})