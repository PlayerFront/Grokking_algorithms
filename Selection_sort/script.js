/**
 * Finds the index of the element with the smallest value in the array
 * @param {Array} array Source array
 * @returns {number} Index of the element with the smallest value
 */

const findSmallest = (arr) => {
    let [smallestEl] = arr; // destructuring
    let smallestInd = 0;

    for (let i = 1; i < arr.length; i++) {
        const el = arr[i];

        if (el >= smallestEl) continue;
        
        smallestEl = el;
        smallestInd = i;
    }
    return smallestInd;
};

/**
 * Sort array by increment
 * @param {Array} array Source array
 * @returns {Array} New sorted array
 */

const selectionSort = (arr) => {
    const size = arr.length;
    const result = new Array(size).fill(0);
}
