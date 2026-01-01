# 1127. User Purchase Platform
# https://leetcode.com/problems/user-purchase-platform/description/

WITH Spending (user_id, spend_date, platform, amount) AS (
  VALUES
    (1, '2019-07-01', 'mobile', 100),
    (1, '2019-07-01', 'desktop', 100),
    (2, '2019-07-01', 'mobile', 100),
    (2, '2019-07-02', 'mobile', 100),
    (3, '2019-07-01', 'desktop', 100),
    (3, '2019-07-02', 'desktop', 100)
),
Platforms (platform, platform_id) AS (
  VALUES
    ('desktop', 1),
    ('mobile', 2),
    ('both', 3)
),
SpendDate (spend_date) AS (
  SELECT DISTINCT spend_date
  FROM Spending
),
Combo AS (
  SELECT spend_date, platform, platform_id
  FROM Platforms
  CROSS JOIN SpendDate
),
PlatformSpending AS (
  SELECT user_id
  ,spend_date
  ,platform
  ,SUM(CASE WHEN platform = 'mobile' THEN amount ELSE 0 END) AS mobile_amount
  ,SUM(CASE WHEN platform = 'desktop' THEN amount ELSE 0 END) AS desktop
  FROM Spending
  GROUP BY user_id, spend_date
),
AllSpending AS (
  SELECT user_id, spend_date
  ,CASE
    WHEN mobile_amount = 0 THEN 'desktop'
    WHEN desktop = 0 THEN 'mobile'
    ELSE 'both'
  END AS platform
  ,mobile_amount + desktop AS total_amount
  FROM PlatformSpending
)
SELECT C.spend_date
,C.platform
,COALESCE(SUM(S.total_amount), 0) AS total_amount
,COUNT(DISTINCT S.user_id) AS total_users
FROM Combo C
LEFT JOIN AllSpending S
ON C.spend_date = S.spend_date
AND C.platform = S.platform
GROUP BY C.spend_date, C.platform
ORDER BY C.spend_date, C.platform_id;
