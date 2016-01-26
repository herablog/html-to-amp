'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _this4 = this;

  return {
    toAmpVine: function toAmpVine() {
      vineEmbed.bind(_this4)();
      removeVineScripts.bind(_this4)();
      vineLinks.bind(_this4)();
      return _this4;
    }
  };
};

function removeVineScripts() {
  var _this = this;

  this.$('script[src$="platform.vine.co/static/scripts/embed.js"]').each(function (i, el) {
    _this.$(el).remove();
  });
}

function vineEmbed() {
  var _this2 = this;

  this.$('iframe[src^="https://vine.co/v/"]').each(function (i, el) {
    var $el = _this2.$(el);
    var src = $el.attr('src') || '';
    var id = src.split('/')[4];
    if (id) {
      $el.replaceWith('<amp-vine width="400" height="400"\n          data-vineid="' + id + '"\n          layout="responsive"\n        ></amp-vine>');
    }
  });
}

function vineLinks() {
  var _this3 = this;

  this.$('a[href^="https://vine.co/v/"]').each(function (i, el) {
    var $el = _this3.$(el);
    var href = $el.attr('href') || '';
    var id = href.split('/')[4];
    if (id) {
      $el.replaceWith('<amp-vine width="400" height="400"\n          data-vineid="' + id + '"\n          layout="responsive"\n        ></amp-vine>');
    }
  });
}