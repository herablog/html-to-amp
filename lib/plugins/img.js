'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _this = this;

  return {
    toAmpImg: function toAmpImg() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var selectors = ['img'];
      _this.$(selectors.join(',')).each(function (i, el) {
        var classNameVagueImage = 'amp-img__vague';
        var sizeVagueImage = opts.sizeVagueImage || 200;
        var $el = _this.$(el);
        var $conainer = _this.$('<div>');
        var $ampImg = _this.$('<amp-img>');
        var attr = $el.attr();
        var width = attr.width;
        var height = attr.height;
        // set src
        if (attr.src) {
          $ampImg.attr('src', attr.src);
          // set sizes
          if (width === '100%') {
            $ampImg.attr({ width: 100, height: 100, layout: 'responsive' }).addClass(classNameVagueImage);
          } else if (width && height) {
            $ampImg.attr({ width: parseInt(width, 10), height: parseInt(height, 10) });
          } else if (width || height) {
            var size = width && parseInt(width, 10) || height && parseInt(height, 10);
            $ampImg.attr({ width: size, height: size }).addClass(classNameVagueImage);
          } else {
            $ampImg.attr({ width: sizeVagueImage, height: sizeVagueImage }).addClass(classNameVagueImage);
          }
          // set alt
          if (attr.alt) {
            $ampImg.attr('alt', attr.alt);
          }
          $conainer.append($ampImg);
          // replace <img> to <amp-img>
          $el.replaceWith($conainer.html());
        } else {
          $el.remove();
        }
      });
      return _this;
    }
  };
};