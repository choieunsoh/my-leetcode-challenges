# 1212. Team Scores in Football Tournament
# https://leetcode.com/problems/team-scores-in-football-tournament/description/

WITH Teams (team_id, team_name) AS (
  VALUES
    (10, 'Leetcode FC'),
    (20, 'NewYork FC'),
    (30, 'Atlanta FC'),
    (40, 'Chicago FC'),
    (50, 'Toronto FC')
),
Matches (match_id, host_team, guest_team, host_goals, guest_goals) AS (
  VALUES
    (1, 10, 20, 3, 0),
    (2, 30, 10, 2, 2),
    (3, 10, 50, 5, 1),
    (4, 20, 30, 1, 0),
    (5, 50, 30, 1, 0)
),
TeamPoints AS (
  SELECT host_team AS team_id
  ,CASE WHEN host_goals > guest_goals THEN 3
    WHEN host_goals = guest_goals THEN 1
    ELSE 0
  END AS num_points
  FROM Matches
  UNION ALL
  SELECT guest_team AS team_id
  ,CASE WHEN guest_goals > host_goals THEN 3
    WHEN guest_goals = host_goals THEN 1
    ELSE 0
  END AS num_points
  FROM Matches
)
SELECT T.team_id
,T.team_name
,COALESCE(SUM(P.num_points), 0) AS num_points
FROM Teams T
LEFT JOIN TeamPoints P
ON T.team_id = P.team_id
GROUP BY T.team_id
ORDER BY num_points DESC, T.team_id;
