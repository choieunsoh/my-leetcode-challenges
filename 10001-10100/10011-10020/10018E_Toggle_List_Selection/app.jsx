// 10018. Toggle List Selection
// https://leetcode.com/problems/toggle-list-selection/description/
// T.C.: O(n)
// S.C.: O(n)
import React from 'react';

/**
 * @param {Object} props
 * @param {String[]} props.elements
 * @return {JSX.Element}
 */
export const HandleItemSelection = ({ elements }) => {
  const [selected, setSelected] = React.useState([]);

  function handleClick(elementIndex) {
    return () => {
      if (selected.includes(elementIndex)) {
        setSelected([...selected.filter((index) => index !== elementIndex)]);
      } else {
        const newSelected = selected;
        newSelected.push(elementIndex);
        if (newSelected.length > 3) {
          newSelected.shift();
        }
        setSelected([...newSelected]);
      }
    };
  }

  return (
    <div>
      {elements.map((element, index) => {
        const className = selected.includes(index) ? 'item selected' : 'item';
        return (
          <div key={element} className={className} onClick={handleClick(index)}>
            {element}
          </div>
        );
      })}
    </div>
  );
};
