export default function () {
  return {
    toAmpIframe: () => {
      const selectors = [
        'iframe:not([src^="https://www.youtube.com/embed/"],[src^="https://vine.co/v/"])'
      ];
      this.$(selectors.join(',')).each((i, el) => {
        const $el = this.$(el);
        const $conainer = this.$('<div>');
        const $ampIframe = this.$('<amp-iframe>');
        const attr = $el.attr();
        const html = $el.html();
        // set attr
        $ampIframe.attr(attr);
        $ampIframe.html(html);
        $conainer.append($ampIframe);
        // replace
        $el.replaceWith($conainer.html());
      });
      return this;
    }
  };
}
