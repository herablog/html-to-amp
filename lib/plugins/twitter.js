'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _this4 = this;

  return {
    toAmpTwitter: function toAmpTwitter() {
      tweetEmbed.bind(_this4)();
      removeTwitterScripts.bind(_this4)();
      tweetLinks.bind(_this4)();
      return _this4;
    }
  };
};

function removeTwitterScripts() {
  var _this = this;

  this.$('script[src$="platform.twitter.com/widgets.js"]').each(function (i, el) {
    _this.$(el).remove();
  });
}

function tweetLinks() {
  var _this2 = this;

  this.$('a[href^="https://twitter.com/"]').each(function (i, el) {
    var $el = _this2.$(el);
    var href = $el.attr('href') || '';
    var id = href.split('/')[5];
    if (id) {
      $el.replaceWith('<amp-twitter width="486" height="657"\n          data-tweetid="' + id + '"\n          data-cards="visible"\n          layout="responsive"\n        ></amp-twitter>');
    }
  });
}

function tweetEmbed() {
  var _this3 = this;

  this.$('blockquote.twitter-tweet').each(function (i, el) {
    var $el = _this3.$(el);
    var href = $el.find('a[href^="https://twitter.com/"]').attr('href') || '';
    var id = href.split('/')[5];
    if (id) {
      $el.replaceWith('<amp-twitter width="486" height="657"\n          data-tweetid="' + id + '"\n          data-cards="visible"\n          layout="responsive"\n        ></amp-twitter>');
    }
  });
}