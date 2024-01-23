// 10016. Auto Focus Switch
// https://leetcode.com/problems/auto-focus-switch/description/
// T.C.: O(n)
// S.C.: O(n)
import React from 'react';

/**
 * @typedef {Object} Element
 * @property {string} [id]
 * @property {string} type
 * @property {string} maxLength
 */

/**
 * @param {Object} props
 * @param {Element[]} props.elements
 * @return {JSX.Element}
 */
export const AutoFocusSwitch = ({ elements }) => {
  const [inputs] = React.useState([]); // State to store input elements

  const forwardFocus = (input) => {
    const index = inputs.indexOf(input);
    if (index === -1 || index >= inputs.length - 1) return;

    inputs[index + 1].focus();
    return inputs[index + 1];
  };

  const backwardFocus = (input) => {
    const index = inputs.indexOf(input);
    if (index <= 0) return;

    inputs[index - 1].focus();
    return inputs[index - 1];
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    const maxLength = Number(event.target.getAttribute('maxLength'));

    if (!value.match(/^\d*$/)) {
      event.preventDefault();
      return;
    }

    if (value.length === maxLength) {
      forwardFocus(event.target);
      return;
    }

    if (value.length > maxLength) {
      event.target.value = value.slice(0, maxLength);
      event.preventDefault();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Backspace' && event.target.value === '') {
      const input = backwardFocus(event.target);
      if (input) input.value = input.value.slice(0, -1);

      event.preventDefault();
    }

    if (!event.key.match(/^\d+$/) && event.key !== 'Backspace') {
      event.preventDefault();
    }
  };

  return (
    <div>
      {elements.map((el, index) => (
        <input
          id={el.id}
          key={index}
          type={el.type}
          maxLength={el.maxLength}
          onChange={el.type === 'number' ? handleInputChange : null}
          onKeyDown={el.type === 'number' ? handleKeyDown : null}
          ref={(input) => {
            if (el.type === 'number') inputs.push(input);
          }}
          autoFocus={index === 0}
        />
      ))}
    </div>
  );
};
