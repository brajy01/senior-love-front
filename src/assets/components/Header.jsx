import { useState } from "react";
import "../../../src/styles.css";
import { Link } from "react-router-dom";

export default function Header({ onLoginClick, onRegisterClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Container header */}
      <div className="bg-neutral-300 flex justify-between p-3 items-center lg:bg-lightWhite">
        <div className="lg:hidden">
          {/* Icone menu burger */}
          <svg
            onClick={toggleMenu}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-darkGrey cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        {/* Logo desktop */}
        <div className="hidden lg:block">
          <img className="w-16" src="../../public/img/logo.png" alt="logo" />
        </div>

        {/* Navigation header desktop */}
        <div className="text-xl font-semibold w-1/2">
          <nav className="hidden lg:flex gap-3 place-content-around">
            <Link to="/" className="text-darkGrey">
              Accueil
            </Link>
            <Link to="/profiles" className="text-darkGrey">
              Profils
            </Link>
            <Link to="/events" className="text-darkGrey">
              Événements
            </Link>
            <Link to="/messages" className="text-darkGrey">
              Messages
            </Link>
          </nav>
        </div>

        {/* Navigation header mobile */}
        <div className="flex gap-3">
          {/* Button to open the register modal */}
          <button
            onClick={onRegisterClick}
            className="text-darkGrey lg:bg-fuchsia-300 lg:py-1 lg:px-3 lg:rounded-full lg:shadow-md"
          >
            S&apos;inscrire
          </button>
          {/* Button to open the login modal */}
          <button
            onClick={onLoginClick}
            className="text-darkGrey lg:bg-fuchsia-300 lg:py-1 lg:px-3 lg:rounded-full lg:shadow-md"

          >
            Se connecter
          </button>
        </div>
      </div>

      {/* Menu burger avec transition */}
      <div
        className={`fixed inset-0 bg-neutral-300 bg-opacity-90 flex flex-col items-center justify-center z-50 transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-1 left-4 text-darkGrey text-4xl lg:invisible"
        >
          &times; {/* Icône de fermeture */}
        </button>
        <nav className="text-darkGrey text-2xl space-y-6 flex flex-col place-content-around h-full">
          <div className="flex flex-col leading-loose">
            <Link to="/" className="hover:font-semibold" onClick={closeMenu}>
              Accueil
            </Link>
            <Link
              to="/profiles"
              className="hover:font-semibold transition duration-500"
              onClick={closeMenu}
            >
              Profils
            </Link>
            <Link to="/events" className="hover:font-semibold" onClick={closeMenu}>
              Événements
            </Link>
            <Link to="/messages" className="hover:font-semibold" onClick={closeMenu}>
              Messages
            </Link>
          </div>
          <div className="flex flex-col leading-loose">
            <Link to="my-account" className="hover:font-semibold" onClick={closeMenu}>
              Mon compte
            </Link>
            <a className="hover:font-semibold" onClick={closeMenu}>
              Déconnexion
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
