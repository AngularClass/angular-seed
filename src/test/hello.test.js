import Vue from 'vue';
import jsdom from 'jsdom';
import HelloComponent from '../components/Hello.vue';

const renderer = require('vue-server-renderer').createRenderer();

describe('Test suite for HelloComponent', () => {
  test('Test data msg', () => {
    const ClonedComponent = Vue.extend(HelloComponent);
    const NewComponent = new ClonedComponent({
      data () {
        return {
          msg: 'I am a cool message',
        };
      },
    }).$mount();
    renderer.renderToString(NewComponent, (err, str) => {
      if (err) {
        console.log(err)
      }
      const dom = new jsdom.JSDOM(str);
      const firstHeading = dom.window.document.querySelector('h1');
      expect(firstHeading.textContent).toContain('I am a cool message');
    });
  });
});
