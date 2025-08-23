// In: frontend/src/components/SuccessPage.js

import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Login Was Successful!</h1>
      <p>You have been redirected to this page correctly.</p>
      <p>This proves that your login API call and your redirect command are both working.</p>
      <hr />
      <p>The next step is to fix the protected route for the main dashboard.</p>
      <Link to="/">Try to Go to the Protected Home Page</Link>
    </div>
  );
};

export default SuccessPage;