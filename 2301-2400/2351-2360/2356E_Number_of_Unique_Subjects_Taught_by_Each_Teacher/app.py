# 2356. Number of Unique Subjects Taught by Each Teacher
# https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher/
import pandas as pd


def count_unique_subjects(teacher: pd.DataFrame) -> pd.DataFrame:
    return teacher.groupby(
        'teacher_id'
    ).nunique().reset_index().rename(
        columns={'subject_id': 'cnt'}
    )[['teacher_id', 'cnt']]
