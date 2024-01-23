// 10022. Radio Group
// https://leetcode.com/problems/radio-group/description/
// T.C.: O(n)
// S.C.: O(1)
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
export const RadioGroup = ({ name, options, onChange }) => {
  const [selected, setSelected] = React.useState('');

  const handleSelectedChange = (event) => {
    const { value } = event.target;
    setSelected(value);
    onChange(value);
  };

  return (
    <div onChange={handleSelectedChange}>
      {options.map(({ value, label }) => {
        return (
          <label key={value} for={value}>
            <input type="radio" name={name} value={value} id={value} checked={selected === value} />
            {label}
          </label>
        );
      })}
    </div>
  );
};
