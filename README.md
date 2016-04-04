# html-to-amp

[![Circle CI](https://circleci.com/gh/herablog/html-to-amp.svg?style=shield)](https://circleci.com/gh/herablog/html-to-amp)


Transform the normal html to the amp html.

## Usage

```JavaScript
import htmlToAmp from 'html-to-amp';

const html = '<img src="a.png" width="100" height="100" alt="an image" />';
const result = htmlToAmp(html)
  .toAmpImg()
  .html(); // <amp-img src="a.png" width="100" height="100" alt="an image"></amp-img>
```

## Built-in Plugins

### img
```
toAmpImg()
```

```html
<img src="a.png" width="100" height="100" alt="an image" />
-> <amp-img src="a.png" width="100" height="100" alt="an image"></amp-img>
```

### anim
```
toAmpAnim(['img[src$=".gif"]'])
```

```html
<img src="a.gif" width="16" height="16" alt="test" />
-> <amp-anim src="a.gif" width="16" height="16" alt="test"></amp-anim>
```

### audio
```
toAmpAudio()
```

```html
<audio src="a.mp3"><div fallback><p>Your browser does not support HTML5 audio</p></div><source type="audio/mpeg" src="foo.mp3"></audio>
-> <amp-audio src="a.mp3"><div fallback=""><p>Your browser does not support HTML5 audio</p></div><source type="audio/mpeg" src="foo.mp3"></amp-audio>
```

### video
```
toAmpVideo()
```

```html
<video src="a.mp4" width="100" height="100"><div fallback><p>Your browser does not support HTML5 video</p></div><source type="video/mpeg" src="foo.mp4"></video>
-> <amp-video src="a.mp4" width="100" height="100"><div fallback=""><p>Your browser does not support HTML5 video</p></div><source type="video/mpeg" src="foo.mp4"></amp-video>
```

### iframe
```
toAmpIframe()
```

```html
<iframe src="a.html" width="400" height="400"><div></div></iframe>
-> <amp-iframe src="a.html" width="400" height="400"><div></div></amp-iframe>
```

### YouTube
```
toAmpYouTube()
```

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/3rE4sHJxdBg" frameborder="0" allowfullscreen></iframe>
-> <amp-youtube width="480" height="270" data-videoid="3rE4sHJxdBg" layout="responsive"></amp-youtube>
```

### Instagram
```
toAmpInstagram()
```

```html
<blockquote class="instagram-media">...</blockquote><script async defer src="//platform.instagram.com/en_US/embeds.js"></script>
-> <amp-instagram width="400" height="400" data-shortcode="BAyse6sCorr" layout="responsive"></amp-instagram>
```

### Twitter
```
toAmpTwitter()
```

```html
<blockquote class="twitter-tweet" lang="en">>...</blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
-> <amp-twitter width="486" height="657" data-tweetid="690077988243836928" data-cards="visible" layout="responsive"></amp-twitter>
```

### Vine
```
toAmpVine()
```

```html
<iframe src="https://vine.co/v/MdKjXez002d/embed/simple" width="600" height="600" frameborder="0"></iframe><script src="https://platform.vine.co/static/scripts/embed.js"></script>
-> <amp-vine width="400" height="400" data-vineid="MdKjXez002d" layout="responsive"></amp-vine>
```

## Extended Plugins
You can also add your own plugins.

```JavaScript
function htmlToAmpOriginalMethods() {
  return {
    removeDisallowedTags: () => {
      this.$('[src^="file://"]').each((i, el) => {
        this.$(el).remove();
      });
      return this;
    }
  };
}
const html = '<div><img src="file://a.png" /></div>';
const builder = htmlToAmp(html);
builder.extends(htmlToAmpOriginalMethods);
builder.removeDisallowedTags().html(); // <div></div>
```
