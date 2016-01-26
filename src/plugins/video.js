export default function () {
  return {
    toAmpVideo: () => {
      const selectors = [
        'video'
      ];
      this.$(selectors.join(',')).each((i, el) => {
        const $el = this.$(el);
        const $conainer = this.$('<div>');
        const $ampVideo = this.$('<amp-video>');
        const attr = $el.attr();
        const html = $el.html();
        // set attr
        $ampVideo.attr(attr);
        $ampVideo.html(html);
        $conainer.append($ampVideo);
        // replace
        $el.replaceWith($conainer.html());
      });
      return this;
    }
  };
}
