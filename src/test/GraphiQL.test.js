// import ReactTestRenderer from 'react-test-renderer';
import { GraphiQL } from '../components/GraphiQL';
import { mount } from 'vue-test-utils'

document.createRange = () => ({
  setEnd () {},
  setStart () {},
  getBoundingClientRect () {
    return { right: 0 };
  },
  getClientRects () {
    return { right: 0 };
  },
});

const mockStorage = (function () {
  let store = {};
  return {
    getItem (key) {
      return store.hasOwnProperty(key) ? store[key] : null;
    },
    setItem (key, value) {
      store[key] = value.toString();
    },
    clear () {
      store = {};
    },
  };
})();

// The smallest possible introspection result that builds a schema.
const simpleIntrospection = {
  data: {
    __schema: {
      queryType: { name: 'Q' },
      types: [
        {
          kind: 'OBJECT',
          name: 'Q',
          interfaces: [],
          fields: [{ name: 'q', args: [], type: { name: 'Q' } }],
        },
      ],
    },
  },
};

// Spins the promise loop a few times before continuing.
const wait = () =>
  Promise.resolve()
    .then(() => Promise.resolve())
    .then(() => Promise.resolve())
    .then(() => Promise.resolve());

Object.defineProperty(window, 'localStorage', {
  value: mockStorage,
});

describe('GraphiQL', () => {
  let wrapper
  const noOpFetcher = () => {};
  beforeEach(() => {
    wrapper = mount(GraphiQL)
  })
  it('should throw error without fetcher', () => {
    expect(wrapper).to.throw(
      'GraphiQL requires a fetcher function',
    );
  });

  it('should construct correctly with fetcher', () => {
    wrapper.setProps({ fetcher: noOpFetcher })
    expect(wrapper.vm.foo).to.equal('bar').to.not.throw();
  });

  it('should refetch schema with new fetcher', async () => {
    let firstCalled = false;
    function firstFetcher () {
      firstCalled = true;
      return Promise.resolve(simpleIntrospection);
    }

    let secondCalled = false;
    function secondFetcher () {
      secondCalled = true;
      return Promise.resolve(simpleIntrospection);
    }

    // Initial render calls fetcher
    wrapper.setProps({ fetcher: firstFetcher })
    expect(firstCalled).to.equal(true);

    await wait();

    // Re-render does not call fetcher again
    firstCalled = false;
    wrapper.update()
    expect(firstCalled).toBe(false);

    await wait();

    // Re-render with new fetcher is called.
    wrapper.vm.fetcher = secondFetcher
    wrapper.update()
    expect(secondCalled).to.equal(true);
  });

  it('should not throw error if schema missing and query provided', () => {
    expect(wrapper.setProps({ fetcher: noOpFetcher })).to.not.throw()
  });

  it('defaults to the built-in default query', () => {
    wrapper.vm.fetcher = noOpFetcher
    wrapper.update()
    expect(wrapper.getInstance().state.query).to.include(
      '# Welcome to GraphiQL',
    );
  });

  it('accepts a custom default query', () => {
    wrapper.vm.fetcher = noOpFetcher
    wrapper.update()
    expect(wrapper.getInstance().state.query).to.equal('GraphQL Party!!');
  });
});
