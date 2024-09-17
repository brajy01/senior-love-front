/* eslint-disable react/jsx-key */
import CardEvent from "../components/CardEvent";
import Map from "../components/Map";
import { useState, useEffect } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Pour utiliser async/await, on peut déclarer une fonction à l'intérieur de useEffect(). Attention, il ne faut pas oublier d'appeler cette fonction tout de suite après !
    const fetchEventsData = async () => {
      try {
        const response = await fetch("http://localhost:4000/events");
        const newEvents = await response.json();
        setEvents(newEvents);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEventsData();
  }, []);

  return (
    <>
      {/* Bloc recherche activités */}
      <div className="bg-gradient-to-b from-fuchsia-300 to-fuchsia-100 p-4">
        {/* Titre */}
        <h2 className="text-3xl text-white font-semibold text-center mb-6">
          Nos activités à venir
        </h2>{" "}
        {/* Formulaire de recherche */}
        <form className="flex flex-col lg:flex-row gap-3 justify-center items-center">
          <label className="input input-bordered flex items-center gap-2 lg:w-1/5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="text" className="grow" placeholder="Search" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="-0.5 -0.5 24 24"
              id="Network-Pin--Streamline-Ultimate"
              height={20}
              width={20}
            >
              <desc>
                {"Network Pin Streamline Icon: https://streamlinehq.com"}
              </desc>
              <path
                stroke="#000000"
                d="M17.96875 15.523945833333332c-0.19847083333333335 0 -0.359375 -0.16090416666666665 -0.359375 -0.359375 0 -0.19856666666666667 0.16090416666666665 -0.359375 0.359375 -0.359375"
                strokeWidth={1}
              />
              <path
                stroke="#000000"
                d="M17.96875 15.523945833333332c0.19847083333333335 0 0.359375 -0.16090416666666665 0.359375 -0.359375 0 -0.19856666666666667 -0.16090416666666665 -0.359375 -0.359375 -0.359375"
                strokeWidth={1}
              />
              <path
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.96875 10.852070833333334c1.1437708333333334 0 2.2406791666666668 0.4543458333333334 3.0494166666666667 1.2630833333333333 0.8087375 0.8087375 1.2630833333333333 1.9056458333333333 1.2630833333333333 3.0494166666666667 0 1.8409583333333335 -2.576 5.344625 -3.746125 6.840583333333334 -0.06717916666666666 0.08596250000000001 -0.15314166666666668 0.15563333333333332 -0.251275 0.20345416666666666 -0.09813333333333334 0.04782083333333333 -0.20594583333333336 0.0727375 -0.3151 0.0727375 -0.10915416666666668 0 -0.21696666666666667 -0.024916666666666667 -0.3151 -0.0727375 -0.09813333333333334 -0.04782083333333333 -0.18409583333333335 -0.11749166666666667 -0.251275 -0.20345416666666666 -1.170125 -1.4969166666666667 -3.746125 -4.999625 -3.746125 -6.840583333333334 0 -1.1437708333333334 0.4543458333333334 -2.2406791666666668 1.2630833333333333 -3.0494166666666667 0.8087375 -0.8087375 1.9056458333333333 -1.2630833333333333 3.0494166666666667 -1.2630833333333333Z"
                strokeWidth={1}
              />
              <path
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.655387500000002 22.0636125c-2.0875375000000003 0.4258833333333334 -4.254520833333333 0.22377083333333336 -6.227297916666667 -0.5808458333333333 -1.9727770833333333 -0.8047125 -3.6628937500000003 -2.1758958333333336 -4.856986666666667 -3.9403791666666668 -1.1940833333333334 -1.7645791666666666 -1.8385845416666666 -3.8432999999999997 -1.852134416666667 -5.973770833333334 -0.013550833333333333 -2.13057625 0.6044610833333334 -4.21736625 1.7760044166666666 -5.996924166666666C3.6665162500000004 3.7921345833333335 5.339066666666667 2.39959 7.301445833333333 1.5698745833333334 9.263815416666667 0.7401620416666667 11.428029166666667 0.5104859583333333 13.5208375 0.9098455000000001c2.0928083333333336 0.39936241666666666 4.0204 1.40984825 5.539358333333333 2.9038803333333334s2.5611458333333332 3.404622916666667 2.995079166666667 5.490540833333333"
                strokeWidth={1}
              />
              <path
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.90511125 21.95714166666667c-1.4579316666666666 -2.1379458333333337 -2.432115833333333 -6.023316666666666 -2.432115833333333 -10.4612625 0 -4.437945833333333 0.9741841666666667 -8.3222625 2.432115833333333 -10.461272083333334"
                strokeWidth={1}
              />
              <path
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M0.7494875833333334 10.7775125H12.220475"
                strokeWidth={1}
              />
              <path
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.8798875 5.030080833333334h17.243291666666664"
                strokeWidth={1}
              />
              <path
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M1.9689245833333335 16.525020833333336h8.814625416666667"
                strokeWidth={1}
              />
              <path
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.098904166666667 1.0346070833333334c1.2411375 2.097159166666667 1.9968791666666665 4.445602916666667 2.2118333333333333 6.872984583333333"
                strokeWidth={1}
              />
            </svg>
            <input type="text" className="grow" placeholder="Votre ville..." />
          </label>
          <label className="input input-bordered flex items-center gap-2 lg:w-1/5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="date" className="grow" placeholder="Date" />
          </label>
          <label className="input input-bordered flex items-center gap-2 lg:w-1/5">
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
              type="text"
              className="grow"
              placeholder="Type d'activité..."
            />
          </label>
          {/* Bouton de recherche */}
          <button className="btn text-white bg-fuchsia-400 mx-5">
            Rechercher
          </button>
        </form>
      </div>

      <div className="flex flex-col lg:flex-row-reverse">
        {/* API Google Maps */}
        <div className="lg:w-3/5">
          <Map />
        </div>

        {/* Liste des événements */}

        <div className="flex flex-wrap m-10 justify-around lg:flex-wrap">
          {events.map((event) => (

            <div
              className="card mt-10 lg:card-side bg-base-100 shadow-xl lg:w-3/4 lg:h-64"
              key={event.id}
            >
              <CardEvent event={event} />

            </div>
          ))}
        </div>
      </div>
    </>
  );
}

