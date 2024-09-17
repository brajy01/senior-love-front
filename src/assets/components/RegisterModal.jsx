import React, { useState, useRef, useEffect } from 'react';
import { Eye, EyeOff } from 'react-feather';

const RegisterModal = ({ onClose, onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAdult, setIsAdult] = useState(false);
  const [isSensitiveData, setIsSensitiveData] = useState(false);
  const [isNewsletter, setIsNewsletter] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const modalRef = useRef(); // Create a reference for the modal

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Vos mots de passe ne sont pas identiques');
    } else {
      setErrorMessage('');
      onRegister({ email, password, confirmPassword, isAdult, isSensitiveData, isNewsletter });
    }
  };

  // Close the modal when clicking outside
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    // Attach event listener to detect clicks outside the modal
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Cleanup the event listener when the component is unmounted
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div ref={modalRef} className="bg-white rounded-lg shadow-lg w-96 p-6 relative lg:bg-lightWhite">
        {/* Banner with the site name */}
        <div className="text-center mb-4">
          <h2 className="text-2xl font-normal text-darkGrey">
            Bienvenue sur
            <span className="font-bold text-[#E879F9]"> Senior</span>
            <span className="font-bold">Love !</span>
          </h2>
        </div>

        {/* Error message */}
        {errorMessage && (
          <div className="bg-[#FAD0C8] text-[#A30A2E] p-3 rounded-lg mb-4">
            {errorMessage}
          </div>
        )}

        {/* Registration form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-darkGrey">Adresse e-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg border-darkGrey"
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-1 text-darkGrey">Mot de passe</label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg border-darkGrey pr-10"
            />
            {/* Icon to toggle password visibility */}
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute top-2/3 right-3 transform -translate-y-1/2 flex items-center text-darkGrey hover:text-[#E879F9] focus:outline-none"
            >
              {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-1 text-darkGrey">Confirmation du mot de passe</label>
            <input
              type={confirmPasswordVisible ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg border-darkGrey pr-10"
            />
            <button
              type="button"
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              className="absolute top-2/3 right-3 transform -translate-y-1/2 flex items-center text-darkGrey hover:text-[#E879F9] focus:outline-none"
            >
              {confirmPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Checkboxes */}
          <div className="mb-4 inline-flex items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full p-3"
              htmlFor="isAdult"
              data-ripple-dark="true"
            >
              <input
                id="isAdult"
                type="checkbox"
                checked={isAdult}
                onChange={(e) => setIsAdult(e.target.checked)}
                className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#FAE8FF] before:opacity-0 before:transition-opacity checked:border-[#FAE8FF] checked:bg-[#FAE8FF] checked:before:bg-[#555555] hover:before:opacity-10"
                />
              <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5 text-[#555555]" 
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label className="cursor-pointer text-darkGrey text-sm">
            Je certifie être majeur(e) et accepter les conditions générales d’utilisation.
            <span className="font-bold text-red-500">*</span>
            </label>
          </div>

          <div className="mb-4 inline-flex items-center">
            <label
                className="relative flex cursor-pointer items-center rounded-full p-3"
                htmlFor="isSensitiveData"
                data-ripple-dark="true"
            >
                <input
                id="isSensitiveData"
                type="checkbox"
                checked={isSensitiveData}
                onChange={(e) => setIsSensitiveData(e.target.checked)}
                className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#FAE8FF] before:opacity-0 before:transition-opacity checked:border-[#FAE8FF] checked:bg-[#FAE8FF] checked:before:bg-[#555555] hover:before:opacity-10"
                />
                <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5 text-[#555555]" 
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                >
                    <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                    ></path>
                </svg>
                </span>
            </label>
            <label className="cursor-pointer text-darkGrey text-sm ml-2" htmlFor="isSensitiveData">
                J’accepte que mes données sensibles soient traitées.
            </label>
            </div>
          <div className="mb-4 inline-flex items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full p-3"
              htmlFor="isNewsletter"
              data-ripple-dark="true"
            >
              <input
                id="isNewsletter"
                type="checkbox"
                checked={isNewsletter}
                onChange={(e) => setIsNewsletter(e.target.checked)}
                className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#FAE8FF] before:opacity-0 before:transition-opacity checked:border-[#FAE8FF] checked:bg-[#FAE8FF] checked:before:bg-[#555555] hover:before:opacity-10"
                />
              <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5 text-[#555555]" 
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label className="cursor-pointer text-darkGrey text-sm ml-2" htmlFor="isNewsletter">
              Je souhaite recevoir des invitations à des évènements SeniorLove et des offres (je peux me désinscrire à tout moment).
            </label>
          </div>

          {/* Register button */}
          <button
            type="submit"
            className="w-full bg-[#E879F9] text-white py-2 rounded-lg shadow-md hover:bg-[#D16ED8]"
          >
            S'inscrire
          </button>
        </form>

        {/* Link to login if already registered */}
        <div className="mt-4 text-center">
          <p className="text-sm">
            Vous avez déjà un compte ?{' '}
            <a href="/login" className="font-bold text-[#C026D3] hover:underline">
              Se connecter
            </a>
          </p>
        </div>

        {/* Close button for the modal */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-darkGrey hover:text-darkGrey text-lg"
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default RegisterModal;
