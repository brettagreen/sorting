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

let array = [5,3,89,0,-1,4,77,100,-100,22,-22,34,11]; 
console.log(mergeSort(array));

// let arr1 = [1,3,4,5];
// let arr2 = [2,4,6,8];

// console.log(merge(arr1,arr2)) // [1,2,3,4,4,5,6,8]

// arr1 // [1,3,4,5];
// arr2 // [2,4,6,8];

// let arr3 = [-2,-1,0,4,5,6];
// let arr4 = [-3,-2,-1,2,3,5,7,8];

// console.log(merge(arr3,arr4)); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

// let arr5 = [3,4,5]
// let arr6 = [1,2]

// console.log(merge(arr5,arr6)); // [1,2,3,4,5]

module.exports = { merge, mergeSort};