// 10028. Sortable HTML Table
// https://leetcode.com/problems/sortable-html-table/description/
// T.C.: O(n log n)
// S.C.: O(n)
import React from 'react';

/**
 * @param {Object} props
 * @param {Array} props.data
 * @return {JSX.Element}
 */
export const SortableTable = ({ data }) => {
  const [sortField, setSortField] = React.useState('');
  const [sortAsc, setSortAsc] = React.useState(true);

  const fields = React.useMemo(() => {
    return Object.keys(data[0]);
  }, [data]);

  const filteredData = React.useMemo(() => {
    return [...data].filter((row) => fields.some((field) => row[field]));
  }, [data]);

  const sortedData = React.useMemo(() => {
    return [...filteredData].sort((a, b) => {
      if (a[sortField] < b[sortField]) return sortAsc ? -1 : 1;
      if (a[sortField] > b[sortField]) return sortAsc ? 1 : -1;
      return 0;
    });
  }, [sortAsc, sortField]);

  const handleSorting = (event) => {
    const currentSortField = event.target.textContent;
    if (currentSortField !== sortField) {
      setSortAsc(true);
      setSortField(currentSortField);
    } else {
      setSortAsc((prev) => !prev);
    }
  };

  return (
    <table>
      <thead>
        <tr onClick={handleSorting}>{React.Children.toArray(fields.map((field) => <th>{field}</th>))}</tr>
      </thead>
      <tbody>
        {React.Children.toArray(
          sortedData.map((row) => <tr>{React.Children.toArray(fields.map((field) => <td>{row[field]}</td>))}</tr>)
        )}
      </tbody>
    </table>
  );
};
