'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _this4 = this;

  return {
    removeDisallowedTags: function removeDisallowedTags() {
      removeTags.bind(_this4)();
      return _this4;
    },
    replaceDisallowedTags: function replaceDisallowedTags() {
      replaceInlineTags.bind(_this4)();
      replaceBlockTags.bind(_this4)();
      return _this4;
    }
  };
};

function removeTags() {
  var _this = this;

  var selectors = ['style', 'input', 'textarea', 'select', 'option', 'form', 'embed', 'applet', 'param', 'object', 'frameset', 'base', 'script'];
  this.$(selectors.join(',')).each(function (i, el) {
    var $el = _this.$(el);
    $el.remove();
  });
}

function replaceInlineTags() {
  var _this2 = this;

  var selectors = ['font'];
  this.$(this.$(selectors.join(',')).get().reverse()).each(function (i, el) {
    var $el = _this2.$(el);
    var $conainer = _this2.$('<div>');
    var $newEl = _this2.$('<span>');
    $newEl.html($el.html());
    $conainer.append($newEl);
    $el.replaceWith($conainer.html());
  });
}

function replaceBlockTags() {
  var _this3 = this;

  var selectors = ['fieldset', 'legend', 'marquee'];
  this.$(this.$(selectors.join(',')).get().reverse()).each(function (i, el) {
    var $el = _this3.$(el);
    var $conainer = _this3.$('<div>');
    var $newEl = _this3.$('<div>');
    $newEl.html($el.html());
    $conainer.append($newEl);
    $el.replaceWith($conainer.html());
  });
}