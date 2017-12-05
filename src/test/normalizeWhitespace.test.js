import { invalidCharacters, normalizeWhitespace } from '../utility/normalizeWhitespace';

describe('QueryEditor', () => {
  it('removes unicode characters', () => {
    const result = normalizeWhitespace(invalidCharacters.join(''));
    expect(result).toEqual(' '.repeat(invalidCharacters.length));
  });
});
