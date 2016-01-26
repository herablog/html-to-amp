function removeVineScripts() {
  this.$('script[src$="platform.vine.co/static/scripts/embed.js"]').each((i, el) => {
    this.$(el).remove();
  });
}

function vineEmbed() {
  this.$('iframe[src^="https://vine.co/v/"]').each((i, el) => {
    const $el = this.$(el);
    const src = $el.attr('src') || '';
    const id = src.split('/')[4];
    if (id) {
      $el.replaceWith(
        `<amp-vine width="400" height="400"
          data-vineid="${id}"
          layout="responsive"
        ></amp-vine>`
      );
    }
  });
}

function vineLinks() {
  this.$('a[href^="https://vine.co/v/"]').each((i, el) => {
    const $el = this.$(el);
    const href = $el.attr('href') || '';
    const id = href.split('/')[4];
    if (id) {
      $el.replaceWith(
        `<amp-vine width="400" height="400"
          data-vineid="${id}"
          layout="responsive"
        ></amp-vine>`
      );
    }
  });
}

export default function () {
  return {
    toAmpVine: () => {
      vineEmbed.bind(this)();
      removeVineScripts.bind(this)();
      vineLinks.bind(this)();
      return this;
    }
  };
}
