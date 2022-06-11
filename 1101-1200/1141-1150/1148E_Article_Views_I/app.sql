-- https://leetcode.com/problems/article-views-i/
-- 1148. Article Views I
SELECT DISTINCT author_id AS id
FROM Views 
WHERE author_id = viewer_id
ORDER BY 1