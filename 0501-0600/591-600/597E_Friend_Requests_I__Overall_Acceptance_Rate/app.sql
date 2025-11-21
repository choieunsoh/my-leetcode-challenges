# 597. Friend Requests I: Overall Acceptance Rate
# https://leetcode.com/problems/friend-requests-i-overall-acceptance-rate/description/

WITH FriendRequest (sender_id, send_to_id, request_date) AS (
  SELECT 1, 2, '2016-06-01'
  UNION ALL
  SELECT 1, 3, '2016-06-01'
  UNION ALL
  SELECT 1, 4, '2016-06-01'
  UNION ALL
  SELECT 2, 3, '2016-06-02'
  UNION ALL
  SELECT 3, 4, '2016-06-09'
  UNION ALL
  SELECT 3, 4, '2016-06-10'
),
RequestAccepted (requester_id, accepter_id, accept_date) AS (
  SELECT 1, 2, '2016-06-03'
  UNION ALL
  SELECT 1, 3, '2016-06-08'
  UNION ALL
  SELECT 2, 3, '2016-06-08'
  UNION ALL
  SELECT 3, 4, '2016-06-09'
  UNION ALL
  SELECT 3, 4, '2016-06-10'
),
Requests AS (
  SELECT DISTINCT sender_id, send_to_id
  FROM FriendRequest
),
Accepted AS (
  SELECT DISTINCT requester_id, accepter_id
  FROM RequestAccepted
)
SELECT IFNULL(
  ROUND(1.0 *
    (SELECT COUNT(*) FROM Accepted) /
    (SELECT COUNT(*) FROM Requests)
  , 2)
, 0) AS accept_rate
