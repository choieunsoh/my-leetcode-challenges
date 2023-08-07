# 586. Customer Placing the Largest Number of Orders
# https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/
import pandas as pd


def largest_orders(orders: pd.DataFrame) -> pd.DataFrame:
    return orders['customer_number'].mode().to_frame()
