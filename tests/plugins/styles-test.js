import { expect } from 'chai';
import ampBuilder from '../../src/amp-builder';

describe('styles', () => {
  it('removes the style attr.', () => {
    const html = '<div style="align:center;">center</div>';
    const fixture = '<div>center</div>';
    const builder = ampBuilder(html);
    const result = builder.removeInlineStyles().html();
    expect(result).to.equal(fixture);
  });
});
