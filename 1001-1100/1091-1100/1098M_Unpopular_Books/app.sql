# 1098. Unpopular Books
# https://leetcode.com/problems/unpopular-books/description/

WITH Books (book_id, name, available_from) AS (
  VALUES
    (1, '"Kalila And Demna"', '2010-01-01'),
    (2, '"28 Letters"', '2012-05-12'),
    (3, '"The Hobbit"', '2019-06-10'),
    (4, '"13 Reasons Why"', '2019-06-01'),
    (5, '"The Hunger Games"', '2008-09-21')
),
Orders (order_id, book_id, quantity, dispatch_date) AS (
  VALUES
    (1, 1, 2, '2018-07-26'),
    (2, 1, 1, '2018-11-05'),
    (3, 3, 8, '2019-06-11'),
    (4, 4, 6, '2019-06-05'),
    (5, 4, 5, '2019-06-20'),
    (6, 5, 9, '2009-02-02'),
    (7, 5, 8, '2010-04-13')
),
AvailableBooks AS (
  SELECT book_id, name
  FROM Books
  WHERE available_from <= '2019-05-23'
)
SELECT B.book_id
,B.name
FROM AvailableBooks B
LEFT JOIN Orders O
ON B.book_id = O.book_id
AND O.dispatch_date >= '2018-06-23'
GROUP BY B.book_id, B.name
HAVING COALESCE(SUM(O.quantity), 0) < 10
ORDER BY B.book_id;
