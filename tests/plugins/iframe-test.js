import { expect } from 'chai';
import ampBuilder from '../../lib/amp-builder';

describe('iframe', () => {
  it('changes tag to amp-iframe.', () => {
    const html = '<iframe src="a.html" width="400" height="400"><div></div></iframe>';
    const fixture = '<amp-iframe src="a.html" width="400" height="400"><div></div></amp-iframe>';
    const builder = ampBuilder(html);
    const result = builder.toAmpIframe().html();
    expect(result).to.equal(fixture);
  });

  it('does not change tag when the iframe is from YouTube.', () => {
    const html = '<iframe src="https://www.youtube.com/embed/caeKDCwe" width="400" height="400"><div></div></iframe>';
    const builder = ampBuilder(html);
    const result = builder.toAmpIframe().html();
    expect(result).to.equal(html);
  });

  it('does not change tag when the iframe is from Vine.', () => {
    const html = '<iframe src="https://vine.co/v/caeKDCwe" width="400" height="400"><div></div></iframe>';
    const builder = ampBuilder(html);
    const result = builder.toAmpIframe().html();
    expect(result).to.equal(html);
  });
});
