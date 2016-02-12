'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _img = require('./img');

var _img2 = _interopRequireDefault(_img);

var _video = require('./video');

var _video2 = _interopRequireDefault(_video);

var _audio = require('./audio');

var _audio2 = _interopRequireDefault(_audio);

var _anim = require('./anim');

var _anim2 = _interopRequireDefault(_anim);

var _iframe = require('./iframe');

var _iframe2 = _interopRequireDefault(_iframe);

var _twitter = require('./twitter');

var _twitter2 = _interopRequireDefault(_twitter);

var _instagram = require('./instagram');

var _instagram2 = _interopRequireDefault(_instagram);

var _youtube = require('./youtube');

var _youtube2 = _interopRequireDefault(_youtube);

var _vine = require('./vine');

var _vine2 = _interopRequireDefault(_vine);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _disallowedTags = require('./disallowed-tags');

var _disallowedTags2 = _interopRequireDefault(_disallowedTags);

var _disallowedAttrs = require('./disallowed-attrs');

var _disallowedAttrs2 = _interopRequireDefault(_disallowedAttrs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  AmpImg: _img2.default,
  AmpVideo: _video2.default,
  AmpAudio: _audio2.default,
  AmpAnim: _anim2.default,
  AmpIframe: _iframe2.default,
  AmpTwitter: _twitter2.default,
  AmpInstagram: _instagram2.default,
  AmpYouTube: _youtube2.default,
  AmpVine: _vine2.default,

  AmpInlineStyles: _styles2.default,
  AmpDisallowedTags: _disallowedTags2.default,
  AmpDisallowedAttrs: _disallowedAttrs2.default
};