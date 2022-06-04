-- https://leetcode.com/problems/delete-duplicate-emails/
-- 196. Delete Duplicate Emails
WITH temp AS (
  SELECT ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) AS row
  FROM Person
)
DELETE FROM temp
WHERE row > 1