import { expect } from 'chai';
import ampBuilder from '../../src/amp-builder';

describe('video', () => {
  it('changes tag to audio.', () => {
    const html = '<video src="a.mp4"><div fallback><p>Your browser does not support HTML5 video</p></div><source type="video/mpeg" src="foo.mp4"></video>';
    const fixture = '<amp-video src="a.mp4"><div fallback=""><p>Your browser does not support HTML5 video</p></div><source type="video/mpeg" src="foo.mp4"></amp-video>';
    const builder = ampBuilder(html);
    const result = builder.toAmpVideo().html();
    expect(result).to.equal(fixture);
  });
});
