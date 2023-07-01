def sum_range(nums, start=0, end=None):
    """Return sum of numbers from start...end.

    - start: where to start (if not provided, start at list start)
    - end: where to stop (include this index) (if not provided, go through end)

        >>> nums = [1, 2, 3, 4]

        >>> sum_range(nums)
        10

        >>> sum_range(nums, 1)
        9

        >>> sum_range(nums, end=2)
        6

        >>> sum_range(nums, 1, 3)
        9

    If end is after end of list, just go to end of list:

        >>> sum_range(nums, 1, 99)
        9
    """
    #print("Current Parameters")
    #print("nums:"+str(nums))
    #print("start:"+str(start))
    #print("end:"+str(end))
    sum = 0
    if(end and end<len(nums)):
        #print("end and end<len(nums)")
        for i in range(start,end+1):
            sum = sum + nums[i]
            #print("sum="+str(sum)+",num="+str(nums[i]))
        return sum
    elif(start and start<len(nums)):
        for i in range(start, len(nums)):
            sum = sum + nums[i]
            #print("sum="+str(sum)+",num="+str(nums[i]))
        return sum
    else:
        for num in nums:
            sum = sum + num
            #print("sum="+str(sum)+",num="+str(num))
        return sum
    
nums = [1, 2, 3, 4]
print(sum_range(nums))
print("expecting 10")
print(sum_range(nums, 1))
print("expecting 9")
print(sum_range(nums, end=2))
print("expecting 6")
print(sum_range(nums, 1, 3))
print("expecting 9")
print(sum_range(nums, 1, 99))
