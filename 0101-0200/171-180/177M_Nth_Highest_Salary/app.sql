-- 177. Nth Highest Salary
-- https://leetcode.com/problems/nth-highest-salary

CREATE FUNCTION getNthHighestSalary(@N INT) RETURNS INT AS
BEGIN
  /* Write your T-SQL query statement below. */
  DECLARE @Result INT
  ;WITH temp1 AS (
    SELECT DISTINCT salary
    FROM Employee
  ),temp AS (
    SELECT salary
    ,ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_id
    FROM temp1
  )
  SELECT @Result = A.salary
  FROM temp A
  WHERE A.row_id = @N

  RETURN @Result
END