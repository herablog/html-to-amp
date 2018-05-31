'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _this = this;

  return {
    toAmpAnim: function toAmpAnim() {
      var selectors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      _this.$(selectors.join(',')).each(function (i, el) {
        var $el = _this.$(el);
        var $conainer = _this.$('<div>');
        var $ampImg = _this.$('<amp-anim>');
        var attr = $el.attr();
        var src = attr.src;
        var width = attr.width && parseInt(attr.width, 10);
        var height = attr.height && parseInt(attr.height, 10);
        var alt = attr.alt;
        // set attr
        $ampImg.attr('src', src);
        if (width && height) {
          $ampImg.attr('width', width).attr('height', height);
        } else if (width || height) {
          var sizes = width || height;
          $ampImg.attr('sizes', sizes);
        }
        if (alt) {
          $ampImg.attr('alt', alt);
        }
        $conainer.append($ampImg);
        // replace
        $el.replaceWith($conainer.html());
      });
      return _this;
    }
  };
};