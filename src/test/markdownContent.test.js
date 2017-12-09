import Vue from 'vue'
import { mount } from 'vue-test-utils'
import MarkdownContent from '../components/DocExplorer/MarkdownContent.vue';
// import VueMarkdown from 'vue-markdown'

// helper function that mounts and returns the rendered text
function getRenderedText (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData: propsData }).$mount()
  return vm.$el.textContent
}

describe('MarkdownContent', () => {
  let wrapper
  const testMd = '### test md'
  const className = 'test-class'
  beforeEach(() => {
    wrapper = mount(MarkdownContent)
    wrapper.setProps({ className })
  })
  it(`has received ${testMd} as the message property`, () => {
    wrapper.setProps({ markdown: testMd })
    expect(wrapper.vm.markdown).toEqual(testMd)
  })
  it(`has received ${className} as the message property`, () => {
    expect(wrapper.vm.className).toEqual(className)
  })
  it('returns valid html', () => {
    expect(getRenderedText(MarkdownContent, { markdown: testMd }))
    .toBe('test md')
  })
})
