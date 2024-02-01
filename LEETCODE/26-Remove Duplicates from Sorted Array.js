/*
26. Remove Duplicates from Sorted Array
---- Easy

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
        //I solved this before but do not remember what I did or why it worked.
        //refactoring with comments for explanation and further reference.
        
    // Check if the array is empty, if so, there are no duplicates to remove.
    if (nums.length === 0) return 0;
    // Initialize a variable 'j' to keep track of the unique elements.
    let j = 0;
    // Loop through the array starting from the second element (index 1).
    for (let i = 1; i < nums.length; i++) {
    // Compare the current element with the previous unique element.
        if (nums[i] !== nums[j]) {
    // If the current element is different, increment 'j' to move to the next unique element.
    // Then, update the 'j-th' position in the array with the current unique element
            j++;
            nums[j] = nums[i];
        }
    // If the current element is equal to the previous unique element, it's a duplicate, so we skip it.
    }
    // 'j' now represents the index of the last unique element, so adding 1 gives us the count of unique elements.
    return j + 1;   
};