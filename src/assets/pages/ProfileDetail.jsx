export default function ProfileDetail() {
  return (
    <div className="text-darkGrey flex flex-col items-center mb-10">
      {/* Logo + Nom du site */}
      <div className="flex items-center justify-center gap-4 mt-4 p-2">
        <img className="w-32" src="../../public/img/logo.png" alt="logo" />
        <div className="flex flex-col items-end">
          <p className="text-3xl font-bold text-fuchsia-400">Senior</p>
          <p className="text-3xl font-bold text-darkGrey">Love</p>
        </div>
      </div>

      <article className="flex flex-col mt-10 p-2 w-4/5 shadow-[1px_12px_13px_9px_#bbbbbb] rounded-lg ml-2 lg:shadow-none lg:flex-row lg:items-center lg:justify-center">
        <img
          className="w-60 m-auto rounded-xl mb-5 lg:w-80 lg:my-10 lg:ml-10 lg:mr-10"
          src="../../public/img/bernard.png"
          alt="Bernard"
        />
        <div className="lg:mt-10 lg:text-xl">
          <h2 className="mb-2 font-bold text-xl pl-4 lg:text-4xl">
            L&apos;HERMITE Bernard
          </h2>
          <p className="pl-4">63 ans</p>
          <p className="pl-4">RENNES</p>
          <p className="pl-4">Ille et Vilaine, 35</p>
        </div>
      </article>
      <button className="btn-fuchsia-300 text-darkGrey lg:text-xl w-fit mt-10">
        Envoyer un message
      </button>
      
      <div className="flex flex-col w-4/5 m-auto my-10 shadow-lg border-2 border-fuchsia-100 rounded-lg">
        <h2 className="font-bold text-xl p-4 uppercase">Description :</h2>
        <p className="p-2 text-justify text-lg leading-loose">
          “Je suis un homme de 63 ans, habitant à Rennes, avec un esprit curieux
          et un cœur chaleureux. Passionné par les balades en pleine nature et
          les découvertes culturelles, j&apos;aime profiter des charmes de ma
          ville et de ses environs. Avec une bonne dose d&apos;humour et une
          approche positive de la vie, je recherche une relation sincère et
          complice. J&apos;apprécie les moments simples, que ce soit un dîner
          convivial, une sortie au cinéma ou une promenade en bord de mer. Si
          vous partagez ces valeurs, je serais ravi de faire votre
          connaissance.&quot;
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
              alt={item.label}
            />
            <p className="mb-2 text-center">{item.label}</p>
          </div>
        ))}
      </div>
      <button className="btn-fuchsia-300 text-darkGrey mt-5 text-sm w-fit lg:hidden">
        Envoyer un message
      </button>
    </div>
  );
}
