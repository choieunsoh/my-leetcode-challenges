# 1225. Report Contiguous Dates
# https://leetcode.com/problems/report-contiguous-dates/description/

WITH Failed (fail_date) AS (
  VALUES
    ('2018-12-28'),
    ('2018-12-29'),
    ('2019-01-04'),
    ('2019-01-05'),
    ('2019-01-07'),
    ('2019-01-09')
),
Succeeded (success_date) AS (
  VALUES
    ('2018-12-30'),
    ('2018-12-31'),
    ('2019-01-01'),
    ('2019-01-02'),
    ('2019-01-03'),
    ('2019-01-06'),
    ('2019-01-08'),
    ('2019-01-10')
),
Events AS (
  SELECT fail_date AS event_date, 'failed' AS event_type
  ,CAST(REPLACE(fail_date, '-', '') AS INT) AS days
  /*,TO_DAYS(fail_date) AS days*/
  FROM Failed
  UNION ALL
  SELECT success_date AS event_date, 'succeeded' AS event_type
  ,CAST(REPLACE(success_date, '-', '') AS INT) AS days
  /*,TO_DAYS(success_date) AS days*/
  FROM Succeeded
),
GroupedEvents AS (
  SELECT event_date
  ,event_type
  ,days - ROW_NUMBER() OVER (PARTITION BY event_type ORDER BY days) AS group_id
  FROM Events
  WHERE event_date BETWEEN '2019-01-01' AND '2019-12-31'
)
SELECT event_type AS period_state
,MIN(event_date) AS start_date
,MAX(event_date) AS end_date
FROM GroupedEvents
GROUP BY group_id, event_type
ORDER BY start_date;
