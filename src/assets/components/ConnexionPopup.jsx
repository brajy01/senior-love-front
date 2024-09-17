import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { Eye, EyeOff } from 'react-feather';
import useAuth from '../../contexts/AuthContext.jsx';


export default function ConnexionPopup() {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  //const [user, setUser] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  //const [errorMessage, setErrorMessage] = useState("");

  const popUpRef = useRef(null); 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:4000/auth/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Vous n'avez pas saisi les bons identifiants !");
      }
      else {
        const {token, userId, userEmail} = data;
        login({ token, userId, userEmail });
        console.log("Utilisateur trouvé, connecté et son token:", { userId, userEmail, token });

        // Ferme la modale
        if (popUpRef.current) popUpRef.current.close();
      }
    } catch (error) {
      console.log('Erreur de connexion:', error);
      setError('Erreur survenue lors de la connexion');
    }
  };

  const handleOpenRegister = () => {
    const registerModal = document.getElementById("btn_register");
    const connexionModal = document.getElementById("btn_connexion");
  };

   /* const handleLogin = () => {
    // Exemple de vérification des identifiants
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //Remplacez cette partie par votre logique de vérification
  };*/

  return (
    <dialog id="btn_connexion" className="modal" ref={popUpRef}>
      <div className="modal-box relative p-6">

        {/* Bouton de fermeture en haut à droite */}
        <form method="dialog" className="absolute top-2 right-2">
          <button className="btn btn-circle btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">          
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </form>

        {/* Contenu de la modale */}
        <h2 className="text-xl mb-6 mt-12">
          Les membres de{" "}
          <span className="text-fuchsia-400 font-bold">Senior</span>Love
          n&apos;attendent plus que vous!
        </h2>

         {/* Affichage du message d'erreur */}
         {/* {errorMessage && (
          <div role="alert" className="alert alert-error mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{errorMessage}</span>
          </div>
         )}
         */}

        <form className="form" onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"  
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input 
                type="text" 
                className="grow" 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label className="relative input input-bordered flex items-center gap-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="grow"
                  placeholder="Mot de passe"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 flex items-center text-darkGrey hover:text-[#E879F9] focus:outline-none"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                </span>
            </label>
            <div className="font-normal mt-4">
              <a href="#" className="font-bold text-fuchsia-400">
                Mot de passe oublié ?
              </a>
            </div>
            <button
              className="btn text-white bg-fuchsia-400 mt-6"
              >
              Identifiez-vous
            </button>
          </form>
        <p className="font-normal mt-4">
          Vous n&apos;avez pas encore de compte ?{" "}
          <Link
            to="#"
            className="font-bold text-fuchsia-400"
            
          >
            S&apos;inscrire
          </Link>
        </p>
      </div>
    </dialog>
  );
}