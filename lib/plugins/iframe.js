'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _this = this;

  return {
    toAmpIframe: function toAmpIframe() {
      var selectors = ['iframe:not([src^="https://www.youtube.com/embed/"],[src^="https://vine.co/v/"])'];
      _this.$(selectors.join(',')).each(function (i, el) {
        var $el = _this.$(el);
        var $conainer = _this.$('<div>');
        var $ampIframe = _this.$('<amp-iframe>');
        var attr = $el.attr();
        var html = $el.html();
        // set attr
        $ampIframe.attr(attr);
        $ampIframe.html(html);
        $conainer.append($ampIframe);
        // replace
        $el.replaceWith($conainer.html());
      });
      return _this;
    }
  };
};