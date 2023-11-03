/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// time complexity: O(N^2)
var twoSum = function(nums, target) {
    // generate all the possible pairs
    for(let i=0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            // for every pair, find the sum of the pair
            let sum = nums[i] + nums[j];

            // check if the sum of the pair is equal to the target
            if(sum === target){
                // return the indices of the pair
                return [i, j];
            }
        }
    }
};

twoSum([2, 7, 11, 15], 9);

/*
    Time Complexity = ?

    1. Assume some random values for N

    N = 4

    N = 5

    N = 6

    2. Find the number of operations for each value of N

    N = 4,
        i = 0, j = 1, 2, 3
        i = 1, j = 2, 3
        i = 2, j = 3

        total executions = 3 + 2 + 1 = 6
    
    N = 5,
        i = 0, j = 1, 2, 3, 4
        i = 1, j = 2, 3, 4
        i = 2, j = 3, 4
        i = 3, j = 4

        total executions = 4 + 3 + 2 + 1 = 10
    
    N = 6,
        i = 0, j = 1, 2, 3, 4, 5
        i = 1, j = 2, 3, 4, 5
        i = 2, j = 3, 4, 5
        i = 3, j = 4, 5
        i = 4, j = 5

        total executions = 5 + 4 + 3 + 2 + 1 = 15

    3. Find the pattern

    N = 4, total executions = 6
    N = 5, total executions = 10
    N = 6, total executions = 15

    For a given N, total executions = Sum of first N-1 natural numbers
                                    = N-1 + N-2 + N-3 + ... + 1
                                    
    S(N) = (N * (N+1)/2 )
    S(N-1) = (N-1 * (N-1+1)/2)
           = (N-1 * N/2)
           = (N * (N-1)/2)
    
    4. Find the time complexity

    T(N) = (N * (N-1)/2)
         = (N^2 - N)/2
         = N^2/2 - N/2
         = 1/2 * (N^2 - N)
         = N^2 - N [ignoring the constant factor]
         = N^2 [considering only the highest order term]
         = O(N^2)   [Big O notation]
 
*/

/*
    nums = [2, 7, 11, 15]
    target = 9

    All the possible pairs:
        (2, 7)     i = 0 j = 1
        (2, 11)    i = 0 j = 2
        (2, 15)    i = 0 j = 3

        (7, 11)    i = 1 j = 2
        (7, 15)    i = 1 j = 3

        (11, 15)   i = 2 j = 3

        pattern:
            - j is always greater than i
            - i starts @ 0 and  j starts @ i+1
            - for every value of i, j starts @ i + 1 and ends at nums.length - 1
*/

/*
    To Optimize the algorithm:

    Two pointers approach:

    nums = [2, 7, 11, 15] target = 9

    a. Sort the array

    if you sort the array, then the index of the elements will change. So, we need to store the indices & values of the elements in a separate array.

    So, actual first step again is to store the indices & values of the elements in a separate array.

    a. Store the indices & values of the elements in a separate array.

    nums2d = [[0, 2], [1, 7], [2, 11], [3, 15]]

    the first value in the inner array is the index of the element in the original array

    b. Sort the array

    nums2d = [[0, 2], [1, 7], [2, 11], [3, 15]]

    c. Initialize two pointers, one at the beginning and one at the end

    left = 0
    right = nums2d.length - 1

    repeatedly do the following until left < right
        check if the sum of the elements at left & right is equal to the target
            if yes, return the indices of the elements at left & right
        else check if the sum of the elements at left & right is less than the target
            if yes, increment left
        else check if the sum of the elements at left & right is greater than the target
            if yes, decrement right
*/

var twoSum = function(nums, target) {
    let nums2d = [];
    nums.forEach((num, index) => nums2d.push([index, num]));

    nums2d.sort((a, b) => a[1] - b[1]);
    
    let left = 0;
    let right = nums2d.length - 1;

    while(left < right){
        if(nums2d[left][1] + nums2d[right][1] == target){
            return [nums2d[left][0], nums2d[right][0]];
        } else if(nums2d[left][1] + nums2d[right][1] < target) {
            left++;   
        } else {
            right--;
        }
    }
};

/*
    Time Complexity:

    let nums2d = [];
    => O(1)

    nums.forEach((num, index) => nums2d.push([index, num]));
    => O(N)

    nums2d.sort((a, b) => a[1] - b[1]);
    Depending on the sorting algorithm used, the time complexity will vary.

    this library definitely uses a sorting algorithm that has a time complexity of O(N)

    => O(N)

    let left = 0;
    let right = nums2d.length - 1;
    => O(1)

    while(left < right){
        if(nums2d[left][1] + nums2d[right][1] == target){
            return [nums2d[left][0], nums2d[right][0]];
        } else if(nums2d[left][1] + nums2d[right][1] < target) {
            left++;   
        } else {
            right--;
        }
    }

    => O(N-1) => O(N)

    Total Time Complexity = T(N) = O(1) + O(N) + O(N) + O(1) + O(N)
    => 1 + 2N + 1 + N
    => 3N + 2
    => 3N [ignoring the constant factor]
    => N [ignoring the constant factor]
    => O(N)
*/  