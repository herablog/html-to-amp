function removeInstagramScripts() {
  this.$('script[src*="platform.instagram.com"]').each((i, el) => {
    this.$(el).remove();
  });
}

function instagramLinks() {
  this.$('a[href^="https://www.instagram.com/p/"]').each((i, el) => {
    const $el = this.$(el);
    const href = $el.attr('href') || '';
    const id = href.split('/')[4];
    if (id) {
      $el.replaceWith(
        `<amp-instagram width="400" height="400"
          data-shortcode="${id}"
          layout="responsive"
        ></amp-instagram>`
      );
    }
  });
}

function instagramEmbed() {
  this.$('blockquote.instagram-media').each((i, el) => {
    const $el = this.$(el);
    const href = $el.find('a[href^="https://www.instagram.com/p/"]').attr('href') || '';
    const id = href.split('/')[4];
    if (id) {
      $el.replaceWith(
        `<amp-instagram width="400" height="400"
          data-shortcode="${id}"
          layout="responsive"
        ></amp-instagram>`
      );
    }
  });
}

export default function () {
  return {
    toAmpInstagram: () => {
      instagramEmbed.bind(this)();
      removeInstagramScripts.bind(this)();
      instagramLinks.bind(this)();
      return this;
    }
  };
}
