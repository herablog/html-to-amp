'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _this = this;

  return {
    toAmpAudio: function toAmpAudio() {
      var selectors = ['audio'];
      _this.$(selectors.join(',')).each(function (i, el) {
        var $el = _this.$(el);
        var $conainer = _this.$('<div>');
        var $ampAudio = _this.$('<amp-audio>');
        var attr = $el.attr();
        var html = $el.html();
        // set attr
        $ampAudio.attr(attr);
        $ampAudio.html(html);
        $conainer.append($ampAudio);
        // replace
        $el.replaceWith($conainer.html());
      });
      return _this;
    }
  };
};