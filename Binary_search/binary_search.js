/**
 * Searches recursively number from the list
 * @param {Array} list Source array
 * @param {number} item Search item
 * @returns {(number|null)} Number if the value is found or NULL otherwise
 */
function binary_search (arr, item){
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const middle = Math.floor((low + high) / 2);
        const suppose = arr[middle];

        if (suppose === item) return middle;
        else if (suppose > item) high = middle - 1;
        else low = middle + 1;
    }

    return null;
}

const arrOfNumbers = [1, 3, 5, 7, 9];
const arrOfNames = ['Helena', 'Antony', 'Kevin', 'Alex', 'Kate'];

console.log(binary_search(arrOfNumbers, 3));
console.log(binary_search(arrOfNames, 'Helena'));