{/* Bouton pour gérer les profils */}
<button
className="btn bg-fuchsia-400 text-white"
onClick={() => setView("profileList")}
>
Gérer les Profils
</button>

 {/* Formulaire pour créer ou modifier un événement */}
 {view === "eventForm" && (
    <div className="bg-white p-6 shadow-md rounded-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-fuchsia-400 mb-4">
        {currentEvent ? "Modifier l'Événement" : "Créer un Nouvel Événement"}
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
            maxnumberpeople: parseInt(e.target.elements.maxnumberpeople.value) || null,
          });
        }}
      >
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
        <input
          type="text"
          name="type"
          defaultValue={currentEvent?.type || ""}
          placeholder="Type d'événement"
          className="input input-bordered w-full mb-4"
        />
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

  {/* Affichage de la liste des profils */}
  {view === "profileList" && (
    <div>
      <h2 className="text-2xl font-semibold text-center text-fuchsia-400 mb-6">
        Liste des Profils
      </h2>
      <ul className="space-y-4">
        {profiles.map((profile) => (
          <li
            key={profile.id}
            className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg"
          >
            <span className="text-lg">{`${profile.firstname} ${profile.lastname}`}</span>
            <div>
              {/* Bouton pour modifier le profil */}
              <button
                className="btn btn-sm bg-fuchsia-300 text-white mr-2"
                onClick={() => {
                  setCurrentProfile(profile); // Définit le profil sélectionné pour modification
                  setView("profileForm"); // Affiche le formulaire de modification de profil
                }}
              >
                Modifier
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )}

  {/* Formulaire pour créer ou modifier un profil */}
  {view === "profileForm" && (
    <div className="bg-white p-6 shadow-md rounded-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-fuchsia-400 mb-4">
        {currentProfile ? "Modifier le Profil" : "Créer un Nouveau Profil"}
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleProfileSubmit({
            firstname: e.target.elements.firstname.value,
            lastname: e.target.elements.lastname.value,
            birthdate: e.target.elements.birthdate.value,
            gender: e.target.elements.gender.value,
            location: e.target.elements.location.value,
            bio: e.target.elements.bio.value,
            status: e.target.elements.status.value,
            avatar: e.target.elements.avatar.value,
            user_id: currentProfile ? currentProfile.user_id : null,
          });
        }}
      >
        {/* Champ pour le prénom du profil */}
        <input
          type="text"
          name="firstname"
          defaultValue={currentProfile?.firstname || ""}
          placeholder="Prénom"
          className="input input-bordered w-full mb-4"
        />
        {/* Champ pour le nom du profil */}
        <input
          type="text"
          name="lastname"
          defaultValue={currentProfile?.lastname || ""}
          placeholder="Nom"
          className="input input-bordered w-full mb-4"
        />
        {/* Champ pour la date de naissance du profil */}
        <input
          type="date"
          name="birthdate"
          defaultValue={currentProfile?.birthdate || ""}
          className="input input-bordered w-full mb-4"
        />
        {/* Sélecteur pour le genre du profil */}
        <select
          name="gender"
          defaultValue={currentProfile?.gender || ""}
          className="select select-bordered w-full mb-4"
        >
          <option value="">Sélectionnez le genre</option>
          <option value="Homme">Homme</option>
          <option value="Femme">Femme</option>
          <option value="Autre">Autre</option>
        </select>
        {/* Champ pour le lieu du profil */}
        <input
          type="text"
          name="location"
          defaultValue={currentProfile?.location || ""}
          placeholder="Lieu"
          className="input input-bordered w-full mb-4"
        />
        {/* Champ pour la biographie du profil */}
        <textarea
          name="bio"
          defaultValue={currentProfile?.bio || ""}
          placeholder="Bio"
          className="textarea textarea-bordered w-full mb-4"
        />
        {/* Champ pour le statut du profil */}
        <input
          type="text"
          name="status"
          defaultValue={currentProfile?.status || ""}
          placeholder="Statut"
          className="input input-bordered w-full mb-4"
        />
        {/* Champ pour le lien de l'avatar du profil */}
        <input
          type="text"
          name="avatar"
          defaultValue={currentProfile?.avatar || ""}
          placeholder="Lien de l'avatar"
          className="input input-bordered w-full mb-4"
        />
        {/* Bouton pour soumettre le formulaire */}
        <button className="btn bg-fuchsia-400 text-white w-full">
              {currentProfile ? "Modifier" : "Créer"}
            </button>
          </form>
        </div>
      )}