export default function () {
  return {
    toAmpAudio: () => {
      const selectors = [
        'audio'
      ];
      this.$(selectors.join(',')).each((i, el) => {
        const $el = this.$(el);
        const $conainer = this.$('<div>');
        const $ampAudio = this.$('<amp-audio>');
        const attr = $el.attr();
        const html = $el.html();
        // set attr
        $ampAudio.attr(attr);
        $ampAudio.html(html);
        $conainer.append($ampAudio);
        // replace
        $el.replaceWith($conainer.html());
      });
      return this;
    }
  };
}
