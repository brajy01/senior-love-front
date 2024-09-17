import Map from "../components/Map";

export default function Events() {
  return (
    <>
      {/* Titre*/}
      <h2 className="text-center text-2xl m-2">Nos activités à venir</h2>

      {/* Formulaire*/}
      <div className="bg-fuchsia-200 ">
        <form
          className="
        flex flex-col items-center justify-center
        lg:flex-row lg:justify-around lg:items-center
        "
        >
          <input
            type="text"
            placeholder="Nom évènement ..."
            className="border rounded-lg shadow-md p-1 m-2 "
          />
          <input
            type="text"
            placeholder="Ville ..."
            className="border rounded-lg shadow-md p-1 mb-2"
          />
          <input
            type="date"
            placeholder="Date ..."
            className="border rounded-lg shadow-md p-1 mb-2"
          />
          <input
            type="text"
            placeholder="Type d'activité ..."
            className="border rounded-lg shadow-md p-1 mb-2"
          />
          <button className="bg-fuchsia-400 text-white py-1 px-6 rounded-lg m-3">
            Rechercher
          </button>
        </form>
      </div>

      <div className="flex flex-col lg:flex-row-reverse">
        {/* Google Maps API */}
        <div
          className="
          flex justify-center items-center my-10 h-1/3
          lg:w-1/3
          "
        >
          <Map />
        </div>
        {/* Liste activités */}
        <div
          className="
          flex flex-col justify-center items-center
          lg:w-2/3
          "
        >
          <article className="article w-5/6">
            <div
              className="w-1/3 bg-cover bg-center rounded-l-lg"
              style={{
                backgroundImage:
                  "url('../../public/img/soiree-roller-disco.jpg')",
              }}
            ></div>
            <div className="flex flex-col justify-between p-4 text-start w-2/3">
              <div>
                <div className="mb-2">
                  <p className="text-xl font-bold">Soirée roller disco</p>
                  <p>12/15 participants</p>
                </div>
                <div>
                  <p className="text-xl font-bold">Bordeaux</p>
                  <p>15/11 à 17h00</p>
                </div>
              </div>
              <button className="btn-register ml-auto mt-4">
                Je m&apos;inscris
              </button>
            </div>
          </article>
          <article className="article w-5/6">
            <div
              className="w-1/3 bg-cover bg-center rounded-l-lg"
              style={{
                backgroundImage:
                  "url('../../public/img/grand-loto-communal.jpeg')",
              }}
            ></div>
            <div className="flex flex-col justify-between p-4 text-start w-2/3">
              <div>
                <div className="mb-2">
                  <p className="text-xl font-bold">Grand loto</p>
                  <p>28/50 participants</p>
                </div>
                <div>
                  <p className="text-xl font-bold">Cenon</p>
                  <p>15/11 à 20h30</p>
                </div>
              </div>
              <button className="btn-register ml-auto mt-4">
                Je m&apos;inscris
              </button>
            </div>
          </article>
          <article className="article w-5/6">
            <div
              className="w-1/3 bg-cover bg-center rounded-l-lg"
              style={{
                backgroundImage:
                  "url('../../public/img/grand-loto-communal.jpeg')",
              }}
            ></div>
            <div className="flex flex-col justify-between p-4 text-start w-2/3">
              <div>
                <div className="mb-2">
                  <p className="text-xl font-bold">Grand loto</p>
                  <p>28/50 participants</p>
                </div>
                <div>
                  <p className="text-xl font-bold">Cenon</p>
                  <p>15/11 à 20h30</p>
                </div>
              </div>
              <button className="btn-register ml-auto mt-4">
                Je m&apos;inscris
              </button>
            </div>
          </article>
          <button className="bg-fuchsia-400 text-white py-1 px-6 rounded-lg m-3 w-1/3">
            Voir plus
          </button>
        </div>
      </div>
    </>
  );
}
