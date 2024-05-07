const { bubbleSort, merge, mergeSort, insertionSort, selectionSort, pivot, quickSort } = require("./sorting")

describe('bubbleSort', function () {
	it('should exist', function () {
		expect(typeof bubbleSort).toBe(
		'function',
		"did you remember to define the 'bubbleSort' function?");
	});

	it('should sort numbers in ascending order', function () {
		expect(bubbleSort([4, 20, 12, 10, 7, 9])).toEqual(
		[4, 7, 9, 10, 12, 20],
		"bubbleSort([4, 20, 12, 10, 7, 9]) should equal [4, 7, 8, 10, 12, 20]"
		);

		expect(bubbleSort([0, -10, 7, 4])).toEqual(
		[-10, 0, 4, 7],
		"bubbleSort([0, -10, 7, 4]) should equal [-10, 0, 4, 7]"
		);

		expect(bubbleSort([1, 2, 3])).toEqual(
		[1, 2, 3],
		"bubbleSort([1, 2, 3]) should equal [1, 2, 3]"
		);

		expect(bubbleSort([])).toEqual(
		[],
		"bubbleSort([]) should be []"
		);

		const nums = [
		4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546,
		75, 67, 4342, 32
		];

		expect(bubbleSort(nums)).toEqual([
			2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453,
			546, 4342],
		"bubbleSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32]) should equal [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]"
		);
	});
});

describe('merge', function () {
	it('should exist', function () {
		expect(typeof merge).toBe('function', "did you remember to define the 'merge' function?");
	});

	it('should be a pure function - in other words, it should not mutate the input arrays', function () {
		const arr1 = [1, 3, 4, 5]
		const arr2 = [2, 4, 6, 8];
		merge(arr1, arr2);
		expect(arr1).toEqual([1, 3, 4, 5], "The first input array should be unaffected by the merge")
		expect(arr2).toEqual([2, 4, 6, 8], "The second input array should be unaffected by the merge")
	});

	it('should merge sorted arrays ', function () {
		expect(merge([1, 3, 4, 5], [2, 4, 6, 8])).toEqual(
		[1, 2, 3, 4, 4, 5, 6, 8],
		"merge([1,3,4,5],[2,4,6,8]) should equal [1,2,3,4,4,5,6,8]"
		);

		expect(merge([-2, -1, 0, 4, 5, 6], [-3, -2, -1, 2, 3, 5, 7, 8])).toEqual(
		[-3, -2, -2, -1, -1, 0, 2, 3, 4, 5, 5, 6, 7, 8],
		"merge([-2,-1,0,4,5,6],[-3,-2,-1,2,3,5,7,8]) should equal [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]"
		);

		expect(merge([3, 4, 5], [1, 2])).toEqual(
		[1, 2, 3, 4, 5],
		"merge([3, 4, 5], [1, 2]) should equal [1, 2, 3, 4, 5]"
		)
	});
});

describe('mergeSort', function () {
	it('should exist', function () {
		expect(typeof mergeSort).toBe('function', "did you remember to define the 'mergeSort' function?");
	});

	it('should sort numbers in ascending order', function () {
		expect(mergeSort([4, 20, 12, 10, 7, 9])).toEqual(
		[4, 7, 9, 10, 12, 20],
		"mergeSort([4, 20, 12, 10, 7, 9]) should equal [4, 7, 8, 10, 12, 20]"
		);
		expect(mergeSort([0, -10, 7, 4])).toEqual(
		[-10, 0, 4, 7],
		"mergeSort([0, -10, 7, 4]) should equal [-10, 0, 4, 7]"
		);
		expect(mergeSort([1, 2, 3])).toEqual(
		[1, 2, 3],
		"mergeSort([1, 2, 3]) should equal [1, 2, 3]"
		);
		expect(mergeSort([])).toEqual(
		[],
		"mergeSort([]) should be []"
		);
		const nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
		expect(mergeSort(nums)).toEqual(
		[2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342],
		"mergeSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32]) should equal [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]"
		);
	});
});

describe('insertionSort', function () {
	it('should exist', function () {
		expect(typeof insertionSort).toBe('function', "did you remember to define the 'insertionSort' function?");
	});

	it('should sort numbers in ascending order', function () {
		// expect(insertionSort([4, 20, 12, 10, 7, 9])).toEqual(
		// [4, 7, 9, 10, 12, 20],
		// "insertionSort([4, 20, 12, 10, 7, 9]) should equal [4, 7, 8, 10, 12, 20]"
		// );
		expect(insertionSort([0, -10, 7, 4])).toEqual(
		[-10, 0, 4, 7],
		"insertionSort([0, -10, 7, 4]) should equal [-10, 0, 4, 7]"
		);
		expect(insertionSort([1, 2, 3])).toEqual(
		[1, 2, 3],
		"insertionSort([1, 2, 3]) should equal [1, 2, 3]"
		);
		expect(insertionSort([])).toEqual(
		[],
		"insertionSort([]) should be []"
		);
		const nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
		expect(insertionSort(nums)).toEqual(
		[2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342],
		"insertionSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32]) should equal [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]"
		);
	});
});

describe("selectionSort", function () {
	it("should exist", function () {
		expect(typeof selectionSort).toBe(
		"function",
		"did you remember to define the 'selectionSort' function?"
		);
	});

	it("should sort numbers in ascending order", function () {
		expect(selectionSort([4, 20, 12, 10, 7, 9])).toEqual(
		[4, 7, 9, 10, 12, 20],
		"selectionSort([4, 20, 12, 10, 7, 9]) should equal [4, 7, 8, 10, 12, 20]"
		);
		expect(selectionSort([0, -10, 7, 4])).toEqual(
		[-10, 0, 4, 7],
		"selectionSort([0, -10, 7, 4]) should equal [-10, 0, 4, 7]"
		);
		expect(selectionSort([1, 2, 3])).toEqual(
		[1, 2, 3],
		"selectionSort([1, 2, 3]) should equal [1, 2, 3]"
		);
		expect(selectionSort([])).toEqual([], "selectionSort([]) should be []");
		const nums = [4,3,5,3,43,232,4,34,232,32,4,35,34,23,2,453,546,75,67,4342,32];

		expect(selectionSort(nums)).toEqual(
		[2, 3,3,4,4,4,5,23,32,32,34,34,35,43,67,75,232,232,453,546,4342],
		"selectionSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32]) should equal [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]"
		);
	});
});

describe('pivot', function () {
	it('should exist', function () {
		expect(typeof pivot).toBe('function', "did you remember to define the 'pivot' function?");
	});

	it('should return the pivot index (index 0 is sorted array, index 1 is pivot index)', function () {
		const arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
		const arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
		expect(pivot(arr1)[1]).toBe(3, "pivot(arr1) should be 3");
		expect(pivot(arr2)[1]).toBe(4, "pivot(arr2) should be 4");
	});
});

describe('quicksort', function () {
  it('should exist', function () {
    expect(typeof quickSort).toBe('function', "did you remember to define the 'quickSort' function?");
  });

  it('should sort numbers in ascending order', function () {
		expect(quickSort([4, 20, 12, 10, 7, 9])).toEqual(
		[4, 7, 9, 10, 12, 20],
		"quickSort([4, 20, 12, 10, 7, 9]) should equal [4, 7, 8, 10, 12, 20]"
		);
		expect(quickSort([0, -10, 7, 4])).toEqual(
		[-10, 0, 4, 7],
		"quickSort([0, -10, 7, 4]) should equal [-10, 0, 4, 7]"
		);
		expect(quickSort([1, 2, 3])).toEqual(
		[1, 2, 3],
		"quickSort([1, 2, 3]) should equal [1, 2, 3]"
		);
		expect(quickSort([])).toEqual(
		[],
		"quickSort([]) should be []"
		);
		const nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
		expect(quickSort(nums)).toEqual(
		[2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342],
		"quickSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32]) should equal [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]"
		);
	});
});