// 10030. Files Tree View
// https://leetcode.com/problems/files-tree-view/description/
// T.C.: O(n)
// S.C.: O(n)
import React, { useEffect, useState } from 'react';

/**
 * @typedef {Object} Item
 * @property {string} name
 * @property {Item[]} children
 */

/**
 * @param {Object} props
 * @param {Item[]} props.items
 * @return {JSX.Element}
 */

export const TreeView = ({ items }) => {
  const [expandedItems, setExpandedItems] = useState([]);

  const handleToggle = (itemId) => {
    setExpandedItems((prevExpandedItems) =>
      prevExpandedItems.includes(itemId)
        ? prevExpandedItems.filter((item) => item !== itemId)
        : [...prevExpandedItems, itemId]
    );
  };

  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target.closest('[data-item-id]');
      if (target) {
        const itemId = target.getAttribute('data-item-id');
        handleToggle(itemId);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleToggle]);

  const renderTreeItems = (items) => (
    <ul style={{ listStyleType: 'none', paddingLeft: '16px' }}>
      {React.Children.toArray(
        items.map((item) => (
          <li>
            <div
              style={{ display: 'flex', marginBottom: '4px' }}
              data-item-id={item.name}
              data-expanded={expandedItems.includes(item.name) ? 'true' : 'false'}
            >
              <span style={{ fontSize: '14px', padding: '2px', cursor: 'pointer' }}>
                {item.children.length > 0 && (expandedItems.includes(item.name) ? '-' : '+')}
              </span>
              <span style={{ fontSize: '14px', padding: '2px', cursor: 'pointer' }}>{item.name}</span>
            </div>
            {item.children.length > 0 && expandedItems.includes(item.name) && (
              <div style={{ display: 'block' }}>{renderTreeItems(item.children)}</div>
            )}
          </li>
        ))
      )}
    </ul>
  );

  return renderTreeItems(items);
};
