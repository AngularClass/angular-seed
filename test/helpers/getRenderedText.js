import Vue from 'vue'
/**
 * Provided a component and props, returns element text
 * helper function that mounts and returns the rendered text
 */
export default function getRenderedText (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData: propsData }).$mount()
  return vm.$el.textContent
}
