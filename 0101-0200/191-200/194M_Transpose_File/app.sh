# 194. Transpose File
# https://leetcode.com/problems/transpose-file/description/
# T.C.: O()
# S.C.: O()
# Read from the file file.txt and print its transposed content to stdout.
awk '
{
    for (i = 1; i <= NF; i++) {
        a[i] = a[i] ? a[i] " " $i : $i
    }
}
END {
    for (i = 1; i <= length(a); i++) {
        print a[i]
    }
}' file.txt
