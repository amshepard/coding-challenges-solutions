/*
80. Remove Duplicates from Sorted Array II
--- Medium

Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // my intial thoughts/psuedocode on how to solve this:
    // cannot use destructive array methods because "..Do not allocate extra space for another array."
    // honestly i have no idea what this problem is asking for at this point.
    // I will come back to this one. I see that https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/ is a similar problem at an easier level. I will attempt to solve that one first and see if that gets my wheels spinning.
    // Updated thoughts/psuedocode after referring to previous problem:
    // --- need .length() to keep track of elements
    // --- need a for loop to iterate and compare elements
    // --- move unique elements to current incremented position
        // Check if the input array is empty or very short (length <= 2)
    if (nums.length <= 2) {
        // If it's empty or short, we don't need to remove duplicates, just return the length as is.
        return nums.length;
    }
    
    // Initialize a pointer 'writeIndex' to 2, since the first two elements are always kept.
    let writeIndex = 2;
    
    // Start looping through the array, beginning from the third element (index 2).
    for (let i = 2; i < nums.length; i++) {
        // Check if the current number is different from the two elements before it.
        if (nums[i] !== nums[writeIndex - 1] || nums[i] !== nums[writeIndex - 2]) {
            // If it's different, we can keep it, so replace it at 'writeIndex'.
            nums[writeIndex] = nums[i];
            writeIndex++; // Move the writeIndex forward.
        }
    }
    
    // 'writeIndex' now represents the length of the modified array.
    return writeIndex;
};