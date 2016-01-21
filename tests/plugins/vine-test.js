import { expect } from 'chai';
import ampBuilder from '../../lib/amp-builder';

describe('vine', () => {
  it('changes tag when the el has the vine link.', () => {
    const html = '<a href="https://vine.co/v/MdKjXez002d">Vine</a>';
    const fixture = '<amp-vine width="400" height="400" data-vineid="MdKjXez002d" layout="responsive"></amp-vine>';
    const builder = ampBuilder(html);
    const result = builder.toAmpVine().html();
    expect(result).to.equal(fixture);
  });

  it('changes tag when the vine embed.', () => {
    const html = '<iframe src="https://vine.co/v/MdKjXez002d/embed/simple" width="600" height="600" frameborder="0"></iframe><script src="https://platform.vine.co/static/scripts/embed.js"></script>';
    const fixture = '<amp-vine width="400" height="400" data-vineid="MdKjXez002d" layout="responsive"></amp-vine>';
    const builder = ampBuilder(html);
    const result = builder.toAmpVine().html();
    expect(result).to.equal(fixture);
  });
});
