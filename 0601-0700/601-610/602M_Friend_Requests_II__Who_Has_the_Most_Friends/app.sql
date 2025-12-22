# 602. Friend Requests II: Who Has the Most Friends
# https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/description/

WITH RequestAccepted (requester_id, accepter_id, accept_date) AS (
  VALUES
    (1, 2, '2016/06/03'),
    (1, 3, '2016/06/08'),
    (2, 3, '2016/06/08'),
    (3, 4, '2016/06/09')
),
AllFriends AS (
  SELECT requester_id AS id
  FROM RequestAccepted
  UNION ALL
  SELECT accepter_id AS id
  FROM RequestAccepted
)
SELECT id
,COUNT(id) AS num
FROM AllFriends
GROUP BY id
ORDER BY num DESC, id
LIMIT 1;
