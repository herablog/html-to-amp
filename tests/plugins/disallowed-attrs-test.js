import { expect } from 'chai';
import ampBuilder from '../../src/amp-builder';

describe('disallowed-attrs', () => {
  it('removes disallowed-attrs.', () => {
    const html = '<br clear="left"><div align="center"></div>';
    const fixture = '<br><div></div>';
    const builder = ampBuilder(html);
    const result = builder.removeDisallowedAttrs().html();
    expect(result).to.equal(fixture);
  });
});
