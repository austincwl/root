"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """
    def __init__(self,start):
        self.serialNum = start
        self.start = start

    def generate(self):
        self.serialNum = self.serialNum + 1
        return self.serialNum - 1

    def reset(self):
        self.serialNum = self.start
