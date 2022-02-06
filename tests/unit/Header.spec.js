import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
    it('renders props.title when passed', () => {
        const msg = 'Header text';
        const wrapper = shallowMount(Header, {
            propsData: {
                title: msg
            }
        })
        let text = wrapper.find('.navbar-brand')
        expect(text.text()).toEqual(msg);
    })
})