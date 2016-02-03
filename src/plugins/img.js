export default function () {
  return {
    toAmpImg: () => {
      const selectors = [
        'img'
      ];
      this.$(selectors.join(',')).each((i, el) => {
        const $el = this.$(el);
        const $conainer = this.$('<div>');
        const $ampImg = this.$('<amp-img>');
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
          const size = width || height;
          $ampImg
            .attr('width', size)
            .attr('height', size);
        } else {
          const size = 200;
          $ampImg
            .attr('width', size)
            .attr('height', size);
        }
        if (alt) {
          $ampImg.attr('alt', alt);
        }
        $conainer.append($ampImg);
        // replace <img> to <amp-img>
        $el.replaceWith($conainer.html());
      });
      return this;
    }
  };
}
