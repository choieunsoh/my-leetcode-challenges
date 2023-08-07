# 570. Managers with at Least 5 Direct Reports
# https://leetcode.com/problems/managers-with-at-least-5-direct-reports
import pandas as pd


def find_managers(employee: pd.DataFrame) -> pd.DataFrame:
    managers = employee.groupby(
        'managerId', as_index=False
    ).agg(
        reporting=('id', 'count'),
    ).query(
        '5 <= reporting'
    )['managerId']

    return employee[
        employee['id'].isin(managers)
    ][['name']]
