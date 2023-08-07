# 1484. Group Sold Products By The Date
# https://leetcode.com/problems/group-sold-products-by-the-date/
import pandas as pd


def categorize_products(activities: pd.DataFrame) -> pd.DataFrame:
    df = activities.groupby('sell_date')['product'].agg([
        ('num_sold', 'nunique'),
        ('products', lambda x: ','.join(sorted(x.unique())))]).reset_index()

    return df
