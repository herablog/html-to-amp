import { expect } from 'chai';
import ampBuilder from '../../lib/amp-builder';

describe('audio', () => {
  it('changes tag to audio.', () => {
    const html = '<audio src="a.mp3"><div fallback><p>Your browser does not support HTML5 audio</p></div><source type="audio/mpeg" src="foo.mp3"></audio>';
    const fixture = '<amp-audio src="a.mp3"><div fallback=""><p>Your browser does not support HTML5 audio</p></div><source type="audio/mpeg" src="foo.mp3"></amp-audio>';
    const builder = ampBuilder(html);
    const result = builder.toAmpAudio().html();
    expect(result).to.equal(fixture);
  });
});
