import math
import os
import random
import re
import sys
# Complete the countingValleys function below.
def countingValleys(n, s):
    level = 0
    count = 0
    for i in s:
        if i=='D':
            level+=-1
        else:
            if level == -1:
                count+=1
            level+=1
    return count
    
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')
    n = int(input())
    s = input()
    result = countingValleys(n, s)
    fptr.write(str(result) + '\n')
    fptr.close()
