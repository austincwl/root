def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """
    str1 = list(str(num1))
    str2 = list(str(num2))
    
    for num in str1:
        if(str1.count(num) != str2.count(num)):
            return False

    for num in str2:
        if(str1.count(num) != str2.count(num)):
            return False

    return True
