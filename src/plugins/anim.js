export default function () {
  return {
    toAmpAnim: (selectors = []) => {
      this.$(selectors.join(',')).each((i, el) => {
        const $el = this.$(el);
        const $conainer = this.$('<div>');
        const $ampImg = this.$('<amp-anim>');
        const attr = $el.attr();
        const src = attr.src;
        const width = attr.width && parseInt(attr.width, 10);
        const height = attr.height && parseInt(attr.height, 10);
        const alt = attr.alt;
        // set attr
        $ampImg.attr('src', src);
        if (width && height) {
          $ampImg
            .attr('width', width)
            .attr('height', height);
        } else if (width || height) {
          const sizes = width || height;
          $ampImg
            .attr('sizes', sizes);
        }
        if (alt) {
          $ampImg.attr('alt', alt);
        }
        $conainer.append($ampImg);
        // replace
        $el.replaceWith($conainer.html());
      });
      return this;
    }
  };
}
