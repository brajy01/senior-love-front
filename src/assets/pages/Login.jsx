import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginModal from '../components/LoginModal';

export default function Login() {
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true); // Always open when accessing the page

  // Function to handle user login
  const handleLogin = async (credentials) => {
    try {
      const response = await fetch('https://ton-backend.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login success:', data);
        setIsLoginModalOpen(false); // Close the modal after successful login
        navigate('/my-account'); // Redirect to the user account page
      } else {
        // Handle login errors (e.g., incorrect credentials)
        console.error('Failed to login');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  // Function to handle modal close
  const handleClose = () => {
    setIsLoginModalOpen(false);
    navigate('/'); // Redirect to the homepage if the modal is closed
  };

  return (
    <>
      {/* Display the login modal if it is open */}
      {isLoginModalOpen && (
        <LoginModal onClose={handleClose} onLogin={handleLogin} />
      )}
    </>
  );
}
