var twoSum = function(nums, target) {

    let res = {};

    for (let i=0; i<nums.length; i++) {
        let tmp = target - nums[i];
        if (nums[i] in res) {
            return [res[nums[i]] , i];
        }
        res[tmp] = i;
    }

    return null;
};