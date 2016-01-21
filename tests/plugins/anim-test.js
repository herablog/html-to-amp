import { expect } from 'chai';
import ampBuilder from '../../lib/amp-builder';

describe('anim', () => {
  it('changes tag to anim with width and height.', () => {
    const html = '<img src="a.gif" width="16" height="16" alt="test" />';
    const fixture = '<amp-anim src="a.gif" width="16" height="16" alt="test"></amp-anim>';
    const builder = ampBuilder(html);
    const result = builder.toAmpAnim(['img[src$=".gif"]']).html();
    expect(result).to.equal(fixture);
  });

  it('changes tag to anim with the sizes attr.', () => {
    const html = '<img src="a.gif" width="16" alt="test" />';
    const fixture = '<amp-anim src="a.gif" sizes="16" alt="test"></amp-anim>';
    const builder = ampBuilder(html);
    const result = builder.toAmpAnim(['img[src$=".gif"]']).html();
    expect(result).to.equal(fixture);
  });
});
