-- 596. Classes More Than 5 Students
-- https://leetcode.com/problems/classes-more-than-5-students
/* Write your T-SQL query statement below */
SELECT class
FROM Courses
GROUP BY class
HAVING COUNT(student) >= 5