# 1112. Highest Grade For Each Student
# https://leetcode.com/problems/highest-grade-for-each-student/description/

WITH Enrollments (student_id, course_id, grade) AS (
  VALUES
    (2, 2, 95),
    (2, 3, 95),
    (1, 1, 90),
    (1, 2, 99),
    (3, 1, 80),
    (3, 2, 75),
    (3, 3, 82)
),
RankEnrollments AS (
  SELECT student_id, course_id, grade
  ,ROW_NUMBER() OVER (PARTITION BY student_id ORDER BY grade DESC, course_id) AS row_id
  FROM Enrollments
)
SELECT student_id, course_id, grade
FROM RankEnrollments
WHERE row_id = 1
ORDER BY student_id;
