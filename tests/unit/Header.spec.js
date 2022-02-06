import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
    it('renders props.title when passed', () => {
        const msg = 'new message'
        const wrapper = shallowMount(Header, {
            propsData: {
                title: 'Header text'
            }
        })
        let text = wrapper.find('.navbar-brand')
        expect(text.text()).toEqual("Header text");
    })
})