import { useParams } from "react-router-dom";
import useAuth from "../../contexts/AuthContext";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/fr";

dayjs.locale("fr");

dayjs.extend(relativeTime);

export default function ProfileDetail() {
  const [profile, setProfile] = useState({})
  const { user } = useAuth();
  const { profileId } = useParams();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/profiles/${profileId}`, {
          method: 'GET',
          headers: {
          'Content-Type': 'application/json',
           Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setProfile(data)
      } catch (error) {
        console.log(error)
      }
    };
    fetchProfileData();
  }, [profileId]);
  return (
    <div className="text-darkGrey flex flex-col items-center mb-10">
      <article className="flex flex-col mt-10 p-2 w-4/5 shadow-[1px_12px_13px_9px_#bbbbbb] rounded-lg ml-2 lg:shadow-none lg:flex-row lg:items-center lg:justify-center">
        <img
          className="w-60 m-auto rounded-xl mb-5 lg:w-80 lg:my-10 lg:ml-10 lg:mr-10"
          src={profile.avatar}
          alt={`${profile.firstname} ${profile.lastname}`}
        />
        <div className="lg:mt-10 lg:text-xl">
          <h2 className="mb-2 font-bold text-xl pl-4 lg:text-4xl">
          {profile.firstname} {profile.lastname}.
          </h2>
          <p className="pl-4">{dayjs(profile.birthdate).toNow(true)} ans</p>
          <p className="pl-4">{profile.city}</p>
          <p className="pl-4">{profile.department}, {profile.departmentNumber}</p>
        </div>
      </article>
      <button className="btn bg-fuchsia-300 text-darkGrey lg:text-xl w-fit mt-10">
        Envoyer un message
      </button>
      
      <div className="flex flex-col w-4/5 m-auto my-10 shadow-lg border-2 border-fuchsia-100 rounded-lg">
        <h2 className="font-bold text-xl p-4 uppercase">Description :</h2>
        <p className="p-2 text-justify text-lg leading-loose">
          {profile.bio}
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
      <button className="btn bg-fuchsia-300 text-darkGrey lg:text-xl w-fit mt-10 lg:hidden">
        Envoyer un message
      </button>
    </div>
  );
}
