# 1179. Reformat Department Table
# https://leetcode.com/problems/reformat-department-table/description/

WITH Department (id, revenue, month) AS (
  VALUES
    (1, 8000, 'Jan'),
    (2, 9000, 'Jan'),
    (3, 10000, 'Feb'),
    (1, 7000, 'Feb'),
    (1, 6000, 'Mar')
)
SELECT id,
  Jan AS Jan_Revenue,
  Feb AS Feb_Revenue,
  Mar AS Mar_Revenue,
  Apr AS Apr_Revenue,
  May AS May_Revenue,
  Jun AS Jun_Revenue,
  Jul AS Jul_Revenue,
  Aug AS Aug_Revenue,
  Sep AS Sep_Revenue,
  Oct AS Oct_Revenue,
  Nov AS Nov_Revenue,
  Dec AS Dec_Revenue
FROM Department
PIVOT (
  SUM(revenue) FOR month IN (Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec)
) AS pvt;
