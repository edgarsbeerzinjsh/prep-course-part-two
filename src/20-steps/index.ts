/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

function steps(n: number) {
    let step = " ".repeat(n);
    const pyramidSymbol = "#";
    for (let i = 0; i < n; i++) {
        step = step.replace(step.charAt(i), pyramidSymbol);
        console.log (step);
    };
};

export { steps };
