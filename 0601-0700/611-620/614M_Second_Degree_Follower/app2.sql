# 614. Second Degree Follower
# https://leetcode.com/problems/second-degree-follower/description/

WITH Follow (followee, follower) AS (
  VALUES
    ('Alice', 'Bob'),
    ('Alice', 'Donald'),
    ('Bob', 'Cena'),
    ('Bob', 'Donald'),
    ('Donald', 'Edward')
),
CountFollowers AS (
  SELECT followee AS follower
  ,COUNT(follower) AS num
  FROM Follow
  GROUP BY followee
)
SELECT DISTINCT A.follower
,B.num
FROM Follow A
INNER JOIN CountFollowers B
ON A.follower = B.follower
ORDER BY A.follower;
