
def print_upper_words(words,must_start_with):
    for word in words:
        if word[0] in must_start_with:
            print(word.upper())
    return

# this should print "HELLO", "HEY", "YO", and "YES"

print_upper_words(["hello", "hey", "goodbye", "yo", "yes"],must_start_with={"h", "y"})