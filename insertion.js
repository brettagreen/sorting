function insertionSort(arr) {
    let temp;

    for (let x = 1; x < arr.length; x++) {
        for (let j = x; j > 0; j--) {
            if (arr[j] < arr[j-1]) {
                temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }

    }

    return arr;
}

let array = [5,3,89,0,-1,4,77,100,-100,22,-22,34,11]; 
console.log(insertionSort(array));

module.exports = insertionSort;