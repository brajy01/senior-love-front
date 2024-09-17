import { useParams } from "react-router-dom";
import useAuth from "../../contexts/AuthContext";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/fr";

dayjs.locale("fr");

dayjs.extend(relativeTime);

export default function EventDetail() {

  const [event, setEvent] = useState({})
  const { user } = useAuth();
  const { eventId } = useParams();
  

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/events/${eventId}`, {
          method: 'GET',
          headers: {
          'Content-Type': 'application/json',
           Authorization: `Bearer ${user?.accessToken}`,
          },
        });
        const data = await response.json();
        setEvent(data)
      } catch (error) {
        console.log(error)
      }
    };
    fetchEventData();
  }, [eventId]);

  return (
    <>
      {/* Image de l'événement */}
      <img
        src={`.${event.photo}`}
        className="rounded-2xl mx-auto my-4 w-5/6 lg:h-60 object-cover"
        alt={event.name}
      />

      {/* Conteneur pour l'adresse et les infos pratiques */}
      <div className="flex flex-col lg:flex-row">
        {/* Bloc d'informations sur l'événement (titre, date, adresse, prix, participants) */}
        <div className="text-lg lg:w-2/5 text-center ">
          <h1 className="text-2xl font-semibold">{event.name}</h1>
          <p className="mb-4">{event.date} à {event.hour}</p>
          <p>{event.location}</p>
          {/* <p>75000 Paris</p> */}
          <p className="my-2 font-semibold">10€ à régler sur place</p>
          <p>Participants: 14/{event.maxnumberpeople}</p>

          {/* Bouton d'inscription visible seulement sur les écrans de taille small et plus */}
          <button className="btn mx-auto my-8 text-white bg-fuchsia-400 hidden sm:block">
            Je m&apos;inscris
          </button>
        </div>

        {/* Bloc de collapsibles pour la description et les infos pratiques */}
        <div className="lg:pr-[106px] m-4 flex flex-col gap-3 lg:w-3/5">
          {/* Collapsible pour la description de l'événement */}
          <div
            tabIndex={0}
            className="collapse collapse-arrow  border-base-300 bg-base-200 border"
          >
            <div className="collapse-title text-xl font-medium">
              Description
            </div>
            <div className="collapse-content">
              <p>
              {event.description}
              </p>
            </div>
          </div>

          {/* Collapsible pour les infos pratiques */}
          <div
            tabIndex={0}
            className="collapse collapse-arrow  border-base-300 bg-base-200 border"
          >
            <div className="collapse-title text-xl font-medium">
              Infos pratiques
            </div>
            <div className="collapse-content">
              <p>- Prévoir des rollers</p>
              <p>- Port du masque obligatoire</p>
              <p>- Gel hydroalcoolique à disposition</p>
            </div>
          </div>

          {/* Bouton de recherche visible uniquement sur mobile */}
          <button className="btn text-white bg-fuchsia-400 mt-6 lg:hidden">
            Je m&apos;inscris
          </button>
        </div>
      </div>
    </>
  );
}
