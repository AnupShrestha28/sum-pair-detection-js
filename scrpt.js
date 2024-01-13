const findPair = (nums, target) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log(`Pair found (${nums[i]}, ${nums[j]})`);
        return;
      }
    }
  }

  console.log("Pair not found.");
};

// Example 1
const nums1 = [8, 7, 2, 5, 3, 1];
const target1 = 10;
findPair(nums1, target1);

// Example 2
const nums2 = [5, 2, 6, 8, 1, 9];
const target2 = 12;
findPair(nums2, target2);
