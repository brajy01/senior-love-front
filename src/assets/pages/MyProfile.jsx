import { useState } from "react";  
import useProfile from "../../contexts/ProfileContext";
import EditProfileModal from "../components/EditProfileModal";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/fr";
dayjs.locale("fr");
dayjs.extend(relativeTime);
/*function showErrorModal (status) {
  const message = "Message d'erreur";
  messageElem = `${status} - ${message}`;
  console.log(messageElem);
}*/
export default function MyProfile() {
  
  const { profile } = useProfile();
  
  if(!profile){
    <p>Chargement du profil...</p>
  }
  return (
    <div className="text-darkGrey flex flex-col items-center mb-10">
      <article className="flex flex-col mt-10 p-2 w-4/5 shadow-[1px_12px_13px_9px_#bbbbbb] rounded-lg ml-2 lg:shadow-none lg:flex-row lg:items-center lg:justify-center">
        {/*{selectedImage ? (
          <img
            src={selectedImage}
            alt="Selected"
            className="w-80 h-80 mr-4 object-cover rounded-full mb-2"
          />
        ) : (*/}
          <img
            className="w-80 h-80 mb-4 bg-gray-200 rounded-full flex items-center justify-center text-gray-500"
            src={profile ? `${profile.avatar}` : "../../img/avatar-gris.png"}
          />
        {/*})}*/}
        <div className="lg:mt-10 lg:text-xl">
          <h2 className="mb-2 font-bold text-xl pl-4 lg:text-4xl">
          {profile ? `${profile.lastname} ${profile.firstname}` : "Nom, Prénom"}
          </h2>
          <p className="pl-4">{profile ? `${dayjs(profile.birthdate).toNow(true)}` : "xx ans"}</p>
          <p className="pl-4">{profile ? `${profile.city}` : "Ville"}</p>
          <p className="pl-4">{profile ? `${profile.department}, ${profile.departmentNumber}` : "Département, numéro de département"}</p>
        </div>
      </article>
      {/* Button to open modal for editing profile */}
      <button
        className="btn bg-fuchsia-300 text-darkGrey lg:text-xl w-fit mt-10 flex justify-end"
        onClick={() => document.getElementById("edit_modal").showModal()} 
      >
        Modifier mon profil
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
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </button>
        <EditProfileModal />
      <div className="flex flex-col w-4/5 m-auto my-10 shadow-lg border-2 border-fuchsia-100 rounded-lg">
        <h2 className="font-bold text-xl p-4 uppercase">Description :</h2>
        <p className="p-2 text-justify text-lg leading-loose">
          {profile ? `${profile.bio}` : "Description"}
        </p>
      </div>
      <button className="btn-fuchsia-100 w-2/3 m-auto border-none text-darkGrey font-bold">
        Centres d&apos;intérêts
      </button>
      <div className="flex flex-wrap justify-center gap-2 px-1 mt-10">
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
              className="w-20 bg-fuchsia-100 p-4 rounded-full overflow-visible"
              src={`../../public/icons/${item.icon}`}
              alt={`${item.label}`}
            />
            <p className="mb-2 text-center">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}