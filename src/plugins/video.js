export default function () {
  return {
    toAmpVideo: (opts = {}) => {
      const selectors = [
        'video'
      ];
      this.$(selectors.join(',')).each((i, el) => {
        const classNameVagueVideo = 'amp-video__vague';
        const sizeVagueVideo = opts.sizeVagueVideo || 200;
        const $el = this.$(el);
        const $conainer = this.$('<div>');
        const $ampVideo = this.$('<amp-video>');
        const attr = $el.attr();
        const width = attr.width;
        const height = attr.height;
        const $source = $el.find('source');
        const src = attr.src || $source && $source.attr('src');
        // set src
        if (src) {
          $ampVideo.attr('src', src);
          // set sizes
          if (width === '100%') {
            $ampVideo
              .attr({ width: 100, height: 100, layout: 'responsive' })
              .addClass(classNameVagueVideo);
          } else if (width && height) {
            $ampVideo.attr({ width: parseInt(width, 10), height: parseInt(height, 10) });
          } else if (width || height) {
            const size = (width && parseInt(width, 10)) || (height && parseInt(height, 10));
            $ampVideo.attr({ width: size, height: size }).addClass(classNameVagueVideo);
          } else {
            $ampVideo
              .attr({ width: sizeVagueVideo, height: sizeVagueVideo })
              .addClass(classNameVagueVideo);
          }
          // set attributes
          if (attr.poster) {
            $ampVideo.attr('poster', attr.poster);
          }
          if (attr.hasOwnProperty('autoplay')) {
            $ampVideo.attr('autoplay', '');
          }
          if (attr.hasOwnProperty('controls')) {
            $ampVideo.attr('controls', '');
          }
          if (attr.hasOwnProperty('loop')) {
            $ampVideo.attr('loop', '');
          }
          if (attr.hasOwnProperty('muted')) {
            $ampVideo.attr('muted', '');
          }
          $ampVideo.append($el.html());
          $conainer.append($ampVideo);
          // replace <img> to <amp-video>
          $el.replaceWith($conainer.html());
        } else {
          $el.remove();
        }
      });
      return this;
    }
  };
}
