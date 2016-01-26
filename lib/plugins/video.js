'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _this = this;

  return {
    toAmpVideo: function toAmpVideo() {
      var selectors = ['video'];
      _this.$(selectors.join(',')).each(function (i, el) {
        var $el = _this.$(el);
        var $conainer = _this.$('<div>');
        var $ampVideo = _this.$('<amp-video>');
        var attr = $el.attr();
        var html = $el.html();
        // set attr
        $ampVideo.attr(attr);
        $ampVideo.html(html);
        $conainer.append($ampVideo);
        // replace
        $el.replaceWith($conainer.html());
      });
      return _this;
    }
  };
};