import { mount } from 'vue-test-utils'
import getRenderedText from '../test/helpers/getRenderedText'
import MarkdownContent from '../components/DocExplorer/MarkdownContent.vue'

const testMd = '### test md'
const className = 'test-class'

function getText () {
  return getRenderedText(MarkdownContent, { markdown: testMd })
}

describe('MarkdownContent', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(MarkdownContent)
    wrapper.setProps({ className })
    wrapper.setProps({ markdown: testMd })
  })
  it(`has received ${testMd} as the message property`, () => {
    expect(wrapper.vm.markdown).toEqual(testMd)
  })
  it(`has received ${className} as the message property`, () => {
    expect(wrapper.vm.className).toEqual(className)
  })
  it('returns valid html', () => {
    expect(getText()).toContain('test md')
    expect(getText()).not.toContain('###')
  })
})
