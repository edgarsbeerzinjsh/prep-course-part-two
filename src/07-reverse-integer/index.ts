/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int: number) {
  let negative: boolean = false;
  if (int < 0) negative = true;
  let answer: string = int.toString().split("").reverse().join("");
  if (negative) answer = "-" + Number(answer.replace("-", ""));
  return Number(answer);
}

export { reverse };
