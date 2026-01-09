# 1194. Tournament Winners
# https://leetcode.com/problems/tournament-winners/description/

WITH Players (player_id, group_id) AS (
  VALUES
    (15, 1),
    (25, 1),
    (30, 1),
    (45, 1),
    (10, 2),
    (35, 2),
    (50, 2),
    (20, 3),
    (40, 3)
),
Matches (match_id, first_player, second_player, first_score, second_score) AS (
  VALUES
    (1, 15, 45, 3, 0),
    (2, 30, 25, 1, 2),
    (3, 30, 15, 2, 0),
    (4, 40, 20, 5, 2),
    (5, 35, 50, 1, 1)
),
PlayersScore AS (
  SELECT first_player AS player_id
  ,first_score AS score
  FROM Matches
  UNION ALL
  SELECT second_player AS player_id
  ,second_score AS score
  FROM Matches
),
RankedPlayers AS (
  SELECT P.group_id
  ,P.player_id
  ,SUM(S.score) AS total_score
  ,ROW_NUMBER() OVER (PARTITION BY P.group_id ORDER BY SUM(S.score) DESC, P.player_id) AS rank_id
  FROM PlayersScore S
  INNER JOIN Players P
  ON S.player_id = P.player_id
  GROUP BY P.group_id, P.player_id
)
SELECT group_id, player_id
FROM RankedPlayers
WHERE rank_id = 1;
