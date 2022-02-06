import { shallowMount } from '@vue/test-utils'
import ErrorView from '@/components/ErrorView.vue';
import * as CONST from '../../src/App.constants.js'
describe('ErrorView.vue', () => {
    it('renders given error message when passed', () => {
        let error_msg = 'something went wrong'
        const wrapper = shallowMount(ErrorView, {
            propsData: {
                error: error_msg
            }
        })
        let text = wrapper.find('.alert')
        expect(text.text()).toEqual(error_msg);
    })
    it('renders default message when prop not passed', () => {
        const wrapper = shallowMount(ErrorView)
        let text = wrapper.find('.alert')
        expect(text.text()).toEqual(CONST.ERR_MSG);
    })
})