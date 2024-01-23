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

  const handleClick = (event) => {
    const element = event.target;
    if (element.classList.contains('item')) {
      const clickedItem = element.textContent;
      setSelected((prevSelected) => {
        const newSelected = prevSelected.includes(clickedItem)
          ? prevSelected.filter((item) => item !== clickedItem)
          : [...prevSelected, clickedItem];

        if (newSelected.length > 3) {
          const removedItem = newSelected.shift();
          const items = document.querySelectorAll('.item');
          items.forEach((item) => {
            if (item.textContent === removedItem) {
              item.classList.remove('selected');
            }
          });
        }

        return newSelected;
      });

      element.classList.toggle('selected');
    }
  };

  return (
    <div onClick={handleClick}>
      {elements.map((element) => (
        <div key={element} className="item">
          {element}
        </div>
      ))}
    </div>
  );
};
