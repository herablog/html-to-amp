'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _this2 = this;

  return {
    removeDisallowedAttrs: function removeDisallowedAttrs() {
      removeAttrs.bind(_this2)();
      return _this2;
    }
  };
};

function removeAttrs() {
  var _this = this;

  var attrs = ['align', 'clear', 'size', 'color'];
  var selectors = attrs.map(function (a) {
    return '[' + a + ']';
  });
  this.$(selectors.join(',')).each(function (i, el) {
    var $el = _this.$(el);
    var $attr = $el.attr();
    attrs.forEach(function (a) {
      if ($attr.hasOwnProperty(a)) {
        delete $attr[a];
      }
    });
    $el.attr($attr);
  });
}