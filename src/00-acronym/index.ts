/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string): string {
    /*
    const words: string[] = input.replace(/'/g, "").replace(/[^a-zA-Z ]/g, " ").split(" ");
    const firstLetters: string[] = words.map((word) => word.charAt(0).toUpperCase());
    return firstLetters.join("")
    */
    return input
        .replace(/[^a-zA-Z']/g, " ")
        .split(/[ -]/g)
        .map((word) => word[0])
        .join("")
        .toUpperCase()
    
};

export { parse };
