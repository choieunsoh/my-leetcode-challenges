-- https://leetcode.com/problems/fix-names-in-a-table/
-- 1667. Fix Names in a Table
SELECT user_id
,UPPER(SUBSTRING(name,1,1))+LOWER(SUBSTRING(name,2,LEN(name))) AS name
FROM Users
ORDER BY user_id