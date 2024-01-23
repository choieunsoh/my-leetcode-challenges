// 10025. Tabs
// https://leetcode.com/problems/tabs/description/
// T.C.: O(n)
// S.C.: O(1)

import React from 'react';

/**
 * @typedef {Object} TabObject
 * @property {string} label
 * @property {string} content
 */

/**
 * @param {Object} props
 * @param {TabObject[]} props.tabsList
 * @return {JSX.Element}
 */
export const Tabs = ({ tabsList }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleClick = (event) => {
    const target = event.target;
    if (target.dataset.index !== undefined) {
      setActiveTab(Number(target.dataset.index));
    }
  };

  return (
    <div onClick={handleClick}>
      <div>
        {tabsList.map((tab, index) => (
          <div
            key={index}
            data-index={index}
            style={{
              padding: '10px',
              marginRight: '10px',
              cursor: 'pointer',
              backgroundColor: index === activeTab ? 'lightgray' : 'transparent',
              border: '1px solid gray',
              fontWeight: index === activeTab ? 'bold' : 'normal',
            }}
          >
            {tab.label}
          </div>
        ))}
      </div>

      <div>{tabsList[activeTab].content}</div>
    </div>
  );
};
