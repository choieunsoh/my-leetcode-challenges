# 1149. Article Views II
# https://leetcode.com/problems/article-views-ii/description/

WITH Views (article_id, author_id, viewer_id, view_date) AS (
  VALUES
    (1, 3, 5, '2019-08-01'),
    (3, 4, 5, '2019-08-01'),
    (1, 3, 6, '2019-08-02'),
    (2, 7, 7, '2019-08-01'),
    (2, 7, 6, '2019-08-02'),
    (4, 7, 1, '2019-07-22'),
    (3, 4, 4, '2019-07-21'),
    (3, 4, 4, '2019-07-21')
)
SELECT DISTINCT viewer_id AS id
FROM Views
GROUP BY viewer_id, view_date
HAVING COUNT(DISTINCT article_id) > 1
ORDER BY id;
