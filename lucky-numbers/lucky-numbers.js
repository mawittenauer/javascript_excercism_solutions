// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
    const num1 = parseInt(array1.join(''));
    const num2 = parseInt(array2.join(''));
    return num1 + num2;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
    const numString = value.toString();
    return numString.split('').join('') == numString.split('').reverse().join('');
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
    if (input == '' || input == null || input == undefined)
        return 'Required field';

    const parsedNumber = Number(input);

    if (Number.isNaN(parsedNumber) || parsedNumber == 0)
        return 'Must be a number besides 0';

    return '';
}
