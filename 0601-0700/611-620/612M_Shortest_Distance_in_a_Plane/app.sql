# 612. Shortest Distance in a Plane
# https://leetcode.com/problems/shortest-distance-in-a-plane/description/
WITH Point2D (x, y) AS (
  VALUES
    (-1, -1),
    (0, 0),
    (-1, -2)
)
SELECT ROUND(MIN(SQRT(POWER(p1.x - p2.x, 2) + POWER(p1.y - p2.y, 2))), 2) AS shortest
FROM Point2D p1, Point2D p2
WHERE (p1.x, p1.y) <> (p2.x, p2.y);
