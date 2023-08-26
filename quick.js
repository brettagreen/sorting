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
            gt.push(num)
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

let array = [5,3,89,0,-1,4,77,100,-100,22,-22,34,11]; 
let array1 = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(quickSort(array1));

module.exports = { pivot, quickSort };