import React, { useState } from 'react';
import './reset.css'

const Reset = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement password reset logic here
    // You can send a request to the server to handle the password reset process

    // Display success message
    setSuccessMessage(`An email has been sent to ${email} with further instructions.`);
    // Clear the email field
    setEmail('');
  };


  return (
    <div className='container'>
      <h2 >Reset Password</h2>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Your E-Mail Address"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="btn inside" type="submit">Reset Password</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default Reset;