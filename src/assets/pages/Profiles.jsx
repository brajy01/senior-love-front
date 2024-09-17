import { useState } from "react";

export default function Profiles() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState([false, false, false, false, false, false]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCheckboxChange = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  return (
    <div className="text-darkGrey">
      {/* Logo + Nom du site */}
      <div className="flex items-center justify-center gap-4 mt-4 p-2">
        <img className="w-32" src="../../public/img/logo.png" alt="logo" />
        <div className="flex flex-col items-end">
          <p className="text-3xl font-bold text-fuchsia-400">Senior</p>
          <p className="text-3xl font-bold text-darkGrey">Love</p>
        </div>
      </div>

      {/* Bouton Filtres avec Menu Déroulant */}
      <div className="flex flex-col justify-center my-10 relative">
        <button
          className="btn-fuchsia-600 w-1/3 m-auto mb-10 flex justify-center items-center gap-4"
          onClick={toggleDropdown}
        >
          Filtres
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform duration-300 ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {isDropdownOpen && (
          <ul
            className={`dropdown-menu bg-lightWhite rounded-lg shadow-lg p-4 w-5/6 absolute left-1/2 transform -translate-x-1/2 z-10`}
            style={{ maxHeight: "320px", overflowY: "auto", marginTop: "22rem" }}
          >
            <li className="p-2 hover:bg-fuchsia-100 cursor-pointer">
              Genre :
              <select className="input w-8/12 ml-2">
                <option value="">Choisir un genre</option>
                <option value="homme">Homme</option>
                <option value="femme">Femme</option>
              </select>
            </li>
            <li className="p-2 hover:bg-fuchsia-100 cursor-pointer">
              Âge : entre
              <input className="input w-2/12" type="text" placeholder="" />
              et
              <input className="input w-2/12" type="text" placeholder="" /> ans
            </li>
            <li className="p-2 hover:bg-fuchsia-100 cursor-pointer">
              Département :
              <input
                className="input w-7/12"
                type="text"
                placeholder="N° département"
              />
            </li>
            <li className="p-2 hover:bg-fuchsia-100 cursor-pointer">
              Ville :
              <input
                className="input w-9/12"
                type="text"
                placeholder="Nom de la ville"
              />
            </li>
            <li className="p-2 cursor-pointer text-center">
              Centres d&apos;intérêts :
              <div className="flex flex-wrap justify-center gap-2 px-1 mt-4">
                {[
                  { label: "Culture", icon: "culture.png" },
                  { label: "Nature", icon: "nature.png" },
                  { label: "Sport", icon: "sport.png" },
                  { label: "Jeux", icon: "jeux.png" },
                  { label: "Musique", icon: "music.png" },
                  { label: "Sortie", icon: "sortie.png" },
                ].map((item, index) => (
                  <div className="flex flex-col items-center w-1/3 mb-8 lg:w-1/4" key={index}>
                    <img
                      className="w-16"
                      src={`../../public/icons/${item.icon}`}
                      alt={item.label}
                    />
                    <p className="mb-2 text-center">{item.label}</p>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={checkedItems[index]}
                        onChange={() => handleCheckboxChange(index)}
                        className="hidden" // Hide the default checkbox
                      />
                      <div
                        className={`w-5 h-5 ${
                          checkedItems[index] ? "bg-gray-700" : "bg-fuchsia-100"
                        } border border-gray-300 rounded flex items-center justify-center`}
                      >
                        {checkedItems[index] && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-check"
                            viewBox="0 0 16 16"
                          ></svg>
                        )}
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </li>
          </ul>
        )}

        <div>
      </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-10 lg:gap-10 lg:px-20 lg:justify-center">
          <article className="flex flex-col p-2 bg-lightWhite shadow-lg rounded-lg ml-2 w-fit lg:ml-2 lg:w-1/5 lg:shadow-2xl">
            <img
              className="filter blur w-28 m-auto rounded-xl mb-5 lg:w-56 lg:my-10"
              src="../../public/img/bernard.png"
              alt="Bernard"
            />
            <h2 className="mb-2 font-bold lg:text-xl lg:pl-4">L&apos;HERMITE Bernard</h2>
            <p className="lg:pl-4">63 ans</p>
            <p className="lg:pl-4">RENNES</p>
            <p className="hidden lg:block lg:pl-4">Ille et Vilaine, 35</p>
            <button className="btn-fuchsia-300 text-darkGrey mt-5 text-sm w-fit lg:ml-auto lg:mr-2 lg:mb-2">
              Envoyer un message
            </button>
          </article>
          <article className="flex flex-col p-2 bg-lightWhite shadow-lg rounded-lg ml-2 w-fit lg:ml-2 lg:w-1/5 lg:shadow-2xl">
            <img
              className="w-28 m-auto rounded-xl mb-5 lg:w-56 lg:my-10"
              src="../../public/img/bernard.png"
              alt="Bernard"
            />
            <h2 className="mb-2 font-bold lg:text-xl lg:pl-4">L&apos;HERMITE Bernard</h2>
            <p className="lg:pl-4">63 ans</p>
            <p className="lg:pl-4">RENNES</p>
            <p className="hidden lg:block lg:pl-4">Ille et Vilaine, 35</p>
            <button className="btn-fuchsia-300 text-darkGrey mt-5 text-sm w-fit lg:ml-auto lg:mr-2 lg:mb-2">
              Envoyer un message
            </button>
          </article>
          <article className="flex flex-col p-2 bg-lightWhite shadow-lg rounded-lg ml-2 w-fit lg:ml-2 lg:w-1/5 lg:shadow-2xl">
            <img
              className="w-28 m-auto rounded-xl mb-5 lg:w-56 lg:my-10"
              src="../../public/img/bernard.png"
              alt="Bernard"
            />
            <h2 className="mb-2 font-bold lg:text-xl lg:pl-4">L&apos;HERMITE Bernard</h2>
            <p className="lg:pl-4">63 ans</p>
            <p className="lg:pl-4">RENNES</p>
            <p className="hidden lg:block lg:pl-4">Ille et Vilaine, 35</p>
            <button className="btn-fuchsia-300 text-darkGrey mt-5 text-sm w-fit lg:ml-auto lg:mr-2 lg:mb-2">
              Envoyer un message
            </button>
          </article>
          <article className="flex flex-col p-2 bg-lightWhite shadow-lg rounded-lg ml-2 w-fit lg:ml-2 lg:w-1/5 lg:shadow-2xl">
            <img
              className="w-28 m-auto rounded-xl mb-5 lg:w-56 lg:my-10"
              src="../../public/img/bernard.png"
              alt="Bernard"
            />
            <h2 className="mb-2 font-bold lg:text-xl lg:pl-4">L&apos;HERMITE Bernard</h2>
            <p className="lg:pl-4">63 ans</p>
            <p className="lg:pl-4">RENNES</p>
            <p className="hidden lg:block lg:pl-4">Ille et Vilaine, 35</p>
            <button className="btn-fuchsia-300 text-darkGrey mt-5 text-sm w-fit lg:ml-auto lg:mr-2 lg:mb-2">
              Envoyer un message
            </button>
          </article>
          <article className="flex flex-col p-2 bg-lightWhite shadow-lg rounded-lg ml-2 w-fit lg:ml-2 lg:w-1/5 lg:shadow-2xl">
            <img
              className="w-28 m-auto rounded-xl mb-5 lg:w-56 lg:my-10"
              src="../../public/img/bernard.png"
              alt="Bernard"
            />
            <h2 className="mb-2 font-bold lg:text-xl lg:pl-4">L&apos;HERMITE Bernard</h2>
            <p className="lg:pl-4">63 ans</p>
            <p className="lg:pl-4">RENNES</p>
            <p className="hidden lg:block lg:pl-4">Ille et Vilaine, 35</p>
            <button className="btn-fuchsia-300 text-darkGrey mt-5 text-sm w-fit lg:ml-auto lg:mr-2 lg:mb-2">
              Envoyer un message
            </button>
          </article>
          <article className="flex flex-col p-2 bg-lightWhite shadow-lg rounded-lg ml-2 w-fit lg:ml-2 lg:w-1/5 lg:shadow-2xl">
            <img
              className="w-28 m-auto rounded-xl mb-5 lg:w-56 lg:my-10"
              src="../../public/img/bernard.png"
              alt="Bernard"
            />
            <h2 className="mb-2 font-bold lg:text-xl lg:pl-4">L&apos;HERMITE Bernard</h2>
            <p className="lg:pl-4">63 ans</p>
            <p className="lg:pl-4">RENNES</p>
            <p className="hidden lg:block lg:pl-4">Ille et Vilaine, 35</p>
            <button className="btn-fuchsia-300 text-darkGrey mt-5 text-sm w-fit lg:ml-auto lg:mr-2 lg:mb-2">
              Envoyer un message
            </button>
          </article>
        </div>
      
    </div>
  );
}
