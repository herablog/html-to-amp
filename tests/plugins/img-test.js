import { expect } from 'chai';
import ampBuilder from '../../src/amp-builder';

describe('img', () => {
  it('changes responsive element and add "amp__vagueimage" class when the el has "100%" width.', () => {
    const html = '<img src="a.png" width="100%" height="16" />';
    const fixture = '<amp-img src="a.png" width="100" height="100" layout="responsive" class="amp__vagueimage"></amp-img>';
    const builder = ampBuilder(html);
    const result = builder.toAmpImg().html();
    expect(result).to.equal(fixture);
  });

  it('sets the same sizes when the el has both width and height', () => {
    const html = '<img src="a.png" width="16" height="16" alt="test" />';
    const fixture = '<amp-img src="a.png" width="16" height="16" alt="test"></amp-img>';
    const builder = ampBuilder(html);
    const result = builder.toAmpImg().html();
    expect(result).to.equal(fixture);
  });

  it('sets the size and add "amp__vagueimage" class when the el has either width or height', () => {
    const html = '<img src="a.png" width="16" />';
    const fixture = '<amp-img src="a.png" width="16" height="16" class="amp__vagueimage"></amp-img>';
    const builder = ampBuilder(html);
    const result = builder.toAmpImg().html();
    expect(result).to.equal(fixture);
  });

  it('sets the sizes 200 and add "amp__vagueimage" class when the el has neither width nor height', () => {
    const html = '<img src="a.png" />';
    const fixture = '<amp-img src="a.png" width="200" height="200" class="amp__vagueimage"></amp-img>';
    const builder = ampBuilder(html);
    const result = builder.toAmpImg().html();
    expect(result).to.equal(fixture);
  });

  it('sets the sizes 300 and add "amp__vagueimage" class when the el has neither width nor height', () => {
    const html = '<img src="a.png" />';
    const fixture = '<amp-img src="a.png" width="300" height="300" class="amp__vagueimage"></amp-img>';
    const builder = ampBuilder(html);
    const result = builder.toAmpImg({ sizeVagueImage: 300 }).html();
    expect(result).to.equal(fixture);
  });
});
