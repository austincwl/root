def sum_pairs(nums, goal):
    """Return tuple of first pair of nums that sum to goal.

    For example:

        >>> sum_pairs([1, 2, 2, 10], 4)
        (2, 2)

    (4, 2) sum to 6, and come before (5, 1):

        >>> sum_pairs([4, 2, 10, 5, 1], 6) # (4, 2)
        (4, 2)

    (4, 3) sum to 7, and finish before (5, 2):

        >>> sum_pairs([5, 1, 4, 8, 3, 2], 7)
        (4, 3)

    No pairs sum to 100, so return empty tuple:

        >>> sum_pairs([11, 20, 4, 2, 1, 5], 100)
        ()
    """
    pairs = []
    for num1 in nums:
        for num2 in nums:
            if((num1+num2)==goal):
                pairs = pairs + [(num1,num2)]
    
    if(len(pairs)>0):
        indexOfFirst = len(nums) - 1
        for pair in pairs:
            #print(pair)
            maxInd = max(nums.index(pair[0]),nums.index(pair[1]))
            if(maxInd < indexOfFirst):
                indexOfFirst = pairs.index(pair)
        return pairs[indexOfFirst]
    
    return ()
print(sum_pairs([5, 1, 4, 8, 3, 2], 7))
print(sum_pairs([11, 20, 4, 2, 1, 5], 100))