function bubbleSort(arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-i; j++) {
            if (arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

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

function merge(arr1, arr2) {
    const sorted = [];
    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer1 < arr1.length && pointer2 < arr2.length) {

        if (arr1[pointer1] < arr2[pointer2]) {
            sorted.push(arr1[pointer1]);
            pointer1++;
        } else {
            sorted.push(arr2[pointer2]);
            pointer2++;
        }
    }

    return sorted.concat(arr1.slice(pointer1)).concat(arr2.slice(pointer2));
}

function mergeSort(arr) {

    function decompose(arr1, arr2) {
        if (arr1.length > 1 || arr2.length > 1) {
            const leftIdx = Math.floor(arr1.length/2);
            const rightIdx = Math.floor(arr2.length/2);
            const left = decompose(arr2.slice(0,rightIdx), arr2.slice(rightIdx));
            const right = decompose(arr1.slice(0,leftIdx), arr1.slice(leftIdx));
            return merge(left, right);
        } else {
            return merge(arr1, arr2);
        }
    }

    if (arr.length > 1) {
        const idx = Math.floor(arr.length/2);
        const result = decompose(arr.slice(0,idx), arr.slice(idx));
        return result;
    } else {
        return arr;
    }
}

/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/
function pivot(arr) {
    const lt = [];
    const gt = [];
    const pivot = arr[0];

    for (let num of arr.splice(1)) {
        if (num <= pivot) {
            lt.push(num);
        } else {
            gt.push(num);
        }
    }
    lt.push(pivot);
    return [lt.concat(gt), lt.lastIndexOf(pivot)];
}

//quickSort algorithm. uses pivot function above.
function quickSort(arr) {
    if (arr.length > 1) {
        let [sorted, idx] = pivot(arr);
        let pivotPt = sorted[idx];
        let left = quickSort(sorted.slice(0, idx));
        let right = quickSort(sorted.slice(idx+1));
        left.push(pivotPt);
        return left.concat(right);
    } else {
        return arr;
    }
}

module.exports = { bubbleSort, merge, mergeSort, insertionSort, selectionSort, pivot, quickSort }