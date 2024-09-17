import "../../../src/styles.css";

export default function Homepage() {
  return (
    <div>
      {/* Logo + Nom du site */}
      <div className="flex items-center justify-center gap-4 mt-4 p-2 ">
        <img className="w-32" src="../../public/img/logo.png" alt="logo" />
        <div className="flex flex-col items-end">
          <p className="text-3xl font-bold text-fuchsia-400">Senior</p>
          <p className="text-3xl font-bold text-darkGrey">Love</p>
        </div>
      </div>
      {/* Tagline*/}
      <p className="my-5 w-5/6 border-y-2 border-darkGrey py-2 px-6 m-auto text-center text-xl">
        Des rencontres locales, des liens durables
      </p>
      {/* Form + image */}
      <div className="bg-[url('../../public/img/vieux.jpg')] bg-cover bg-center w-full flex flex-col justify-center h-[calc(100vh-424px)]">
        <form className="bg-fuchsia-300 p-4 w-3/5 h-5/8 m-auto rounded-xl flex flex-col place-content-evenly">
          <input
            className="input w-full"
            type="text"
            placeholder="Je recherche..."
          />
          <p className="text-xl text-center">
            Entre <input className="input w-2/12" type="number" /> et
            <input className="input w-2/12" type="number" /> ans
          </p>
          <input
            className="input w-full"
            type="text"
            placeholder="Votre ville ..."
          />
        </form>
        {/* Bouton rechercher */}
        <button className="bg-fuchsia-700 w-1/2 rounded-md py-1 text-lg text-lightWhite my-4 font-bold block mx-auto">
          Rechercher
        </button>
      </div>

      {/* Comment ca marche - section */}
      <p className="my-5 w-5/6 border-y-2 border-darkGrey py-2 px-6 m-auto text-center text-lg">
        Comment ça marche ?
      </p>
      {/* Item 1 */}
      <div className="card-home">
        <img className="icone" src="../../public/icons/sign-in.png" alt="" />
        <button className="btn-fuchsia-400 my-4">Inscrivez-vous</button>
        <p>Créez un compte en quelques étapes</p>
      </div>
      {/* Item 2 */}
      <div className="card-home">
        <img
          className="icone"
          src="../../public/icons/edit-profile.png"
          alt=""
        />
        <button className="btn-fuchsia-400 my-4">Créez votre compte</button>
        <p>
          Ajoutez une photo, décrivez-vous, ajoutez des centres d’intérêts et
          commencez à explorer la communauté.
        </p>
      </div>
      {/* Item 3 */}
      <div className="card-home">
        <img className="icone" src="../../public/icons/event.png" alt="" />
        <button className="btn-fuchsia-400 my-4">
          Rejoignez des évênements
        </button>
        <p>
          Inscrivez-vous à des évènements locaux organisés par notre équipe,
          parfaits pour rencontrer de nouvelles personnes.
        </p>
      </div>
      {/* Item 4 */}
      <div className="card-home">
        <img className="icone" src="../../public/icons/chat.png" alt="" />
        <button className="btn-fuchsia-400 my-4">Discutez en privé</button>
        <p>
          Utilisez notre messagerie pour entrer en contact avec d&apos;autres
          membres en toute sécurité.
        </p>
      </div>

      {/* Container "Nos activités à venir" */}
      {/* title version mobile */}
      <p className="my-5 w-5/6 border-y-2 border-darkGrey py-2 px-6 m-auto text-center text-lg lg:hidden">
        Nos activités à venir
      </p>

      <div className="bg-fuchsia-100 mt-4 p-4">
        {/* title version desktop */}
        <p className="hidden lg:block lg:visible text-center mt-3 mb-12 font-bold text-4xl">
          Nos activités à venir
        </p>
        {/* ARTICLES */}
        <div className="lg:flex">
          <article className="article">
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
          <article className="article">
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
          <article className="article">
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
        </div>
        <button className="btn-fuchsia-400 block mx-auto mt-12 mb-6">
          Découvrir nos évênements
        </button>
      </div>

      <div className="flex mt-12 items-center justify-center">
        <p className="mb-10 mt-10 text-justify mx-6 lg:w-2/5">
          <span className="text-center text-lg block mb-8  lg:text-4xl lg:font-bold">
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
          src="../../public/img/mixed-couple.jpg"
          alt=""
        />
      </div>
      <button className="btn-fuchsia-600 block mx-auto my-8">
        Nous rejoindre
      </button>
    </div>
  );
}
