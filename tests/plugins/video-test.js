import { expect } from 'chai';
import ampBuilder from '../../src/amp-builder';

describe('video', () => {
  it('changes tag to video.', () => {
    const html = '<video src="a.mp4" width="100" height="100"><div fallback><p>Your browser does not support HTML5 video</p></div><source type="video/mpeg" src="foo.mp4"></video>';
    const fixture = '<amp-video src="a.mp4" width="100" height="100"><div fallback=""><p>Your browser does not support HTML5 video</p></div><source type="video/mpeg" src="foo.mp4"></amp-video>';
    const builder = ampBuilder(html);
    const result = builder.toAmpVideo().html();
    expect(result).to.equal(fixture);
  });

  it('changes responsive element and add "amp-video__vague" class when the el has "100%" width.', () => {
    const html = '<video src="a.mp4" width="100%" height="16"></video>';
    const fixture = '<amp-video src="a.mp4" width="100" height="100" layout="responsive" class="amp-video__vague"></amp-video>';
    const builder = ampBuilder(html);
    const result = builder.toAmpVideo().html();
    expect(result).to.equal(fixture);
  });

  it('sets the same sizes when the el has both width and height', () => {
    const html = '<video src="a.mp4" width="16" height="16"></video>';
    const fixture = '<amp-video src="a.mp4" width="16" height="16"></amp-video>';
    const builder = ampBuilder(html);
    const result = builder.toAmpVideo().html();
    expect(result).to.equal(fixture);
  });

  it('sets the size and add "amp-video__vague" class when the el has either width or height', () => {
    const html = '<video src="a.mp4" width="16"></video>';
    const fixture = '<amp-video src="a.mp4" width="16" height="16" class="amp-video__vague"></amp-video>';
    const builder = ampBuilder(html);
    const result = builder.toAmpVideo().html();
    expect(result).to.equal(fixture);
  });

  it('sets the sizes 200 and add "amp-video__vague" class when the el has neither width nor height', () => {
    const html = '<video src="a.mp4"></video>';
    const fixture = '<amp-video src="a.mp4" width="200" height="200" class="amp-video__vague"></amp-video>';
    const builder = ampBuilder(html);
    const result = builder.toAmpVideo().html();
    expect(result).to.equal(fixture);
  });

  it('sets the sizes 300 and add "amp-video__vague" class when the el has neither width nor height', () => {
    const html = '<video src="a.mp4"></video>';
    const fixture = '<amp-video src="a.mp4" width="300" height="300" class="amp-video__vague"></amp-video>';
    const builder = ampBuilder(html);
    const result = builder.toAmpVideo({ sizeVagueVideo: 300 }).html();
    expect(result).to.equal(fixture);
  });

  it('sets the autoplay attribute', () => {
    const html = '<video src="a.mp4" width="100" height="100" autoplay></video>';
    const fixture = '<amp-video src="a.mp4" width="100" height="100" autoplay></amp-video>';
    const builder = ampBuilder(html);
    const result = builder.toAmpVideo().html();
    expect(result).to.equal(fixture);
  });

  it('sets the controls attribute', () => {
    const html = '<video src="a.mp4" width="100" height="100" controls></video>';
    const fixture = '<amp-video src="a.mp4" width="100" height="100" controls></amp-video>';
    const builder = ampBuilder(html);
    const result = builder.toAmpVideo().html();
    expect(result).to.equal(fixture);
  });

  it('sets the loop attribute', () => {
    const html = '<video src="a.mp4" width="100" height="100" loop></video>';
    const fixture = '<amp-video src="a.mp4" width="100" height="100" loop></amp-video>';
    const builder = ampBuilder(html);
    const result = builder.toAmpVideo().html();
    expect(result).to.equal(fixture);
  });

  it('sets the muted attribute', () => {
    const html = '<video src="a.mp4" width="100" height="100" muted></video>';
    const fixture = '<amp-video src="a.mp4" width="100" height="100" muted></amp-video>';
    const builder = ampBuilder(html);
    const result = builder.toAmpVideo().html();
    expect(result).to.equal(fixture);
  });

  it('sets the autoplay attribute', () => {
    const html = '<video src="a.mp4" width="100" height="100" autoplay></video>';
    const fixture = '<amp-video src="a.mp4" width="100" height="100" autoplay></amp-video>';
    const builder = ampBuilder(html);
    const result = builder.toAmpVideo().html();
    expect(result).to.equal(fixture);
  });

  it('sets the poster attribute', () => {
    const html = '<video src="a.mp4" width="100" height="100" poster="https://example.com/poster.jpeg"></video>';
    const fixture = '<amp-video src="a.mp4" width="100" height="100" poster="https://example.com/poster.jpeg"></amp-video>';
    const builder = ampBuilder(html);
    const result = builder.toAmpVideo().html();
    expect(result).to.equal(fixture);
  });

  it('uses the first <source> element src value', () => {
    const html = '<video width="100" height="100"><source src="a.mp4" type="video/mp4"><source src="a.ogg" type="video/ogg"></video>';
    const fixture = '<amp-video src="a.mp4" width="100" height="100"><source src="a.mp4" type="video/mp4"><source src="a.ogg" type="video/ogg"></amp-video>';
    const builder = ampBuilder(html);
    const result = builder.toAmpVideo().html();
    expect(result).to.equal(fixture);
  });

  it('removes the element when src attribute cant be found', () => {
    const html = '<div><video width="100"></video></div>';
    const fixture = '<div></div>';
    const builder = ampBuilder(html);
    const result = builder.toAmpVideo().html();
    expect(result).to.equal(fixture);
  });
});
