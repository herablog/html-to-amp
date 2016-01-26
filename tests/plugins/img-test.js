import { expect } from 'chai';
import ampBuilder from '../../src/amp-builder';

describe('img', () => {
  it('changes tag when the el has both width and height', () => {
    const html = '<img src="a.png" width="16" height="16" alt="test" />';
    const fixture = '<amp-img src="a.png" width="16" height="16" alt="test"></amp-img>';
    const builder = ampBuilder(html);
    const result = builder.toAmpImg().html();
    expect(result).to.equal(fixture);
  });

  it('changes tag when the el has either width or height', () => {
    const html = '<img src="a.png" width="16" />';
    const fixture = '<amp-img src="a.png" sizes="16"></amp-img>';
    const builder = ampBuilder(html);
    const result = builder.toAmpImg().html();
    expect(result).to.equal(fixture);
  });
});
