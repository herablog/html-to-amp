function youTubeLinks() {
  this.$('a[href*="//www.youtube.com/watch"]').each((i, el) => {
    const $el = this.$(el);
    const href = $el.attr('href') || '';
    const matched = href.match(/v=(\w+)/);
    const id = matched ? matched[1] : null;
    if (id) {
      $el.replaceWith(
        `<amp-youtube width="480" height="270"
          data-videoid="${id}"
          layout="responsive"
        ></amp-youtube>`
      );
    }
  });
}

function youTubeShortenLinks() {
  this.$('a[href*="//youtu.be/"]').each((i, el) => {
    const $el = this.$(el);
    const href = $el.attr('href') || '';
    const id = href.split('/')[3];
    if (id) {
      $el.replaceWith(
        `<amp-youtube width="480" height="270"
          data-videoid="${id}"
          layout="responsive"
        ></amp-youtube>`
      );
    }
  });
}

function youTubeIframe() {
  this.$('iframe[src*="//www.youtube.com/embed"]').each((i, el) => {
    const $el = this.$(el);
    const src = $el.attr('src') || '';
    const id = src.split('/')[4];
    if (id) {
      $el.replaceWith(
        `<amp-youtube width="480" height="270"
          data-videoid="${id}"
          layout="responsive"
        ></amp-youtube>`
      );
    }
  });
}

export default function () {
  return {
    toAmpYouTube: () => {
      youTubeIframe.bind(this)();
      youTubeLinks.bind(this)();
      youTubeShortenLinks.bind(this)();
      return this;
    }
  };
}
