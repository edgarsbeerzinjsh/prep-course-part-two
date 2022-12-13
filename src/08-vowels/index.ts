/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(s: string) {
  let countVowels = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLowerCase())) countVowels++;
  }
  return countVowels;
}

export { vowels };
