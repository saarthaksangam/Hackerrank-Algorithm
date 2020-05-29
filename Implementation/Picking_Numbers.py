import math
import os
import random
import re
import sys
from collections import Counter
#
# Complete the 'pickingNumbers' function below.

def pickingNumbers(a):
    # Write your code here
    dic = Counter(a)
    res = 0
    for i in dic.keys():
        res = max((dic[i]+dic[i+1]),res)
    print(res)
    
if __name__ == '__main__':
    n = int(input().strip())
    a = list(map(int, input().rstrip().split()))
    result = pickingNumbers(a)
