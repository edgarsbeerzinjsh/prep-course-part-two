/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function longestWord(sen: string) {
  const words: string[] = sen.replace(/[^a-zA-Z ]/g, "").split(" ");
  let answer: string = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > answer.length) {
      answer = words[i]
    };
  }
  return answer;
}

export { longestWord };
