import { shallowMount } from '@vue/test-utils'
import TheFooter from '@/components/TheFooter.vue'

const factory = () => {
  return shallowMount(TheFooter, {})
}

describe('TheFooter', () => {
//   test('is a Vue instance', () => {
//     const wrapper = mount(TheFooter)
//     expect(wrapper.isVueInstance()).toBeTruthy()
//   })

  test('renders properly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
