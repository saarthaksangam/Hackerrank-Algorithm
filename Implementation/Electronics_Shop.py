import os
import sys

def getMoneySpent(keyboards, drives, b):

    a = 0
    if (min(keyboards)+min(drives)>b):
        a = -1
    for i in keyboards:
        for j in drives:
            if(i+j <= b):
                a = max(a, i+j)    
    return a

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')
    bnm = input().split()
    b = int(bnm[0])
    n = int(bnm[1])
    m = int(bnm[2])
    keyboards = list(map(int, input().rstrip().split()))
    drives = list(map(int, input().rstrip().split()))
    moneySpent = getMoneySpent(keyboards, drives, b)
    fptr.write(str(moneySpent) + '\n')
    fptr.close()
