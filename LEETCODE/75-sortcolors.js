/*
75. Sort Colors
Medium
Topics
Companies
Hint
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
 
Constraints:

n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.
 
Follow up: Could you come up with a one-pass algorithm using only constant extra space?
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // n objects = iterate over entire array of unknown size
    // cannot use sort, so maybe a for loop or for..of
    // need to be sorted in order... sort method?
    // ^^ my original thoughts on how to solve the problem

    let left = 0;       // Pointer for red (0)
    let right = nums.length - 1;  // Pointer for blue (2)
    
    for (let i = 0; i <= right; i++) {
        if (nums[i] === 0) {
            // If we encounter a red (0), we swap it with the element at the left pointer.
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left++; // Move the red pointer to the right
        } else if (nums[i] === 2) {
            // If we encounter a blue (2), we swap it with the element at the right pointer.
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right--; // Move the blue pointer to the left
            i--;     // Decrement i to recheck the current element after the swap
        }
        // White (1) elements are naturally placed in between the red and blue regions.
    }
};