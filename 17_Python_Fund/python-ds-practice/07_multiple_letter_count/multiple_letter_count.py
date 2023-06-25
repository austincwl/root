def multiple_letter_count(phrase):
    """Return dict of {ltr: frequency} from phrase.

        >>> multiple_letter_count('yay')
        {'y': 2, 'a': 1}

        >>> multiple_letter_count('Yay')
        {'Y': 1, 'a': 1, 'y': 1}
    """
    ret = {}
    for letter in phrase:
        if (letter in ret.keys()):
            ret[letter] = ret[letter] + 1
        else:
            ret[letter] = 1
        
    return ret
    
print(multiple_letter_count("abbcccdddd"))