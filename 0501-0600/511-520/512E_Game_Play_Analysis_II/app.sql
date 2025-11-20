# 512. Game Play Analysis II
# https://leetcode.com/problems/game-play-analysis-ii/description/

WITH Activity AS (
  SELECT 1 AS player_id, 2 AS device_id, CAST('2016-03-01' AS DATE) AS event_date, 5 AS games_played
  UNION ALL
  SELECT 1, 2, CAST('2016-05-02' AS DATE), 6
  UNION ALL
  SELECT 2, 3, CAST('2017-06-25' AS DATE), 1
  UNION ALL
  SELECT 3, 1, CAST('2016-03-02' AS DATE), 0
  UNION ALL
  SELECT 3, 4, CAST('2018-07-03' AS DATE), 5
),FirstLogin AS (
  SELECT player_id
  ,device_id
  ,ROW_NUMBER() OVER (PARTITION BY player_id ORDER BY event_date) AS rn
  FROM Activity
)
SELECT player_id
,device_id
FROM FirstLogin
WHERE rn = 1;
