import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Home from '@/components/Home.vue'

describe('Test Home.vue component.', () => {
  it('renders props.msg when passed', () => {
    const msg = 'test message'
    const wrapper = shallowMount(Home, {
      props: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
