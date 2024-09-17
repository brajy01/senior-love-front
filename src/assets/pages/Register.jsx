import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterModal from '../components/RegisterModal';

export default function Register() {
  const navigate = useNavigate();
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(true); // Always open when accessing the page

  // Function to handle user registration
  const handleRegister = async (credentials) => {
    const { email, password, confirmPassword, isAdult, isSensitiveData, isNewsletter } = credentials;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('https://ton-backend.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, isAdult, isSensitiveData, isNewsletter }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registration success:', data);
        setIsRegisterModalOpen(false); // Close the modal after successful registration
        navigate('/my-account'); // Redirect to the user account page
      } else {
        console.error('Failed to register');
      }
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  // Function to handle modal close
  const handleClose = () => {
    setIsRegisterModalOpen(false);
    navigate('/'); // Redirect to the homepage if the modal is closed
  };

  return (
    <>
      {/* Display the registration modal if it is open */}
      {isRegisterModalOpen && (
        <RegisterModal onClose={handleClose} onRegister={handleRegister} />
      )}
    </>
  );
}
