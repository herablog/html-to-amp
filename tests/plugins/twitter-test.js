import { expect } from 'chai';
import ampBuilder from '../../src/amp-builder';

describe('twitter', () => {
  it('changes tag when the el has the instagram link.', () => {
    const html = '<a href="https://twitter.com/nodenpm/status/690077988243836928">Twitter</a>';
    const fixture = '<amp-twitter width="486" height="657" data-tweetid="690077988243836928" data-cards="visible" layout="responsive"></amp-twitter>';
    const builder = ampBuilder(html);
    const result = builder.toAmpTwitter().html();
    expect(result).to.equal(fixture);
  });

  it('changes tag when the twitter embed.', () => {
    const html = '<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">bentojs-api-email (1.0.0): <a href="https://t.co/kujT9n6i2P">https://t.co/kujT9n6i2P</a> A module written for the bentojs api platform for emails</p>&mdash; npm tweets (@nodenpm) <a href="https://twitter.com/nodenpm/status/690077988243836928">January 21, 2016</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>';
    const fixture = '<amp-twitter width="486" height="657" data-tweetid="690077988243836928" data-cards="visible" layout="responsive"></amp-twitter>';
    const builder = ampBuilder(html);
    const result = builder.toAmpTwitter().html();
    expect(result).to.equal(fixture);
  });

  it('changes tag when the twitter embed with some tweet links.', () => {
    const html = '<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">bentojs-api-email (1.0.0): <a href="https://twitter.com/hashtag/google">https://twitter.com/hashtag/google</a> A module written for the bentojs api platform for emails</p>&mdash; npm tweets (@nodenpm) <a href="https://twitter.com/nodenpm/status/690077988243836928">January 21, 2016</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>';
    const fixture = '<amp-twitter width="486" height="657" data-tweetid="690077988243836928" data-cards="visible" layout="responsive"></amp-twitter>';
    const builder = ampBuilder(html);
    const result = builder.toAmpTwitter().html();
    expect(result).to.equal(fixture);
  });

  it('changes tag when the twitter embed and twitter link has an extra param.', () => {
    const html = '<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">bentojs-api-email (1.0.0): <a href="https://t.co/kujT9n6i2P">https://t.co/kujT9n6i2P</a> A module written for the bentojs api platform for emails</p>&mdash; npm tweets (@nodenpm) <a href="https://twitter.com/nodenpm/status/690077988243836928?ref_src=twsrc">January 21, 2016</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>';
    const fixture = '<amp-twitter width="486" height="657" data-tweetid="690077988243836928" data-cards="visible" layout="responsive"></amp-twitter>';
    const builder = ampBuilder(html);
    const result = builder.toAmpTwitter().html();
    expect(result).to.equal(fixture);
  });
});
