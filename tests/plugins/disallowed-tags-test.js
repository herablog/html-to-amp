import { expect } from 'chai';
import ampBuilder from '../../src/amp-builder';

describe('disallowed-tags', () => {
  it('replaces disallowed inline tags.', () => {
    const html = '<font color="red"><font size="3">aaa</font></font>';
    const fixture = '<span><span>aaa</span></span>';
    const builder = ampBuilder(html);
    const result = builder.replaceDisallowedTags().html();
    expect(result).to.equal(fixture);
  });
  it('replaces disallowed block tags.', () => {
    const html = '<fieldset><legend><span>aaa</span></legend></fieldset>';
    const fixture = '<div><div><span>aaa</span></div></div>';
    const builder = ampBuilder(html);
    const result = builder.replaceDisallowedTags().html();
    expect(result).to.equal(fixture);
  });
  it('removes disallowed-tags.', () => {
    const html = '<style>p { color: red; }</style>';
    const fixture = '';
    const builder = ampBuilder(html);
    const result = builder.removeDisallowedTags().html();
    expect(result).to.equal(fixture);
  });
});
