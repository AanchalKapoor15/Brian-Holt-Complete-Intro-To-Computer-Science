/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
  let outerIndex = 0;
  let isSwappedAtLeastOnce = false;

  do {
    let isSwappedInThisIteration = resetFlag();

    for (
      let innerIndex = outerIndex + 1;
      innerIndex < nums.length;
      innerIndex++
    ) {
      if (nums[outerIndex] > nums[innerIndex]) {
        nums = swap(outerIndex, innerIndex, nums);

        outerIndex = incrementIndex(outerIndex);
        isSwappedInThisIteration = setFlag();
      } else {
        outerIndex = incrementIndex(outerIndex);
      }
    }
    outerIndex = resetIndex();
    isSwappedAtLeastOnce = isSwappedInThisIteration;
  } while (isSwappedAtLeastOnce);

  return nums;
}

function swap(firstIndex, secondIndex, array) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;

  return array;
}

function incrementIndex(index) {
  return index + 1;
}

function resetIndex() {
  return 0;
}

function setFlag() {
  return true;
}

function resetFlag() {
  return false;
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
