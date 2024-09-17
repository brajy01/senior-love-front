import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { Eye, EyeOff } from 'react-feather';
import useData from '../../contexts/UserContext.jsx';

export default function RegisterPopup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { createUser } = useData();
  const popUpRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (password !== confirmPassword) {
      setErrorMessage("Les mots de passe doivent êtres identiques");
      return;
    }
    try {

      await createUser({ email, password });
      if (popUpRef.current) popUpRef.current.close();
    } catch (error) {   
      console.log(error.message);
    }
  };
      

  return (
    <>
      <dialog id="btn_register" className="modal" ref={popUpRef}>
        <div className="modal-box relative p-6">
          {/* Bouton de fermeture en haut à droite */}
          <form method="dialog" className="absolute top-2 right-2">
            <button className="btn btn-circle btn-outline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </form>

          {/* Contenu de la modale */}
          <h2 className="text-xl mb-4 mt-12">
            Bienvenue sur{" "}
            <span className="text-fuchsia-400 font-bold">Senior</span>Love!
          </h2>

           {/* Affichage du message d'erreur */}
            {errorMessage && (
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
        
          <form method="post" onSubmit={handleSubmit}>
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
                name="email" 
                className="grow" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>
            </label>
            <label className="relative input input-bordered flex items-center gap-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type={showPassword ? 'text' : 'password'}
                className="grow"
                placeholder="Mot de passe"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 flex items-center text-darkGrey hover:text-[#E879F9] focus:outline-none"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </label>
            <label className="relative input input-bordered flex items-center gap-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                className="grow"
                placeholder="Confirmation du mot de passe"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 flex items-center text-darkGrey hover:text-[#E879F9] focus:outline-none"
                >
                  {showConfirmPassword ? <EyeOff /> : <Eye />}
              </button>
            </label>
            <div className="my-8">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="checkbox"
                    name="terms" 
                    required
                  />
                  <span className="label-text">
                    Je certifie être majeur(e) et accepter les conditions
                    générales d’utilisation. *
                  </span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="checkbox" 
                    name="privacy"
                  />
                  <span className="label-text">
                    J’accepte que mes données sensibles soient traitées.
                  </span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary"
                    name="newsletter"
                  />
                  <span className="label-text">
                    Je souhaite recevoir des invitations à des événements
                    SeniorLove et des offres (je peux me désinscrire à tout
                    moment).
                  </span>
                </label>
              </div>
            </div>
            <button type="submit" className="btn text-white bg-fuchsia-400 mt-6">
              Inscrivez-vous
            </button>
          </form>
          <p className="font-normal mt-4">
            Vous avez déjà un compte ?{" "}
            <Link
              to="#"
              className="font-bold text-fuchsia-400"
              onClick={() =>
                document.getElementById("btn_connexion").showModal()
              }
            >
              Se connecter
            </Link>
          </p>
        </div>
      </dialog>
    </>
  );
}
