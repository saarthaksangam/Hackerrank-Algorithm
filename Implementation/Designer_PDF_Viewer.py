import math
import os
import random
import re
import sys

# Complete the designerPdfViewer function below.
def designerPdfViewer(h, word):
    height = []
    for i in word:
        index = ord(i)-96
        height.append(h[index-1])
    print(len(word)*max(height))

if __name__ == '__main__':
    h = list(map(int, input().rstrip().split()))
    word = input()
    result = designerPdfViewer(h, word)
