# 602. Friend Requests II: Who Has the Most Friends
# https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/description/

WITH RequestAccepted (requester_id, accepter_id, accept_date) AS (
  VALUES
    (1, 2, '2016/06/03'),
    (1, 3, '2016/06/08'),
    (2, 3, '2016/06/08'),
    (3, 4, '2016/06/09')
),
Requested AS (
  SELECT requester_id AS user_id
  ,COUNT(requester_id) AS friend_count
  FROM RequestAccepted
  GROUP BY requester_id
),
Accepted AS (
  SELECT accepter_id AS user_id
  ,COUNT(accepter_id) AS friend_count
  FROM RequestAccepted
  GROUP BY accepter_id
),
AllFriends AS (
  SELECT R.user_id AS id
  ,COALESCE(R.friend_count, 0) + COALESCE(A.friend_count, 0) AS num
  FROM Requested R
  LEFT JOIN Accepted A
  ON R.user_id = A.user_id
  UNION
  SELECT A.user_id AS id
  ,COALESCE(R.friend_count, 0) + COALESCE(A.friend_count, 0) AS num
  FROM Requested R
  RIGHT JOIN Accepted A
  ON R.user_id = A.user_id
)
SELECT id, num
FROM AllFriends
ORDER BY num DESC, id
LIMIT 1;
