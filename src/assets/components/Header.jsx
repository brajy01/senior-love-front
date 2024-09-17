import { Link } from "react-router-dom";
import useAuth from "../../contexts/AuthContext"; 
import ConnexionPopup from "./ConnexionPopup";
import RegisterPopup from "./RegisterPopup";

export default function Header() {
  const { isConnected, logout } = useAuth();
  
  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 z-50 border bottom-1">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"/"}>Accueil</Link>
              </li>
              <li>
                <Link to={"/profiles"}>Profils</Link>
              </li>
              <li>
                <Link to={"/events"}>Ev&#232;nements</Link>
              </li>
              <li>
              <Link to={"/messages"}>Messagerie</Link>
               </li>
              <li>
                <Link to={"/admin"}>Admin</Link>
              </li>
           </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl lg:text-2xl">
            <img src="icons/logo.png" alt="logo" className="w-10 h-6 hidden" />
            <p>
              <span className="text-fuchsia-400 font-bold">Senior</span>
              Love
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 lg:text-xl">
            <li>
              <Link to={"/"}>Accueil</Link>
            </li>
            <li>
              <Link to={"/profiles"}>Profils</Link>
            </li>
            <li>
              <Link to={"/events"}>Ev&#233;nements</Link>
            </li>
            <li>
              <Link to={"/messages"}>Messagerie</Link>
            </li>
            <li>
              <Link to={`/conversations/1}`}>test conversation</Link>
            </li>
             <li>
              <Link to={"/admin"}>Admin</Link>
             </li>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          {isConnected ? (
            <button

            className="btn btn-xs lg:btn-sm bg-fuchsia-200 m-1"
            onClick={logout}
          >
            Se déconnecter
          </button>
          
          ) : (
            <>
              <button
                className="btn btn-xs lg:btn-sm bg-fuchsia-200 m-1"
                onClick={() => document.getElementById("btn_connexion").showModal()}
              >
                Se connecter
                <ConnexionPopup/>
              </button>

              <button
                className="btn btn-xs lg:btn-sm bg-fuchsia-200 m-1"
                onClick={() => document.getElementById("btn_register").showModal()}
              >
                S&apos;inscrire
                <RegisterPopup />
              </button>
            </>  
          )}
        </div>
      </div>
    </>
  );
}
