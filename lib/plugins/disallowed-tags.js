'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _this2 = this;

  return {
    removeDisallowedTags: function removeDisallowedTags() {
      inlineTags.bind(_this2)();
      return _this2;
    }
  };
};

function inlineTags() {
  var _this = this;

  var selectors = ['font'];
  this.$(selectors.join(',')).each(function (i, el) {
    var $el = _this.$(el);
    var $conainer = _this.$('<div>');
    var $newEl = _this.$('<span>');
    $newEl.html($el.html());
    $conainer.append($newEl);
    $el.replaceWith($conainer.html());
  });
}