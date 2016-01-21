# html-to-amp

[![Circle CI](https://circleci.ca-tools.org/gh/hara-kazunari/html-to-amp.svg?style=shield)](https://circleci.ca-tools.org/gh/hara-kazunari/html-to-amp)


Transform the normal html to the amp html.

## How to Use

```JavaScript
import htmlToAmp from 'html-to-amp';

const html = '<img src="a.png" width="100" height="100" alt="an image" />';
const result = htmlToAmp(html)
  .toAmpImg()
  .html(); // <amp-img src="a.png" width="100" height="100" alt="an image" />
```

## Built-in Plugins

### img
```
toAmpImg()
```

### anim
```
toAmpAnim(['img[src$=".gif"]'])
```

### audio
```
toAmpAudio()
```

### video
```
toAmpVideo()
```

### iframe
```
toAmpIframe()
```

### YouTube
```
toAmpYouTube()
```

### Instagram
```
toAmpInstagram()
```

### Twitter
```
toAmpTwitter()
```

### Vine
```
toAmpVine()
```
