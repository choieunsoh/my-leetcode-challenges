-- 1280. Students and Examinations
-- https://leetcode.com/problems/students-and-examinations
/* Write your T-SQL query statement below */
;WITH temp AS (
  SELECT A.student_id
  ,A.subject_name
  ,COUNT(*) AS attended_exams
  FROM Examinations A
  GROUP BY A.student_id,A.subject_name
),temp1 AS (
  SELECT student_id,student_name,subject_name
  FROM Students CROSS JOIN Subjects
)
SELECT A.student_id
,A.student_name
,A.subject_name
,ISNULL(B.attended_exams,0) AS attended_exams
FROM temp1 A
LEFT JOIN temp B
ON A.student_id = B.student_id
AND A.subject_name = B.subject_name
ORDER BY A.student_id,A.subject_name