var twoSum = function(nums, target) {
    const hmap = {}
    let number = 0;
    for(let i = 0; i < nums.length; i++){
        var deltaId = hmap[target - nums[i]]
        hmap[nums[i]] = i;
        if(deltaId !== undefined){
            return [deltaId,i];
        }
    }
    return []
};