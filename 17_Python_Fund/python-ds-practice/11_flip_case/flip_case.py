def flip_case(phrase, to_swap):
    """Flip [to_swap] case each time it appears in phrase.

        >>> flip_case('Aaaahhh', 'a')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'A')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'h')
        'AaaaHHH'

    """
    ret = ""
    for letter in phrase:
        if letter.upper() == letter:
            if(letter.lower() == to_swap.lower()):
                ret = ret + letter.lower()
            else:
                ret = ret + letter
        else:
            if(letter.lower() == to_swap.lower()):
                ret = ret + letter.upper()
            else:
                ret = ret + letter
        
    return ret