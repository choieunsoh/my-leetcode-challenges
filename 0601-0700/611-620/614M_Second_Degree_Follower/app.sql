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
SELECT followee AS follower
,COUNT(follower) AS num
FROM Follow
WHERE followee IN (
  SELECT follower
  FROM Follow
)
GROUP BY followee
ORDER BY follower;
