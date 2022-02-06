import { shallowMount } from '@vue/test-utils'
import Search from '@/components/Search.vue'

describe('Search.vue', () => {
    it('check if button renders when passes as prop', () => {
        const wrapper = shallowMount(Search, {
            propsData: {
                btn: true
            }
        })
        let button = wrapper.find('.btn')
        expect(button).toBeDefined;
    });
    it('check form submit and emit value', () => {
        const searchTest = 'findmysearch';
        const wrapper = shallowMount(Search, {
            propsData: {
                btn: true
            }
        })
        const input = wrapper.find('input');
        input.setValue(searchTest)
        expect(input.element.value).toBe(searchTest);
        wrapper.find('form').trigger('submit');
        expect(wrapper.emitted()).toHaveProperty('submit-search');
        expect(wrapper.emitted('submit-search')[0][0]).toStrictEqual(searchTest)
    })
})