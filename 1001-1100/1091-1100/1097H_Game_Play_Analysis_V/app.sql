# 1097. Game Play Analysis V
# https://leetcode.com/problems/game-play-analysis-v/description/

WITH Activity (player_id, device_id, event_date, games_played) AS (
  VALUES
    (1, 2, '2016-03-01', 5),
    (1, 2, '2016-03-02', 6),
    (2, 3, '2017-06-25', 1),
    (3, 1, '2016-03-01', 0),
    (3, 4, '2016-07-03', 5)
),
InstallActivity AS (
  SELECT event_date AS install_date
  ,player_id
  ,LEAD(event_date) OVER (PARTITION BY player_id ORDER BY event_date) AS next_login_date
  ,FIRST_VALUE(event_date) OVER (PARTITION BY player_id ORDER BY event_date) AS first_login_date
  FROM Activity
),
RetentionActivity AS (
  SELECT *
  --,DATEDIFF(next_login_date, install_date) AS days_to_next_login
  ,CAST(next_login_date AS date) - CAST(install_date AS date) AS days_to_next_login
  FROM InstallActivity
  WHERE first_login_date = install_date
)
SELECT install_date AS install_dt
,COUNT(DISTINCT player_id) AS installs
,ROUND(1.0 * SUM(CASE WHEN days_to_next_login = 1 THEN 1 ELSE 0 END) / COUNT(DISTINCT player_id), 2) AS Day1_retention
FROM RetentionActivity
GROUP BY install_date
ORDER BY install_date;
