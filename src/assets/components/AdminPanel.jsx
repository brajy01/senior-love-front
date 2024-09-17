import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

async function fetchAPI(path, options){
  const baseURL = "http://localhost:4000"
  try{
    const url = `${baseURL}${path}`;
    const response = await fetch(url, options);
    const data = await response.json();

    if(!response.ok){
      showErrorModal(data.error, response.status)
      return null;
    }

    return data;
  } catch (error){
    showErrorModal(error.message)
    return null;
  }
}

function showErrorModal (status) {
  const message = "Message d'erreur";
  messageElem = `${status} - ${message}`;
  console.log(messageElem);
}


// Déclaration du composant AdminPanel
export default function AdminPanel () {
  // États pour stocker les données des événements et des profils
  const [events, setEvents] = useState([]); 
  const [profiles, setProfiles] = useState([]); 
  const [currentEvent, setCurrentEvent] = useState(null); 
  const [currentProfile, setCurrentProfile] = useState(null); 
  const [view, setView] = useState("dashboard"); 


  const { profileId } = useParams();
  const { eventId } = useParams();
  const { userId } = useParams();

  // useEffect est utilisé pour effectuer des appels API quand le composant est monté
  useEffect(() => {
    // Charger la liste des événements depuis l'API
    const fetchEventsData = async () => {
      try {
        const response = await fetch("http://localhost:4000/events");
        const newEvents = await response.json();
        setEvents(newEvents);
      } catch (error) {
        console.log("Erreur lors de la récupération des événements :", error);
      }
    };
    fetchEventsData();

    // Charger la liste des profils depuis l'API
    const fetchProfilesData = async () => {
      try {
        const response = await fetch("http://localhost:4000/profiles");
        const newProfiles = await response.json();
        setProfiles(newProfiles);
      } catch (error) {
        console.error("Erreur:", error);
      }
    };
    fetchProfilesData();
  }, []);

  // useEffect(() => {
  //   // Delete an event
  //   const deleteEvent = async () => {
  //     const status = await fetchAPI(`/events/${eventId}`, { 
  //       method: "DELETE"
  //     })
  //     return status;
  //   };
  //   deleteEvent();

  //   // Create an event
  //   const createEvent = async (eventData) => {
  //     const data = await fetchAPI("/events", {
  //       method: "POST",
  //       headers: { "Content-type":"application/json"},
  //       body: JSON.stringify(eventData) //check eventData
  //     });
  //     if (!data.ok) return console.log(data);
  //     const eventCreated = await data.json();

  //     const newEvents = [...events, eventCreated];
  //     setEvents(newEvents);
  //   };
  //   createEvent(eventData);
    
  //   // Update an event
  //   const updateEvent = async (eventId, eventData) => {
  //     const data = await fetchAPI(`/events/${eventId}`, {
  //       method: "PATCH",
  //       headers: { "Content-type":"application/json"},
  //       body: JSON.stringify(eventData)
  //     });
  //     if (!data.ok) return console.log(data);
  //     const eventUpdated = await data.json();
  //     const newEvents = [...events, eventUpdated];
  //     setEvents(newEvents);
  //   };
  //   updateEvent(eventId, eventData);
    
    
  // }, [eventData, eventId]);

  

  // Contenu du composant rendu
  return (
    <div className="min-h-screen bg-gradient-to-b from-fuchsia-100 to-white p-8">
      {/* Message de Bienvenue */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-fuchsia-400 mb-4">
          Bienvenue sur le tableau de bord Administrateur
        </h2>
      </div>

      {/* Navigation interne à l'admin */}
      <nav className="flex justify-center space-x-4 mb-8">
        {/* Bouton pour gérer les événements */}
        <button
          className="btn bg-fuchsia-400 text-white"
          onClick={() => setView("eventList")}
        >
          Gérer les Événements
        </button>

      </nav>

      {/* Affichage de la liste des événements */}
      {view === "eventList" && (
        <div>
          <h2 className="text-2xl font-semibold text-center text-fuchsia-400 mb-6">
            Liste des Événements
          </h2>
          <div className="flex justify-center mb-4">
            {/* Bouton pour créer un nouvel événement */}
            <button
              className="btn bg-fuchsia-400 text-white flex items-center gap-2"
              onClick={() => {
                setCurrentEvent(null); // Réinitialise l'événement en cours pour créer un nouveau
                setView("eventForm"); // Change la vue pour afficher le formulaire d'événement
              }}
            >
              {/* SVG ajouté dans le bouton */}
              <svg
                className="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              {/* Texte du bouton */}
              Créer un Nouvel Événement
            </button>
          </div>
          {/* Liste des événements */}
          <ul className="space-y-4">
            {events.map((event) => (
              <li
                key={event.id}
                className="flex w-2/3 m-auto justify-between items-center p-4 bg-white shadow-md rounded-lg"
              >
                <span className="text-lg">{event.name}</span>

                <div className="flex gap-3">
                  <label className="label cursor-pointer">
                    <span className="label-text">Publié :</span>
                    <input
                      type="checkbox"
                      name="published"
                      className="checkbox ml-2"
                      defaultChecked={event.published || false}
                    />
                  </label>
                  {/* Bouton pour modifier l'événement */}
                  <button
                    className="btn btn-sm bg-fuchsia-300 text-white mr-2"
                    onClick={() => {
                      setCurrentEvent(event); // Définit l'événement sélectionné pour modification
                      setView("eventForm"); // Affiche le formulaire de modification
                    }}
                  >
                    Modifier
                  </button>
                  {/* Bouton pour supprimer l'événement */}
                  <button
                    className="btn btn-sm bg-red-400 text-white"
                    onClick={() => deleteEvent(event.id)}
                  >
                    Supprimer
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Formulaire pour créer ou modifier un événement */}
      {view === "eventForm" && (
        <div className="bg-white p-6 shadow-md rounded-lg max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-fuchsia-400 mb-4">
            {currentEvent
              ? "Modifier l'Événement"
              : "Créer un Nouvel Événement"}
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEventSubmit({
                name: e.target.elements.name.value,
                description: e.target.elements.description.value,
                location: e.target.elements.location.value,
                date: e.target.elements.date.value,
                type: e.target.elements.type.value,
                published: e.target.elements.published.checked,
                maxnumberpeople:
                  parseInt(e.target.elements.maxnumberpeople.value) || null,
              });
            }}
          >
            {/* Photo Preview */}
            <div className="form-control flex flex-col mb-4">
                {/* {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-48 h-48 object-cover rounded-full mb-2"
                  />
                ) : (
                  <img
                    className="w-full h-48 mb-4 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500"
                    src=""
                  />
                )} */}
                {/* Photo Input */}
                {/* <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ cursor: "pointer" }}
                  className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-fuchsia-300 file:text-darkGrey hover:file:bg-fuchsia-200 hover:file:bg-fuchsia-400"
                  id="default_size"
                /> */}
              </div>
            {/* Champ pour le nom de l'événement */}
            <input
              type="text"
              name="name"
              defaultValue={currentEvent?.name || ""}
              placeholder="Nom de l'événement"
              className="input input-bordered w-full mb-4"
            />
            {/* Champ pour la description de l'événement */}
            <textarea
              name="description"
              defaultValue={currentEvent?.description || ""}
              placeholder="Description de l'événement"
              className="textarea textarea-bordered w-full mb-4"
            />
            {/* Champ pour le lieu de l'événement */}
            <input
              type="text"
              name="location"
              defaultValue={currentEvent?.location || ""}
              placeholder="Lieu de l'événement"
              className="input input-bordered w-full mb-4"
            />
            {/* Champ pour la date de l'événement */}
            <input
              type="date"
              name="date"
              defaultValue={currentEvent?.date || ""}
              className="input input-bordered w-full mb-4"
            />
            {/* Champ pour le type d'événement */}
            <div className="form-control ">
              <select className="select select-bordered">
                <option value="" disabled>
                  Choisissez une activité
                </option>
                <option>Nature</option>
                <option>Musique</option>
                <option>Culture</option>
                <option>Sport</option>
                <option>Jeux</option>
                <option>Sortie</option>
              </select>
            </div>
            {/* Case à cocher pour l'état publié de l'événement */}
            <div className="flex items-center mb-4">
              <label className="label cursor-pointer">
                <span className="label-text">Publié :</span>
                <input
                  type="checkbox"
                  name="published"
                  className="checkbox ml-2"
                  defaultChecked={currentEvent?.published || false}
                />
              </label>
            </div>
            {/* Champ pour le nombre maximum de participants */}
            <input
              type="number"
              name="maxnumberpeople"
              defaultValue={currentEvent?.maxnumberpeople || ""}
              placeholder="Nombre maximum de participants"
              className="input input-bordered w-full mb-4"
            />
            {/* Bouton pour soumettre le formulaire */}
            <button className="btn bg-fuchsia-400 text-white w-full">
              {currentEvent ? "Modifier" : "Créer"}
            </button>
          </form>
        </div>
      )}

     
    </div>
  );
}; 


