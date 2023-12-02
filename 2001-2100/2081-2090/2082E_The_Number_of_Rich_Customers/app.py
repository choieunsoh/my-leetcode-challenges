# 2082. The Number of Rich Customers
# https://leetcode.com/problems/the-number-of-rich-customers
import pandas as pd


def count_rich_customers(store: pd.DataFrame) -> pd.DataFrame:
    df = store[store.amount > 500]
    rich_count = df['customer_id'].nunique()
    result_df = pd.DataFrame({'rich_count': [rich_count]})
    return result_df
