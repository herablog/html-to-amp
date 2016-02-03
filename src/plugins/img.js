export default function () {
  return {
    toAmpImg: (opts = {}) => {
      const selectors = [
        'img'
      ];
      this.$(selectors.join(',')).each((i, el) => {
        const classNameVagueImage = 'amp__vagueimage';
        const sizeVagueImage = opts.sizeVagueImage || 200;
        const $el = this.$(el);
        const $conainer = this.$('<div>');
        const $ampImg = this.$('<amp-img>');
        const attr = $el.attr();
        const width = attr.width;
        const height = attr.height;
        // set src
        $ampImg.attr('src', attr.src);
        // set sizes
        if (width === '100%') {
          $ampImg
            .attr({ width: 100, height: 100, layout: 'responsive' })
            .addClass(classNameVagueImage);
        } else if (width && height) {
          $ampImg.attr({ width: parseInt(width, 10), height: parseInt(height, 10) });
        } else if (width || height) {
          const size = (width && parseInt(width, 10)) || (height && parseInt(height, 10));
          $ampImg.attr({ width: size, height: size }).addClass(classNameVagueImage);
        } else {
          $ampImg
            .attr({ width: sizeVagueImage, height: sizeVagueImage })
            .addClass(classNameVagueImage);
        }
        // set alt
        if (attr.alt) {
          $ampImg.attr('alt', attr.alt);
        }
        $conainer.append($ampImg);
        // replace <img> to <amp-img>
        $el.replaceWith($conainer.html());
      });
      return this;
    }
  };
}
