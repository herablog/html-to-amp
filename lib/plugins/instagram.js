'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _this4 = this;

  return {
    toAmpInstagram: function toAmpInstagram() {
      instagramEmbed.bind(_this4)();
      removeInstagramScripts.bind(_this4)();
      instagramLinks.bind(_this4)();
      return _this4;
    }
  };
};

function removeInstagramScripts() {
  var _this = this;

  this.$('script[src*="platform.instagram.com"]').each(function (i, el) {
    _this.$(el).remove();
  });
}

function instagramLinks() {
  var _this2 = this;

  this.$('a[href^="https://www.instagram.com/p/"]').each(function (i, el) {
    var $el = _this2.$(el);
    var href = $el.attr('href') || '';
    var id = href.split('/')[4];
    if (id) {
      $el.replaceWith('<amp-instagram width="400" height="400"\n          data-shortcode="' + id + '"\n          layout="responsive"\n        ></amp-instagram>');
    }
  });
}

function instagramEmbed() {
  var _this3 = this;

  this.$('blockquote.instagram-media').each(function (i, el) {
    var $el = _this3.$(el);
    var href = $el.find('a[href^="https://www.instagram.com/p/"]').attr('href') || '';
    var id = href.split('/')[4];
    if (id) {
      $el.replaceWith('<amp-instagram width="400" height="400"\n          data-shortcode="' + id + '"\n          layout="responsive"\n        ></amp-instagram>');
    }
  });
}