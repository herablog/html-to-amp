'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _this = this;

  return {
    toAmpVideo: function toAmpVideo() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var selectors = ['video'];
      _this.$(selectors.join(',')).each(function (i, el) {
        var classNameVagueVideo = 'amp-video__vague';
        var sizeVagueVideo = opts.sizeVagueVideo || 200;
        var $el = _this.$(el);
        var $conainer = _this.$('<div>');
        var $ampVideo = _this.$('<amp-video>');
        var attr = $el.attr();
        var width = attr.width;
        var height = attr.height;
        var $source = $el.find('source');
        var src = attr.src || $source && $source.attr('src');
        // set src
        if (src) {
          $ampVideo.attr('src', src);
          // set sizes
          if (width === '100%') {
            $ampVideo.attr({ width: 100, height: 100, layout: 'responsive' }).addClass(classNameVagueVideo);
          } else if (width && height) {
            $ampVideo.attr({ width: parseInt(width, 10), height: parseInt(height, 10) });
          } else if (width || height) {
            var size = width && parseInt(width, 10) || height && parseInt(height, 10);
            $ampVideo.attr({ width: size, height: size }).addClass(classNameVagueVideo);
          } else {
            $ampVideo.attr({ width: sizeVagueVideo, height: sizeVagueVideo }).addClass(classNameVagueVideo);
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
      return _this;
    }
  };
};