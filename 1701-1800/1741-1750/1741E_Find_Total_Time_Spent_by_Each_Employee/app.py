# 1741. Find Total Time Spent by Each Employee
# https://leetcode.com/problems/find-total-time-spent-by-each-employee/
import pandas as pd


def total_time(employees: pd.DataFrame) -> pd.DataFrame:
    employees['total_time'] = employees['out_time'] - employees['in_time']
    employees = employees.groupby(['event_day', 'emp_id'], as_index=False).agg(sum)
    employees = employees.rename(columns={'event_day': 'day'})
    return employees.drop(columns=['out_time', 'in_time'])
