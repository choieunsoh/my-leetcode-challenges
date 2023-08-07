# 1907. Count Salary Categories
# https://leetcode.com/problems/count-salary-categories
import pandas as pd


def count_salary_categories(accounts: pd.DataFrame) -> pd.DataFrame:
    counts = pd.cut(accounts.income, [-float('inf'), 20000, 50001, float('inf')], right=False,
                    labels=['Low Salary', 'Average Salary', 'High Salary']).value_counts()
    return pd.DataFrame({'category': counts.index, 'accounts_count': counts.values})
