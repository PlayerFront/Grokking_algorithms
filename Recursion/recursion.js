/**
 * Countdown
 * @param {number} i Number
 */

function countdown(i) {
    console.log(i);

    if (i <= 0) return;

    countdown(i - 1);
}

countdown(5);
countdown(15);

/**
 * Consider the factorial of the number
 * @param {number} x Number
 * @returns {number} Result
 */

function fact(x) {
    if (x === 0) return 1;
    return x * fact(x - 1);
}

console.log(fact(5));

/**
 * _recursive_selection_sort
 * Finds smallest element of an aray
 * @param {Array} arr array for searching
 * @return {number} index of the smallest element in array
 */

const findSmallest = (arr, smallest = arr[0], smallestIndex = 0, i = 1) => {
    if (arr.length <= i) return smallestIndex;

    const curr = arr[i];
    if (curr < smallest) {
        smallest = curr;
        smallestIndex = i;
    }

    return findSmallest(arr, smallest, smallestIndex, i + 1);
}

/**
 * Sorts recursively an array of numbers
 * @param {Array} arr An array of numbers
 * @return {Array} New sorted array
 */

const selectionSort = (arr, result = []) => {
    if (arr.length > 0) {
        const smallestIndex = findSmallest(arr);
        const [smallest] = arr.splice(smallestIndex, 1);
        result.push(smallest);
        return selectionSort(arr, result);
    }

    return result;
}

const arr = [5, 3, 6, 2, 10];
console.log(selectionSort(arr));
