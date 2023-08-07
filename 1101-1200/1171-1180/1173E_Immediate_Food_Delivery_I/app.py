# 1173. Immediate Food Delivery I
# https://leetcode.com/problems/immediate-food-delivery-i
import pandas as pd


def food_delivery(delivery: pd.DataFrame) -> pd.DataFrame:
    df = delivery[delivery.order_date == delivery.customer_pref_delivery_date]
    percentage = round(df.shape[0]*100/delivery.shape[0], 2)
    result_df = pd.DataFrame({'immediate_percentage': [percentage]})
    return result_df
