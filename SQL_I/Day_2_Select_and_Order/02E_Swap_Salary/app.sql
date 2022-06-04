-- https://leetcode.com/problems/swap-salary/
-- 627. Swap Salary

UPDATE Salary SET
sex = CASE WHEN sex = 'f' THEN 'm' ELSE 'f' END
