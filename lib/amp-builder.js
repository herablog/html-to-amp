'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AmpBuilder = undefined;
exports.ampBuilder = ampBuilder;

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _plugins = require('./plugins/');

var _plugins2 = _interopRequireDefault(_plugins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AmpBuilder = exports.AmpBuilder = function () {
  function AmpBuilder(html, opts) {
    _classCallCheck(this, AmpBuilder);

    this.$ = _cheerio2.default.load(html);
    this.opts = opts;
  }

  _createClass(AmpBuilder, [{
    key: 'load',
    value: function load(html) {
      this.$ = _cheerio2.default.load(html);
    }
  }, {
    key: 'extends',
    value: function _extends() {
      var register = arguments.length <= 0 || arguments[0] === undefined ? function () {} : arguments[0];

      var methods = register.bind(this)();
      Object.assign(AmpBuilder.prototype, methods);
    }
  }, {
    key: 'html',
    value: function html() {
      return this.$.html();
    }
  }]);

  return AmpBuilder;
}();

function ampBuilder() {
  var html = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var builder = new AmpBuilder(html, opts);
  // add plugins
  builder.extends(_plugins2.default.AmpImg);
  builder.extends(_plugins2.default.AmpVideo);
  builder.extends(_plugins2.default.AmpAudio);
  builder.extends(_plugins2.default.AmpAnim);
  builder.extends(_plugins2.default.AmpIframe);
  builder.extends(_plugins2.default.AmpTwitter);
  builder.extends(_plugins2.default.AmpInstagram);
  builder.extends(_plugins2.default.AmpYouTube);
  builder.extends(_plugins2.default.AmpVine);

  builder.extends(_plugins2.default.AmpInlineStyles);
  builder.extends(_plugins2.default.AmpDisallowedTags);
  builder.extends(_plugins2.default.AmpDisallowedAttrs);
  return builder;
}

exports.default = ampBuilder;