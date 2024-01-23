// 10021. Checkbox Group
// https://leetcode.com/problems/checkbox-group/description/
// T.C.: O(1)
// S.C.: O(n)
import React from 'react';

/**
 * @typedef {Object} Option
 * @property {string} value
 * @property {string} label
 */

/**
 * @param {Object} props
 * @param {string} props.name
 * @param {Option[]} props.options
 * @param {Function} props.onChange
 * @return {JSX.Element}
 */
export const CheckboxGroup = ({ name, options = [], onChange }) => {
  const [selected, setSelected] = React.useState(new Set());

  const handleSelectedChange = (event) => {
    const { value, checked } = event.target;
    const newSelected = new Set(selected);
    if (checked) {
      newSelected.add(value);
    } else {
      newSelected.delete(value);
    }
    setSelected(() => newSelected);
    onChange([...newSelected]);
  };

  return (
    <div onChange={handleSelectedChange}>
      {options.map(({ value, label }) => {
        return (
          <label key={value} for={value}>
            <input type="checkbox" id={value} name={name} value={value} checked={selected.has(value)} />
            {label}
          </label>
        );
      })}
    </div>
  );
};
