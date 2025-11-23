# 534. Game Play Analysis III
# https://leetcode.com/problems/game-play-analysis-iii/description/

WITH Activity (player_id, device_id, event_date, games_played) AS (
  VALUES
    (1, 2, '2016-03-01', 5),
    (1, 2, '2016-05-02', 6),
    (1, 3, '2017-06-25', 1),
    (3, 1, '2016-03-02', 0),
    (3, 4, '2018-07-03', 5)
),
PlayerActivity AS (
  SELECT player_id
  ,event_date
  ,SUM(games_played) AS games_played
  FROM Activity
  GROUP BY player_id, event_date
)
SELECT player_id
,event_date
,SUM(games_played) OVER (PARTITION BY player_id ORDER BY event_date) AS games_played_so_far
FROM PlayerActivity;
