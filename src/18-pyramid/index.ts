/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(n: number) {
    let pyramidChange: string = " ".repeat(n - 1);
    const pyramidCenter: string = "#";
    for (let i = 0; i < n; i++) {
        console.log (pyramidChange.split("").reverse().join("") + pyramidCenter + pyramidChange);
        pyramidChange = pyramidChange.replace(pyramidChange.charAt(i), pyramidCenter);
    };
};

export { pyramid };
