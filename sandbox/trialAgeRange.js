// import { useEffect } from "react";

import dayjs = require("dayjs");

// const min = 55;
// const max = 90;
// const intervalle = 1;

// const length = (max - min) / intervalle + 1;
// const arr = Array.from({length }, (_, i) => min + i * intervalle);
// console.log(arr);


// // Filtre d'âge
// const [minAge, setMinAge] = useState();
// const [maxAge, setMaxAge] = useState();

// const ages = (profile) => {
//     calculatedAge = dayjs(profile.birthdate).toNow(true);
//     return calculatedAge;
// };

// const handleAgeChange = profiles
// .filter(profile => profile.calculatedAge >= minAge 
//     || 
//     profile.calculatedAge <= maxAge);

// return ();

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
    return dayjs().diff(dayjs(birthdate), 'ans');
};

const handleSubmit = (e) => {
    e.prevantDefault();
};

const handleGenderChange = (e) => setGender(e.target.value);
const handleDepartmentChange = (e) => setDepartment(e.target.value);
const handleCityChange = (e) => setCity(e.target.value);
const handleMinAgeChange = (e) => setMinAge(parseInt(e.target.value, 10));
const handleMaxAgeChange = (e) => setMaxAge(parseInt(e.target.value, 10));



