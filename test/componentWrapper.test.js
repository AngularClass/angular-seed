import { mount } from 'vue-test-utils'
import ComponentWrapper from '../src/components/ComponentWrapper.vue'

describe('ComponentWrapper', () => {
  let testWrapper
  const title = 'wrapper title'
  const className = 'wrapper'
  beforeEach(() => {
    testWrapper = mount(ComponentWrapper)
    testWrapper.setProps({
      title,
      className
    })
  })
  it(`renders props title correctly`, () => {
    expect(testWrapper.find(`.${className}`).text()).toBe(title)
  })
  it(`has the correct class`, () => {
    expect(testWrapper.find(`.${className}`).exists()).toBe(true)
  })
})
