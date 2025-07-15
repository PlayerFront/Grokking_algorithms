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

    // Note: Initializing with zeros isn't strictly necessary here,
    // as we'll overwrite all values during sorting.
    // It's done to explicitly show the fixed-size array allocation.
    const result = new Array(size).fill(0);
    for (let i = 0; i < size; i++) {
        const smallestInd = findSmallest(arr);
        const [smallestEl] = arr.splice(smallestInd, 1);
        result[i] = smallestEl;
    }

    return result;
};

const sourceArray = [5, 3, 6, 2, 10];
const sortedArray = selectionSort(sourceArray);

console.log(sourceArray); // [5, 3, 6, 2, 10]
console.log(sortedArray); // [2, 3, 5, 6, 10]

/**
 * Finds the index of the element with the first alphabet's position
 * @param {string[]} names - Source array
 * @returns {number} - Index of the element
 */

const findAlphabeticallyFirst = (names) => {
    let smallestIndex = 0;
    let smallestName = names[0];

    for (let i = 1; i < names.length; i++) {
        if (names[i].toLowerCase() < smallestName.toLocaleLowerCase()) {
            smallestName = names[i];
            smallestIndex = i;
        }

        return smallestIndex;
    }
}

const names = ["Maria", "anna", "Ivan", "Pyotr"];
const index = findAlphabeticallyFirst(names);
console.log(` "${names[index]}"`);

/**
 * Sort array by names
 * @param {string[]} names - Source array
 * @returns {string[]} - New sorted array
 */

const selectionSortNames = (names) => {
    const sorted = [];
    const namesCopy = [...names];

    while (namesCopy.length > 0) {
        const smallestIndex = findAlphabeticallyFirst(namesCopy);
        const [smallestName] = namesCopy.splice(smallestIndex, 1);
        sorted.push(smallestName);
    }

    return sorted;

}


const unsortedNames = ["Maria", "anna", "Ivan", "Pyotr"];
const sortedNames = selectionSortNames(unsortedNames);
console.log(sortedNames); 