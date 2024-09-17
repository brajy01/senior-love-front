import { useParams } from "react-router-dom";
import CardProfile from "../components/CardProfile";
import { useEffect, useState } from "react";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/fr";

dayjs.locale("fr");
dayjs.extend(relativeTime);

export default function ProfilesList() {
  const [profiles, setProfiles] = useState([]);

  const [gender, setGender] = useState('all');
  const [department, setDepartment] = useState('');
  const [city, setCity] = useState('');
  const [minAge, setMinAge] = useState();
  const [maxAge, setMaxAge] = useState();
  const [interest, setInterest] = useState([]);


  useEffect(() => {
    const fetchProfilesData = async () => {
        let url = 'http://localhost:4000/profiles';
        const response = await fetch(url);
          const newProfiles = await response.json();
          console.log(newProfiles);
          setProfiles(newProfiles);
    }
    fetchProfilesData();
  }, []);

  const calculatedAge = (birthdate) => {
      return dayjs().diff(dayjs(birthdate), 'year');
  };

  const handleSubmit = (e) => {
      e.prevantDefault();
  };
  

  const handleGenderChange = (e) => setGender(e.target.value);
  const handleDepartmentChange = (e) => setDepartment(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);

  const handleInterestChange = (e) => {
    const { value, checked } = e.target;
    if (checked){
      setInterest((interests) => [...interests, value]);
    }
    else {
      setInterest((interests) => interests.filter((interestElem) => interestElem !== value));
    }
  };

  const handleMinAgeChange = (e) => setMinAge(parseInt(e.target.value, 10));
  const handleMaxAgeChange = (e) => setMaxAge(parseInt(e.target.value, 10));
  

  return (
    <>
      <div className="drawer drawer-start flex flex-col items-center">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex justify-end items-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="btn text-lightWhite text-lg bg-fuchsia-400 my-6 lg:w-fit"
          >
            Filtres
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
              />
            </svg>
          </label> 
        </div>
        <div className="flex flex-wrap gap-5 mb-10">

          {/* Display the search with applied filters */}
          {profiles.filter((profile) => {
            const genderMatch = gender === 'all' || profile.gender === gender;

            // To be able to write with and without capital letters
            const departmentMatch = department === '' || profile.department.toLowerCase() === department.toLowerCase();

            const cityMatch = city === '' || profile.city.toLowerCase() === city.toLowerCase();

            const interestMatch = 
            interest.length === 0 || profile.interests.some((interestElem) => interest.includes(interestElem));

            const age = calculatedAge(profile.birthdate);

            const ageMatch = (!minAge || age >= minAge) && (!maxAge || age < maxAge);

            return genderMatch && departmentMatch && cityMatch && interestMatch && ageMatch;
            })
              .map((profile) => ( 
                <CardProfile key={profile.id} profile={profile}/>
                ))} 

        </div>
        <div className="drawer-side z-10">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <form className="bg-base-200 text-base-content min-h-full w-80 p-4 lg:w-96" onSubmit={(e) => handleSubmit(e)}>
            {/* Sidebar content here */}
            <div className="flex flex-col mt-16">
              <li className="flex flex-row items-center p-2 hover:bg-fuchsia-100 cursor-pointer w-full">
                Genre :
                <select className="input w-8/12 ml-2" onChange={handleGenderChange} value={gender}>
                  <option value="all">Choisir un genre</option>
                  <option value="homme">Homme</option>
                  <option value="femme">Femme</option>
                </select>
              </li>
              <li className=" flex flex-row items-center p-2 hover:bg-fuchsia-100 cursor-pointer gap-2">
                Âge : entre
                <input
                  className="input w-2/12" 
                  type="number" 
                  value={minAge} 
                  onChange={handleMinAgeChange} 
                  placeholder="55"
                />
                et
                <input
                  className="input w-2/12"
                  type="number"
                  value={maxAge}
                  onChange={handleMaxAgeChange}
                  placeholder="90"
                />{" "}
                ans
              </li>
              <li className="flex flex-row items-center  p-2 hover:bg-fuchsia-100 cursor-pointer gap-2" onChange={handleDepartmentChange} value={department}>
                Département :
                <input
                  className="input w-7/12"
                  type="text"
                  placeholder="Nom du département"
                  
                  
                />
              </li>
              <li className="flex flex-row items-center  p-2 hover:bg-fuchsia-100 cursor-pointer gap-2" onChange={handleCityChange} value={city} >
                Ville :
                <input
                  className="input w-10/12"
                  type="text"
                  placeholder="Nom de la ville"
                  
                  
                />
              </li>
              <li className="p-2 cursor-pointer text-center no-animation">
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
                    <div
                      className="flex flex-col items-center w-1/3 mb-8 lg:w-1/4"
                      key={index}
                    >
                      <img
                        className="w-16"
                        src={`../../public/icons/${item.icon}`}
                        alt={`${item.label}`}
                      />
                      <p className="mb-2 text-center">{item.label}</p>
                      <label className="flex items-center cursor-pointer no-animation" >
                        <input 
                          type="checkbox"
                          className="checkbox no-animation" 
                          name="checkbox"  
                          value={item.value}
                          onChange={handleInterestChange}

                        />
                      </label>
                    </div>
                  ))}
                </div>
              </li>
            </div>
            <button type="submit" className="btn text-white bg-fuchsia-400 mt-6 ">
                  Rechercher 
            </button>
          </form>
        </div>
      </div>
    </>
  );
}


