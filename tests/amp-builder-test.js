import { expect } from 'chai';
import { AmpBuilder, ampBuilder } from '../lib/amp-builder';

const html = '<div></div>';
const opts = { a: 1 };

describe('AmpBuilder', () => {
  const builder = new AmpBuilder(html, opts);
  describe('constructor', () => {
    it('assigns the html.', () => {
      expect(builder.$.html()).to.equal(html);
    });
    it('assigns the opts.', () => {
      expect(builder.opts).to.equal(opts);
    });
    it('equals between the inputed-html and the output html.', () => {
      expect(builder.html()).to.equal(html);
    });
  });

  describe('html()', () => {
    it('equals between the inputed-html and the output html.', () => {
      expect(builder.html()).to.equal(html);
    });
  });

  describe('load()', () => {
    it('overwrites the html.', () => {
      const html2 = '<p></p>';
      builder.load(html2);
      expect(builder.html()).to.equal(html2);
    });
  });

  describe('extends()', () => {
    it('extends methods.', (done) => {
      const methods = () => {
        return {
          test: () => {
            expect(true).to.be.ok;
            done();
          }
        }
      };
      builder.extends(methods);
      builder.test();
    });
  });
});

describe('ampBuilder', () => {
  const builder = ampBuilder(html, opts);
  it('assigns the html.', () => {
    expect(builder.$.html()).to.equal(html);
  });
  it('assigns the opts.', () => {
    expect(builder.opts).to.equal(opts);
  });
  it('equals between the inputed-html and the output html.', () => {
    expect(builder.html()).to.equal(html);
  });
  it('assigns the plugins into __proto__.', () => {
    expect(typeof builder.__proto__.toAmpImg).to.equal('function');
    expect(typeof builder.__proto__.toAmpVideo).to.equal('function');
    expect(typeof builder.__proto__.toAmpAudio).to.equal('function');
    expect(typeof builder.__proto__.toAmpIframe).to.equal('function');
    expect(typeof builder.__proto__.toAmpTwitter).to.equal('function');
    expect(typeof builder.__proto__.toAmpInstagram).to.equal('function');
    expect(typeof builder.__proto__.toAmpYouTube).to.equal('function');
    expect(typeof builder.__proto__.toAmpVine).to.equal('function');
  });
});
