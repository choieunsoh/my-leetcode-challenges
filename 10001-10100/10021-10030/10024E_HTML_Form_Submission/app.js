// 10024. HTML Form Submission
// https://leetcode.com/problems/html-form-submission/description/

import React from 'react';

/**
 * @return {JSX.Element}
 */
export const FormHandler = () => {
  const [showForm, setShowForm] = React.useState(true);
  const [message, setMessage] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch('/contact-us', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (data.ok) {
      setShowForm(false);
      setMessage('Thank you');
    } else {
      setMessage('Something went wrong');
    }
  };

  return (
    <div>
      {showForm && (
        <form onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Name" />
          <textarea name="message" placeholder="Feedback message"></textarea>
          <button type="submit">Send</button>
        </form>
      )}

      {message && <p>{message}</p>}
    </div>
  );
};
