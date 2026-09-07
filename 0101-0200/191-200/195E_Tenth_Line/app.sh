# 195. Tenth Line
# https://leetcode.com/problems/tenth-line/description/
# T.C.: O(n)
# S.C.: O(1)
# Read from the file file.txt and output the tenth line to stdout.
awk 'NR == 10 {print; exit}' file.txt
