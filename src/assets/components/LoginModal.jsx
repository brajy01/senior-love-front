import React, { useState, useRef, useEffect } from 'react';
import { Eye, EyeOff } from 'react-feather';

const LoginModal = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false); // État pour gérer l'affichage du message d'erreur
  const modalRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simuler une erreur pour l'exemple
    if (email === 'test@example.com' && password === 'password') {
      onLogin({ email, password });
    } else {
      setError(true); // Afficher le message d'erreur si les identifiants sont incorrects
    }
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
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
        {error && (
          <div className="bg-[#FAD0C8] text-[#A30A2E] px-4 py-2 rounded-md mb-4 text-center">
            <p className="font-bold">Erreur de connexion</p>
            <p>Identifiants incorrects. </p>
            <p>Merci de ré-essayer.</p>
          </div>
        )}

        {/* Login form */}
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
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg border-darkGrey pr-10"
            />
            {/* Icon to toggle password visibility */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-2/3 right-3 transform -translate-y-1/2 flex items-center text-darkGrey hover:text-[#E879F9] focus:outline-none"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-[#E879F9] text-white py-2 rounded-lg shadow-md hover:bg-[#D16ED8]"
          >
            Identifiez-vous
          </button>
        </form>

        {/* Additional links */}
        <div className="mt-4 text-center">
          <a href="#" className="font-bold text-sm text-[#C026D3] hover:underline">
            Mot de passe oublié ?
          </a>
          <p className="text-sm mt-2">
            Vous n'avez pas de compte ?{' '}
            <a href="/register" className="font-bold text-[#C026D3] hover:underline">
              S'inscrire
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

export default LoginModal;
