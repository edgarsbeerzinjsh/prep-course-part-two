/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str: string) {
    const count: any = {};
    for (const element of str) {
        if (count[element]) {
        count[element] += 1;
        } else {
        count[element] = 1;
        }
    };
    return Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b);
}

export { maxChar };
