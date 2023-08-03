# 1148. Article Views I
# https://leetcode.com/problems/article-views-i/
import pandas as pd


def article_views(views: pd.DataFrame) -> pd.DataFrame:
    # Filter rows where author_id and viewer_id are the same (authors viewing their own articles)
    authors_viewed_own_articles = views[views['author_id'] == views['viewer_id']]

    # Get unique author_ids from the filtered data
    unique_authors = authors_viewed_own_articles['author_id'].unique()

    # Sort the unique author_ids in ascending order
    unique_authors = sorted(unique_authors)

    # Create a DataFrame with the sorted unique author_ids and rename the 'author_id' column to 'id'
    result_df = pd.DataFrame({'id': unique_authors})

    return result_df
