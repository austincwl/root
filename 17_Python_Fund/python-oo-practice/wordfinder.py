"""Word Finder: finds random words from a dictionary."""
import random

class WordFinder:
    
    def __init__(self,path):
        self.path = path
        self.words = open(path,"r").readlines()
        print(str(len(self.words))+" words read")

    def random(self):
        i = random.randint(0,len(self.words))
        return self.words[i]


wf = WordFinder("./words.txt")
print(wf.random())
print(wf.random())
print(wf.random())

