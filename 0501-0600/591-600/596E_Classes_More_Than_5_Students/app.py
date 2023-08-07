# 596. Classes More Than 5 Students
# https://leetcode.com/problems/classes-more-than-5-students
import pandas as pd


def find_classes(courses: pd.DataFrame) -> pd.DataFrame:
    stats = courses.groupby(['class']).count().reset_index()
    return stats[stats['student'] >= 5][['class']]
