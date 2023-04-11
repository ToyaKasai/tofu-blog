import { load } from 'cheerio';
import { highlightAuto } from 'highlightjs';

const HIGHLIGHT_JS_BASE_CLASS = 'hljs';

/**
 * microCMSリッチエディタ内のcode blockを「highlightjs」に対応させる
 * @param htmlString
 * @see https://blog.microcms.io/syntax-highlighting-on-server-side/
 */
export const formatCodeBlockToHighlight = (htmlString: string) => {
  const $ = load(htmlString);

  $('pre code').each((_, element) => {
    const result = highlightAuto($(element).text());
    $(element).html(result.value);
    $(element).addClass(HIGHLIGHT_JS_BASE_CLASS);
  });

  return $.html();
};
