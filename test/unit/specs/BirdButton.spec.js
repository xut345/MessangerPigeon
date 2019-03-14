import BirdButton from '@/components/BirdButton'
import { shallowMount } from '@vue/test-utils'


describe('check active', () => {
    const wrapper = shallowMount(BirdButton)
    it('should check active\'s value is false', () => {
        expect(wrapper.contains('active')).toBe(false)
      })


    it('should change active\'s value', () => {
        expect(wrapper.contains('button')).toBe(true)
        wrapper.find('button').trigger('click')
        expect(wrapper.vm.active).toBe(true)
      })
})



    