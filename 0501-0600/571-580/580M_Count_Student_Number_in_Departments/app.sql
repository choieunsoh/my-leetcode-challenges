# 580. Count Student Number in Departments
# https://leetcode.com/problems/count-student-number-in-departments/description/
WITH Student (student_id, student_name, gender, dept_id) AS (
  VALUES
    (1, 'Jack', 'M', 1),
    (2, 'Jane', 'F', 1),
    (3, 'Mark', 'M', 2)
),
Department (dept_id, dept_name) AS (
  VALUES
    (1, 'Engineering'),
    (2, 'Science'),
    (3, 'Law')
)
SELECT D.dept_name
,IFNULL(COUNT(S.student_id),0) AS student_number
FROM Department D
LEFT JOIN Student S
ON D.dept_id = S.dept_id
GROUP BY D.dept_name
ORDER BY student_number DESC, D.dept_name;
