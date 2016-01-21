import cheerio from 'cheerio';
import plugins from './plugins/';

export class AmpBuilder {

  constructor(html, opts) {
    this.$ = cheerio.load(html);
    this.opts = opts;
  }

  load(html) {
    this.$ = cheerio.load(html);
  }

  extends(register = () => {}) {
    const methods = register.bind(this)();
    Object.assign(AmpBuilder.prototype, methods);
  }

  html() {
    return this.$.html();
  }

}

export function ampBuilder(html = '', opts = {}) {
  const builder = new AmpBuilder(html, opts);
  // add plugins
  builder.extends(plugins.AmpImg);
  builder.extends(plugins.AmpVideo);
  builder.extends(plugins.AmpAudio);
  builder.extends(plugins.AmpAnim);
  builder.extends(plugins.AmpIframe);
  builder.extends(plugins.AmpTwitter);
  builder.extends(plugins.AmpInstagram);
  builder.extends(plugins.AmpYouTube);
  builder.extends(plugins.AmpVine);
  return builder;
}

export default ampBuilder;
