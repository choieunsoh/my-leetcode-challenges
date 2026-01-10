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
)
SELECT T.team_id
,T.team_name
,SUM(
  CASE WHEN T.team_id = M.host_team AND M.host_goals > M.guest_goals THEN 3
    WHEN T.team_id = M.host_team AND M.host_goals = M.guest_goals THEN 1
    WHEN T.team_id = M.guest_team AND M.guest_goals > M.host_goals THEN 3
    WHEN T.team_id = M.guest_team AND M.guest_goals = M.host_goals THEN 1
    ELSE 0
  END
) AS num_points
FROM Teams T
LEFT JOIN Matches M
ON T.team_id = M.host_team
OR T.team_id = M.guest_team
GROUP BY T.team_id
ORDER BY num_points DESC, T.team_id;
