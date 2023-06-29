def includes(collection, sought, start=None):
    """Is sought in collection, starting at index start?

    Return True/False if sought is in the given collection:
    - lists/strings/sets/tuples: returns True/False if sought present
    - dictionaries: return True/False if *value* of sought in dictionary

    If string/list/tuple and `start` is provided, starts searching only at that
    index. This `start` is ignored for sets/dictionaries, since they aren't
    ordered.

        >>> includes([1, 2, 3], 1)
        True

        >>> includes([1, 2, 3], 1, 2)
        False

        >>> includes("hello", "o")
        True

        >>> includes(('Elmo', 5, 'red'), 'red', 1)
        True

        >>> includes({1, 2, 3}, 1)
        True

        >>> includes({1, 2, 3}, 1, 3)  # "start" ignored for sets!
        True

        >>> includes({"apple": "red", "berry": "blue"}, "blue")
        True
    """
    i = 0
    ordered=("string","list","tuple")
    #if((type(collection) in ordered) and start):
    #    i = start;
    #    for item in collection[start:]:
    #        if(item == sought):
    #            return True
    #    return False
    if((type(collection) is str or type(collection) is list or type(collection) is tuple) and start):
        if(sought in collection[start:]):
            return True
        return False
    
    #for item in collection:
    #    if(item==sought):
    #        return True
    if(sought in collection or sought in collection.values()):
        return True
    return False
    
    
print(includes({"apple": "red", "berry": "blue"}, "blue"))
print(includes([1, 2, 3], 1, 2))