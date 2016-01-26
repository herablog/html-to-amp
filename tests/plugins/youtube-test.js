import { expect } from 'chai';
import ampBuilder from '../../src/amp-builder';

describe('YouTube', () => {
  it('changes tag when the el has the youtube full link.', () => {
    const html = '<a href="https://www.youtube.com/watch?v=3rE4sHJxdBg">YouTube</a>';
    const fixture = '<amp-youtube width="480" height="270" data-videoid="3rE4sHJxdBg" layout="responsive"></amp-youtube>';
    const builder = ampBuilder(html);
    const result = builder.toAmpYouTube().html();
    expect(result).to.equal(fixture);
  });

  it('changes tag when the el has the youtube short link.', () => {
    const html = '<a href="https://youtu.be/3rE4sHJxdBg">YouTube</a>';
    const fixture = '<amp-youtube width="480" height="270" data-videoid="3rE4sHJxdBg" layout="responsive"></amp-youtube>';
    const builder = ampBuilder(html);
    const result = builder.toAmpYouTube().html();
    expect(result).to.equal(fixture);
  });

  it('changes tag when the el has the youtube iframe link.', () => {
    const html = '<iframe width="560" height="315" src="https://www.youtube.com/embed/3rE4sHJxdBg" frameborder="0" allowfullscreen></iframe>';
    const fixture = '<amp-youtube width="480" height="270" data-videoid="3rE4sHJxdBg" layout="responsive"></amp-youtube>';
    const builder = ampBuilder(html);
    const result = builder.toAmpYouTube().html();
    expect(result).to.equal(fixture);
  });
});
