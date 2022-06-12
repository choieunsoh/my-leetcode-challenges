-- https://leetcode.com/study-plan/sql/?progress=6ks9agh
-- 182. Duplicate Emails
SELECT email AS Email
FROM Person
GROUP BY email
HAVING COUNT(email) > 1
