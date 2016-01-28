import { expect } from 'chai';
import ampBuilder from '../../src/amp-builder';

describe('disallowed-tags', () => {
  it('replaces inline disallowed-tags.', () => {
    const html = '<font size="1">font</font>';
    const fixture = '<span>font</span>';
    const builder = ampBuilder(html);
    const result = builder.replaceDisallowedTags().html();
    expect(result).to.equal(fixture);
  });
  it('removes disallowed-tags.', () => {
    const html = '<style>p { color: red; }</style>';
    const fixture = '';
    const builder = ampBuilder(html);
    const result = builder.removeDisallowedTags().html();
    expect(result).to.equal(fixture);
  });
});
