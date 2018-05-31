function removeTwitterScripts() {
  this.$('script[src$="platform.twitter.com/widgets.js"]').each((i, el) => {
    this.$(el).remove();
  });
}

function tweetLinks() {
  this.$('a[href^="https://twitter.com/"]').each((i, el) => {
    const $el = this.$(el);
    const href = $el.attr('href') || '';
    const id = href.split('/')[5];
    if (id) {
      $el.replaceWith(
        `<amp-twitter width="486" height="657"
          data-tweetid="${id}"
          data-cards="visible"
          layout="responsive"
        ></amp-twitter>`
      );
    }
  });
}

function tweetEmbed() {
  this.$('blockquote.twitter-tweet').each((i, el) => {
    const $el = this.$(el);
    // Use the last tweet url as link to display, because there are many links in embed content.
    const href = $el.children('a[href^="https://twitter.com/"]').last().attr('href') || '';
    const id = href.split('/')[5];
    if (id) {
      $el.replaceWith(
        `<amp-twitter width="486" height="657"
          data-tweetid="${id}"
          data-cards="visible"
          layout="responsive"
        ></amp-twitter>`
      );
    }
  });
}

export default function () {
  return {
    toAmpTwitter: () => {
      tweetEmbed.bind(this)();
      removeTwitterScripts.bind(this)();
      tweetLinks.bind(this)();
      return this;
    }
  };
}
