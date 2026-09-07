# 193. Valid Phone Numbers
# https://leetcode.com/problems/valid-phone-numbers/description/
# T.C.: O(n)
# S.C.: O(1)
# Read from the file file.txt and output all valid phone numbers to stdout.
grep -E '^((\([0-9]{3}\) [0-9]{3}-[0-9]{4})|([0-9]{3}-[0-9]{3}-[0-9]{4}))$' file.txt
