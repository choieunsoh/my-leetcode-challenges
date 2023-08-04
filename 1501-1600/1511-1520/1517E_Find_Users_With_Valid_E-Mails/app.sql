-- 1517. Find Users With Valid E-Mails
-- https://leetcode.com/problems/find-users-with-valid-e-mails/

/* Write your T-SQL query statement below */
SELECT user_id,name,mail
FROM Users
WHERE mail LIKE '[a-zA-Z]%@leetcode.com'
AND LEFT(mail, LEN(mail) - 13) NOT LIKE '%[^0-9a-zA-Z_.-]%'
