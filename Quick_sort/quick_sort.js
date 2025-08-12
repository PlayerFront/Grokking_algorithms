/**
 * Implementation of the QuickSort algorithm in JavaScript.
 * @param {number[]} arr - The array of numbers to be sorted.
 * @returns {number[]} - The sorted array.
 * @example
 * const array = [3, 1, 4, 1, 5, 9, 2, 6];
 * console.log(quickSort(array)); // Output: [1, 1, 2, 3, 4, 5, 6, 9]
 * @complexity
 * - Average time: O(n log n)
 * - Worst-case time: O(n²) (rare, depends on pivot choice)
 * - Space: O(log n) (due to recursion stack)
 */
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    const equal = [];

    for (const element of arr) {
        if (element < pivot) {
            left.push(element);
        } else if (element > pivot){
            right.push(element);
        } else {
            equal.push(element);
        }
    }

    return [...quickSort(left), ...equal, ...quickSort(right)];
}

const array = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quickSort(array);
console.log(sortedArray);