# 1159. Market Analysis II
# https://leetcode.com/problems/market-analysis-ii/description/

WITH Users (user_id, join_date, favorite_brand) AS (
  VALUES
    (1, '2019-01-01', 'Lenovo'),
    (2, '2019-02-09', 'Samsung'),
    (3, '2019-01-19', 'LG'),
    (4, '2019-05-21', 'HP')
),
Orders (order_id, order_date, item_id, buyer_id, seller_id) AS (
  VALUES
    (1, '2019-08-01', 4, 1, 2),
    (2, '2019-08-02', 2, 1, 3),
    (3, '2019-08-03', 3, 2, 3),
    (4, '2019-08-04', 1, 4, 2),
    (5, '2019-08-04', 1, 3, 4),
    (6, '2019-08-05', 2, 2, 4)
),
Items (item_id, item_brand) AS (
  VALUES
    (1, 'Samsung'),
    (2, 'Lenovo'),
    (3, 'LG'),
    (4, 'HP')
),
FavoriteItems AS (
  SELECT U.user_id, I.item_id AS favorite_item_id
  FROM Users U
  INNER JOIN Items I
  ON U.favorite_brand = I.item_brand
),
RankedOrders AS (
  SELECT O.seller_id
  ,F.favorite_item_id
  ,ROW_NUMBER() OVER (PARTITION BY O.seller_id ORDER BY O.order_date) AS row_id
  FROM Orders O
  LEFT JOIN FavoriteItems F
  ON O.seller_id = F.user_id
  AND O.item_id = F.favorite_item_id
)
SELECT U.user_id AS seller_id
,CASE WHEN R.favorite_item_id IS NOT NULL THEN 'yes' ELSE 'no' END AS '2nd_item_fav_brand'
FROM Users U
LEFT JOIN RankedOrders R
ON U.user_id = R.seller_id
AND R.row_id = 2
ORDER BY U.user_id;
