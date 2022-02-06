import { shallowMount } from '@vue/test-utils'
import ListCard from '@/components/ListCard.vue'
import { testData } from '../testData.contants.js'
describe('ListCard.vue', () => {
    it('renders individual show when passed', async() => {
        const wrapper = shallowMount(ListCard, {
            propsData: {
                showItem: testData[0]
            }
        })
        let img = wrapper.find('.img-fluid');
        let showName = wrapper.find('.show-name');
        expect(img.wrapperElement.src).toEqual(testData[0].image.medium);
        expect(showName.text()).toEqual(testData[0].name)
    })
})