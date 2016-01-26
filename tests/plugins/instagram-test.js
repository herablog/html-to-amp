import { expect } from 'chai';
import ampBuilder from '../../src/amp-builder';

describe('instagram', () => {
  it('changes tag when the el has the instagram link.', () => {
    const html = '<a href="https://www.instagram.com/p/BAyse6sCorr/">Instagram</a>';
    const fixture = '<amp-instagram width="400" height="400" data-shortcode="BAyse6sCorr" layout="responsive"></amp-instagram>';
    const builder = ampBuilder(html);
    const result = builder.toAmpInstagram().html();
    expect(result).to.equal(fixture);
  });

  it('changes tag when the instagram embed.', () => {
    const html = '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="6" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAGFBMVEUiIiI9PT0eHh4gIB4hIBkcHBwcHBwcHBydr+JQAAAACHRSTlMABA4YHyQsM5jtaMwAAADfSURBVDjL7ZVBEgMhCAQBAf//42xcNbpAqakcM0ftUmFAAIBE81IqBJdS3lS6zs3bIpB9WED3YYXFPmHRfT8sgyrCP1x8uEUxLMzNWElFOYCV6mHWWwMzdPEKHlhLw7NWJqkHc4uIZphavDzA2JPzUDsBZziNae2S6owH8xPmX8G7zzgKEOPUoYHvGz1TBCxMkd3kwNVbU0gKHkx+iZILf77IofhrY1nYFnB/lQPb79drWOyJVa/DAvg9B/rLB4cC+Nqgdz/TvBbBnr6GBReqn/nRmDgaQEej7WhonozjF+Y2I/fZou/qAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BAyse6sCorr/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">Rakitic: “A very well deserved victory, the result of a lot of hard work. We are very happy with how we played today.” Rakitic: “El resultat hauria estat millor sense el seu gol però crec que hem estat superiors. L’Athletic Club sempre és un equip molt complicat i més a casa seva”. Rakitic: &#34;El resultado habría sido mejor sin su gol pero creo que hemos sido superiores. El Athletic Club siempre es un equipo muy complicado y más en su casa&#34;. #Rakitic #igersFCB #FCBarcelona #CopaFCB</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">FC Barcelonaさん(@fcbarcelona)が投稿した写真 - <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2016-01-21T07:06:58+00:00">2016 1月 20 11:06午後 PST</time></p></div></blockquote><script async defer src="//platform.instagram.com/en_US/embeds.js"></script>';
    const fixture = '<amp-instagram width="400" height="400" data-shortcode="BAyse6sCorr" layout="responsive"></amp-instagram>';
    const builder = ampBuilder(html);
    const result = builder.toAmpInstagram().html();
    expect(result).to.equal(fixture);
  });
});
