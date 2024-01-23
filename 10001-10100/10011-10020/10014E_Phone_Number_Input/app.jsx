// 10014. Phone Number Input
// https://leetcode.com/problems/phone-number-input/description/
// T.C.: O(1)
// S.C.: O(1)
import React from 'react';

/**
 * @return {JSX.Element}
 */
export const PhoneNumberInput = () => {
  const { formattedPhoneNumber, onChange } = usePhoneNumber();
  return (
    <input type="tel" placeholder="mobile number" autocomplete="off" value={formattedPhoneNumber} onChange={onChange} />
  );
};

function usePhoneNumber() {
  const [formattedPhoneNumber, setFormattedPhoneNumber] = React.useState('');

  function extractPhoneNumber(value) {
    return value.replace(/[^\d]/g, '').slice(0, 10);
  }

  function formatPhoneNumber(number) {
    if (number.length === 0) return '';
    if (number.length < 4) return `(${number}`;
    if (number.length < 7) return `(${number.slice(0, 3)}) ${number.slice(3)}`;
    return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6)}`;
  }

  return {
    formattedPhoneNumber,
    onChange: (event) => {
      const number = extractPhoneNumber(event.target.value);
      const value = formatPhoneNumber(number);
      setFormattedPhoneNumber(value);
    },
  };
}
