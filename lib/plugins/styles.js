'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _this = this;

  return {
    removeInlineStyles: function removeInlineStyles() {
      _this.$('[style]').each(function (i, el) {
        var $el = _this.$(el);
        $el.removeAttr('style');
      });
      return _this;
    }
  };
};