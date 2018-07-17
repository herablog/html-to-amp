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

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function extractTweetId(href) {
  // Extract '690077988243836928' from https://twitter.com/nodenpm/status/690077988243836928?ref_src=twsrc
  var pathname = _url2.default.parse(href).pathname || '';
  var tweetId = _path2.default.basename(pathname);
  var isValidTweetId = /\d+/.test(tweetId);
  return isValidTweetId ? tweetId : null;
}

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
    var id = extractTweetId(href);
    if (id) {
      $el.replaceWith('<amp-twitter width="486" height="657"\n          data-tweetid="' + id + '"\n          data-cards="visible"\n          layout="responsive"\n        ></amp-twitter>');
    }
  });
}

function tweetEmbed() {
  var _this3 = this;

  this.$('blockquote.twitter-tweet').each(function (i, el) {
    var $el = _this3.$(el);
    // Use the last tweet url as link to display, because there are many links in embed content.
    var href = $el.children('a[href^="https://twitter.com/"]').last().attr('href') || '';
    var id = extractTweetId(href);
    if (id) {
      $el.replaceWith('<amp-twitter width="486" height="657"\n          data-tweetid="' + id + '"\n          data-cards="visible"\n          layout="responsive"\n        ></amp-twitter>');
    }
  });
}