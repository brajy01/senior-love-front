import { useState, useEffect } from "react";
import CardEvent from "../components/CardEvent";
import { Link } from "react-router-dom";
import useAuth from "../../contexts/AuthContext";

export default function Homepage() {
  const [events, setEvents] = useState([]);
  const { isConnected } = useAuth();
  //console.log(localStorage.getItem("token"));

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const response = await fetch(
          "https://senior-love-back.onrender.com/events?limit=3"
        );
        const newEvents = await response.json();
        setEvents(newEvents);
      } catch (error) {
        console.log("Erreur lors de la récupération des événements :", error);
      }
    };
    fetchEventsData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* Hero */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(img/couple.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="w-[80%] md:w-4/5">
            {/* Title */}
            <h1 className="text-5xl font-bold">
              <span className="text-fuchsia-400 font-bold">Senior</span>Love
            </h1>
            <h2 className="text-fuchsia-400 text-xl mb-10">
              Des rencontres locales, des liens durables
            </h2>

            {/* Form */}
            <form
              className="my-4 p-6 rounded-xl bg-gradient-to-b from-fuchsia-300 to-fuchsia-100"
              onSubmit={handleSubmit}
            >
              <select className="select select-bordered select-sm w-full max-w-xs my-2">
                <option disabled selected>
                  Je recherche
                </option>
                <option>Femme</option>
                <option>Homme</option>
              </select>
              <p className="flex text-black items-center">
                Entre{" "}
                <input
                  type="number"
                  value={50}
                  placeholder="Type here"
                  className="input input-bordered w-full input-sm w-1/3 m-2"
                />
                et
                <input
                  type="number"
                  value={70}
                  placeholder="Type here"
                  className="input input-bordered w-full input-sm w-1/3 m-2"
                />
              </p>

              <label className="input input-bordered flex items-center gap-2 input-sm">
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
                <input
                  type="text"
                  className="grow"
                  placeholder="Votre ville..."
                />
              </label>
              <button className="btn text-white bg-fuchsia-400 mt-6">
                Rechercher
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical my-16">
        {/* Item 1 */}
        <li>
          <div className="timeline-middle">
            <img
              className="w-16 mx-4 bg-fuchsia-200 p-3 rounded-full overflow-visible cursor-pointer"
              src="icons/sign-in.png"
              alt="Se connecter"
              onClick={() =>
                document.getElementById("btn_connexion").showModal()
              }
            />
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <div className="text-lg font-black">Inscrivez-vous</div>
            Créez un compte en quelques étapes simples
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            {isConnected ? (
              <Link to={"/my-profile"}>
                <img
                  className="w-16 mx-4 bg-fuchsia-200 p-3 rounded-full overflow-visible"
                  src="icons/edit-profile.png"
                  alt="Lien vers création de profil"
                />
              </Link>
            ) : (
              <img
                className="w-16 mx-4 bg-fuchsia-200 p-3 rounded-full overflow-visible"
                src="icons/edit-profile.png"
                alt="Lien vers création de profil"
                onClick={() =>
                  document.getElementById("btn_connexion").showModal()
                }
              />
            )}
          </div>
          <div className="timeline-end mb-10">
            <div className="text-lg font-black">Créez votre profil</div>
            Ajoutez une photo, décrivez vos centres d’intérêt et commencez à
            explorer la communauté
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <Link to={"/events"}>
              <img
                className="w-16 mx-4 bg-fuchsia-200 p-3 rounded-full overflow-visible"
                src="icons/event.png"
                alt=""
              />
            </Link>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <div className="text-lg font-black">Rejoignez des évènements</div>
            Inscrivez-vous à des évènements locaux organisés par notre équipe,
            parfaits pour rencontrer de nouvelles personnes
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            {isConnected ? (
              <Link to={"/messages"}>
                <img
                  className="w-16 mx-4 bg-fuchsia-200 p-3 rounded-full overflow-visible"
                  src="icons/chat.png"
                  alt="Lien vers messagerie"
                />
              </Link>
            ) : (
              <img
                className="w-16 mx-4 bg-fuchsia-200 p-3 rounded-full overflow-visible"
                src="icons/chat.png"
                alt="Lien vers messagerie"
                onClick={() =>
                  document.getElementById("btn_connexion").showModal()
                }
              />
            )}
          </div>
          <div className="timeline-end mb-10">
            <div className="text-lg font-black">Discutez en privé</div>
            Utilisez notre messagerie pour entrer en contact avec d’autres
            membre en toute sécurité
          </div>
          <hr />
        </li>
      </ul>

      {/* Activités à venir */}
      <div className="bg-gradient-to-b from-fuchsia-300 to-fuchsia-100 p-4">
        <h2 className="text-3xl text-white font-semibold text-center">
          Nos activités à venir
        </h2>
        <div className="flex flex-col justify-around p-4 lg:flex-wrap">
          {events.map((event) => (
            <div
              key={event.id}
              className="card mt-10 lg:card-side bg-base-100 shadow-xl lg:w-3/4 lg:h-64 lg:mx-auto xl:w-1/2"
            >
              <CardEvent event={event} />
            </div>
          ))}
        </div>

        {/* Bouton "Afficher tout" */}
        <Link to={"/events"}>
          <div className="text-center mt-4">
            <button className="btn text-white bg-fuchsia-400">Voir tout</button>
          </div>
        </Link>
      </div>

      {/* Join us */}
      <div className="flex mt-12 items-center justify-center">
        <p className="mb-10 mt-10 text-justify mx-6 lg:w-2/5">
          <span className="text-center block mb-8 text-4xl font-bold">
            Rejoignez <span className="text-fuchsia-400 font-bold">Senior</span>
            Love dès aujourd&apos;hui !
          </span>
          Ne restez pas seul(e) ! Rejoignez SeniorLove et découvrez la joie de
          rencontrer des personnes partageant vos centres d&apos;intérêt. Que ce
          soit pour une amitié sincère ou une relation amoureuse, SeniorLove est
          là pour vous aider à créer des liens qui comptent.
        </p>
        <img
          className="hidden lg:block rounded-lg shadow-md"
          src="img/mixed-couple.jpg"
          alt=""
        />
      </div>
      <button
        className="btn block mx-auto my-8  text-white bg-fuchsia-400 hover:animate-bounce"
        onClick={() => document.getElementById("btn_connexion").showModal()}
      >
        Nous rejoindre
      </button>
    </>
  );
}
