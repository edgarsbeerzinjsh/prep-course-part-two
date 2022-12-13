/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
  count(str: string) {
    const words: string[] = str
      .toLowerCase()
      .replace(/(\s+)/g, " ")
      .trim()
      .split(" ");
    const counts: {} = words.reduce((count: any, word: any) => {
      count[word] = count.hasOwnProperty(word) ? count[word] + 1 : 1;
      return count;
    }, {});
    return counts;
  }
}

export { Words };
