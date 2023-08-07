# 511. Game Play Analysis I
# https://leetcode.com/problems/game-play-analysis-i/
import pandas as pd


def game_play_analysis_i(activity: pd.DataFrame) -> pd.DataFrame:
    return activity.groupby('player_id').agg(first_login=('event_date', 'min')).reset_index()
