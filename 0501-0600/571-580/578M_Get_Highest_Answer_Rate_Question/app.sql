# 578. Get Highest Answer Rate Question
# https://leetcode.com/problems/get-highest-answer-rate-question/description/
WITH SurveyLog (id, action, question_id, answer_id, q_num, timestamp) AS (
  VALUES
    (5, 'show', 285, NULL, 1, 123),
    (5, 'show', 285, NULL, 1, 123),
    (5, 'answer', 285, 124124, 1, 124),
    (5, 'show', 369, NULL, 2, 125),
    (5, 'skip', 369, NULL, 2, 126)
),
AnswerRates AS (
  SELECT question_id
  ,1.0 * SUM(CASE WHEN action = 'answer' THEN 1 ELSE 0 END) /
  SUM(CASE WHEN action = 'show' THEN 1 ELSE 0 END) AS answer_rate
  FROM SurveyLog
  GROUP BY question_id
)
SELECT question_id
FROM AnswerRates
ORDER BY answer_rate DESC, question_id
LIMIT 1;
