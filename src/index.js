const smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
/**
 * converts a string to title case
 * http://individed.com/code/to-title-case/
 *
 * @param  {string} str - the string to convert
 *
 * @return {string} - the converted string
 */
export default function toTitleCase(str) {
  str = str.toLowerCase();

  return str.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, (match, index, title) => {
    if (index > 0 && index + match.length !== title.length &&
      smallWords.test(match) && title.charAt(index - 2) !== ':' &&
      (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') &&
      title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (/[A-Z]|\../.test(match.substr(1))) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
}
