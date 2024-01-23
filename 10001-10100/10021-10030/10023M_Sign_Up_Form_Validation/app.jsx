// 10023. Sign Up Form Validation
// https://leetcode.com/problems/sign-up-form-validation/description/
// T.C.: O(1)
// S.C.: O(1)
import React from 'react';

/**
 * @return {JSX.Element}
 */
export const SignUpFormValidation = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [usernameError, setUsernameError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [successText, setSuccessText] = React.useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setUsernameError('');
    setPasswordError('');
    setSuccessText('');

    let isValid = true;
    if (username.trim() === '') {
      setUsernameError('Username is required');
      isValid = false;
    } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
      setUsernameError('Username must contain only alphanumeric characters');
      isValid = false;
    }

    if (password.trim() === '') {
      setPasswordError('Password is required');
      isValid = false;
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
      setPasswordError('Password must contain at least 8 characters, with uppercase, lowercase, and digit(s)');
      isValid = false;
    }

    if (isValid) {
      setSuccessText('Sign Up Successful');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={handleUsernameChange}
        />
        {usernameError && <div className="error">{usernameError}</div>}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && <div className="error">{passwordError}</div>}

        {successText && <div className="success">{successText}</div>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
