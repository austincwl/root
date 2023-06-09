def find_greater_numbers(nums):
    """Return # of times a number is followed by a greater number.

    For example, for [1, 2, 3], the answer is 3:
    - the 1 is followed by the 2 *and* the 3
    - the 2 is followed by the 3

    Examples:

        >>> find_greater_numbers([1, 2, 3])
        3

        >>> find_greater_numbers([6, 1, 2, 7])
        4

        >>> find_greater_numbers([5, 4, 3, 2, 1])
        0

        >>> find_greater_numbers([])
        0
    """
    if(len(nums) < 1):
        return 0

    ret = 0
    for i in range(0,len(nums)-1):
        for j in range(i,len(nums)):
            #print("nums["+str(i)+"]="+str(nums[i])+",nums["+str(j)+"]="+str(nums[j]))
            if(nums[j]>nums[i]):
                ret = ret + 1
    return ret
        
