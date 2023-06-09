def vowel_count(phrase):
    """Return frequency map of vowels, case-insensitive.

        >>> vowel_count('rithm school')
        {'i': 1, 'o': 2}
        
        >>> vowel_count('HOW ARE YOU? i am great!') 
        {'o': 2, 'a': 3, 'e': 2, 'u': 1, 'i': 1}
    """
    vowels = ("a","e","i","o","u")
    ret = {}
    for letter in phrase:
        if(letter.lower() in vowels):
            if(ret.get(letter.lower()) == None):
                ret[letter.lower()] = 0
            ret[letter.lower()] = ret[letter.lower()] + 1
    
    return ret

print(vowel_count('rithm school'))
print(vowel_count('HOW ARE YOU? i am great!') )