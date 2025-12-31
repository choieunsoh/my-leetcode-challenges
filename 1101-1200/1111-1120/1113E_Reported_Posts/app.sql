# 1113. Reported Posts
# https://leetcode.com/problems/reported-posts/description/

WITH Actions (user_id, post_id, action_date, action, extra) AS (
  VALUES
    (1, 1, '2019-07-01', 'view', NULL),
    (1, 1, '2019-07-01', 'like', NULL),
    (1, 1, '2019-07-01', 'share', NULL),
    (2, 4, '2019-07-04', 'view', NULL),
    (2, 4, '2019-07-04', 'report', 'spam'),
    (3, 4, '2019-07-04', 'view', NULL),
    (3, 4, '2019-07-04', 'report', 'spam'),
    (4, 3, '2019-07-02', 'view', NULL),
    (4, 3, '2019-07-02', 'report', 'spam'),
    (5, 2, '2019-07-04', 'view', NULL),
    (5, 2, '2019-07-04', 'report', 'racism'),
    (5, 5, '2019-07-04', 'view', NULL),
    (5, 5, '2019-07-04', 'report', 'racism')
)
SELECT extra AS report_reason
,COUNT(DISTINCT post_id) AS report_count
FROM Actions
WHERE action = 'report'
AND action_date = '2019-07-04'
GROUP BY extra;
