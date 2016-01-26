import { expect } from 'chai';
import ampBuilder from '../../src/amp-builder';

describe('disallowed-tags', () => {
  it('replaces inline disallowed-tags.', () => {
    const html = '<font size="1">font</font>';
    const fixture = '<span size="1">font</span>';
    const builder = ampBuilder(html);
    const result = builder.removeDisallowedTags().html();
    expect(result).to.equal(fixture);
  });
});
