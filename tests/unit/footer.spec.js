import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Footer.vue', () => {
    it('renders props.title when passed', () => {
        const msg = 'new message'
        const wrapper = shallowMount(Footer, {
            propsData: {
                footerText: 'Footer Text'
            }
        })
        let text = wrapper.find('.h6')
        expect(text.text()).toEqual("Footer Text");
    })
})