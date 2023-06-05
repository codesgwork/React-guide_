import React, { useState } from 'react';

export const SignUpPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSignUpClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <button onClick={handleSignUpClick}>Sign Up</button>

      {showPopup && (
        <div className='popup'>
          <div className='popup-content'>
            <h2>Sign Up Popup</h2>
            <p>Popup content goes here...</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

// export default SignUpPage;
