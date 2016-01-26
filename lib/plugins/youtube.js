'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var _this4 = this;

  return {
    toAmpYouTube: function toAmpYouTube() {
      youTubeIframe.bind(_this4)();
      youTubeLinks.bind(_this4)();
      youTubeShortenLinks.bind(_this4)();
      return _this4;
    }
  };
};

function youTubeLinks() {
  var _this = this;

  this.$('a[href^="https://www.youtube.com/watch"]').each(function (i, el) {
    var $el = _this.$(el);
    var href = $el.attr('href') || '';
    var matched = href.match(/v=(\w+)/);
    var id = matched ? matched[1] : null;
    if (id) {
      $el.replaceWith('<amp-youtube width="480" height="270"\n          data-videoid="' + id + '"\n          layout="responsive"\n        ></amp-youtube>');
    }
  });
}

function youTubeShortenLinks() {
  var _this2 = this;

  this.$('a[href^="https://youtu.be/"]').each(function (i, el) {
    var $el = _this2.$(el);
    var href = $el.attr('href') || '';
    var id = href.split('/')[3];
    if (id) {
      $el.replaceWith('<amp-youtube width="480" height="270"\n          data-videoid="' + id + '"\n          layout="responsive"\n        ></amp-youtube>');
    }
  });
}

function youTubeIframe() {
  var _this3 = this;

  this.$('iframe[src^="https://www.youtube.com/embed"]').each(function (i, el) {
    var $el = _this3.$(el);
    var src = $el.attr('src') || '';
    var id = src.split('/')[4];
    if (id) {
      $el.replaceWith('<amp-youtube width="480" height="270"\n          data-videoid="' + id + '"\n          layout="responsive"\n        ></amp-youtube>');
    }
  });
}