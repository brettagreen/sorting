function selectionSort(arr) {

    for (let x = 0; x < arr.length; x++) {
        let smallest = arr[x];
        let idx = x;
        for (let j = x; j < arr.length; j++) {
            if (arr[j] < smallest) {
                smallest = arr[j];
                idx = j;
            }
        }
        let temp = arr[x];
        arr[x] = smallest;
        arr[idx] = temp;
    }

    return arr; 
}

let array = [5,3,89,0,-1,4,77,100,-100,22,-22,34,11]; 
console.log(selectionSort(array));

module.exports = selectionSort;