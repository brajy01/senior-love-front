import { useState, useEffect, useRef } from "react";
import useProfile from "../../contexts/ProfileContext";
import useAuth from "../../contexts/AuthContext";

export default function EditProfileModal() {
  const [message, setMessage] = useState("");

  //const { user } = useAuth();
  const { profile, updateProfile } = useProfile();
  const modalRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(null);

  //Profile data form
  const [gender, setGender] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [city, setCity] = useState("");
  const [department, setDepartment] = useState("");
  const [departmentNumber, setDepartmentNumber] = useState("");
  const [description, setDescription] = useState("");
  //const [interests, setInterests] = useState("");
  const profileData = {
    gender,
    lastname,
    firstname,
    birthdate,
    city,
    department,
    departmentNumber,
    description,
  };
  //User data form
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  //const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (profile) {
      setGender(profile.gender || "");
      setLastname(profile.lastname || "");
      setFirstname(profile.firstname || "");
      setBirthdate(profile.birthdate || "");
      setCity(profile.city || "");
      setDepartment(profile.department || "");
      setDepartmentNumber(profile.departmentNumber || "");
      setDescription(profile.description || "");
    }
  }, [profile]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      await updateProfile(profile.id, profileData);
      if (modalRef.current) modalRef.current.close();
    } catch (error) {
      console.log(error);
    }
  };

  const handleInterestChange = (e) => {
    const { value, checked } = e.target;
    if (checked){
      setInterest((interests) => [...interests, value]);
    }
    else {
      setInterest((interests) => interests.filter((interestElem) => interestElem !== value));
    }
  };

  return (
    <>
      {/* Modal */}
      <dialog id="edit_modal" ref={modalRef} className="modal">
        <div className="modal-box">
          <form
            method="dialog"
            className="flex flex-col items-center justify-center space-y-4"
            onSubmit={handleSubmit}
          >
            <button className="btn text-2xl btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <div className="form-control w-full max-w-xs">
              {/* Photo Preview */}
              <div className="form-control flex flex-col items-center">
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-48 h-48 object-cover rounded-full mb-2"
                  />
                ) : (
                  <img
                    className="w-48 h-48 mb-4 bg-gray-200 rounded-full flex items-center justify-center text-gray-500"
                    src={
                      profile
                        ? `${profile.avatar}`
                        : "../../img/avatar-gris.png"
                    }
                  />
                )}
                {/* Photo Input */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ cursor: "pointer" }}
                  className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-fuchsia-300 file:text-darkGrey hover:file:bg-fuchsia-200 hover:file:bg-fuchsia-400"
                  id="default_size"
                />
              </div>

              {/* Genre Input */}
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Genre</span>
                </label>
                <select
                  className="select select-bordered"
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}
                >
                  <option>Homme</option>
                  <option>Femme</option>
                </select>
              </div>

              {/* Nom Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nom</span>
                </label>
                <input
                  type="text"
                  placeholder={profile ? `${profile.lastname}` : "Nom"}
                  className="input input-bordered"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>

              {/* Prénom Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Prénom</span>
                </label>
                <input
                  type="text"
                  placeholder={profile ? `${profile.firstname}` : "Prénom"}
                  className="input input-bordered"
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>

              {/* Date de Naissance Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date de naissance</span>
                </label>
                <input
                  type="date"
                  className="input input-bordered"
                  onChange={(e) => setBirthdate(e.target.value)}
                />
              </div>

              {/* Ville Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Ville</span>
                </label>
                <input
                  type="text"
                  placeholder={profile ? `${profile.city}` : "Ville"}
                  className="input input-bordered"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              {/* Département Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Département</span>
                </label>
                <input
                  type="text"
                  placeholder={
                    profile ? `${profile.department}` : "Département"
                  }
                  className="input input-bordered"
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </div>

              {/* Département Number Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Numéro de département</span>
                </label>
                <input
                  type="number"
                  placeholder={
                    profile
                      ? `${profile.departmentNumber}`
                      : "Numéro de département"
                  }
                  className="input input-bordered"
                  onChange={(e) => setDepartmentNumber(e.target.value)}
                />
              </div>

              {/* Adresse Email Input */}
              {/* <div className="form-control">
							<label className="label">
								<span className="label-text">Adresse mail</span>
							</label>
							<input
								type="email"
								placeholder={profile ? `${profile.userProfile.email}` : "Email"}
								className="input input-bordered"
								
							/>
						</div>
					 */}

              {/* Mot de passe Input */}
              {/*<div className="form-control">
						 <label className="label">
							 <span className="label-text">Mot de passe</span>
						 </label>
						 <input
							 type="password"
							 placeholder="Mot de passe"
							 className="input input-bordered"
							 
						 />
					</div>*/}

              {/* Confirmation de mot de passe Input */}
              {/*<div className="form-control">
						 <label className="label">
							 <span className="label-text">
								 Confirmation de mot de passe
							 </span>
						 </label>
						 <input
							 type="password"
							 placeholder="Confirmation de mot de passe"
							 className="input input-bordered"
							 
						 />
				</div>*/}

              {/* Description Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  placeholder={profile ? `${profile.bio}` : "Description"}
                  className="textarea textarea-bordered"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="mt-10 text-center text-xl">Centres d'intérêts</div>
              <div className="flex flex-wrap justify-center gap-8 px-1 mt-10">
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
					<label className="flex items-center cursor-pointer no-animation" >
                        <input 
                          type="checkbox"
                          className="checkbox no-animation" 
                          name="checkbox"  
                          value={item.value}
                          onChange={handleInterestChange}

                        />
                      </label>
                  </div>
                ))}
              </div>

              {/* Submit Button */}
              <div className="form-control">
                <button
                  type="submit"
                  className="btn bg-fuchsia-300 text-darkGrey mt-4"
                >
                  Enregistrer les modifications
                </button>
              </div>
              {/* Delete Button */}
              <div className="form-control mt-4">
                <button
                  className="btn"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Supprimer mon compte
                </button>

                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    {/* Bouton pour fermer la modale */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>

                    <h3 className="font-bold text-lg">
                      Confirmer la suppression
                    </h3>
                    <p className="py-4">
                      Êtes-vous sûr de vouloir supprimer votre compte ? Cette
                      action est irréversible.
                    </p>
                    <div className="flex justify-end gap-2">
                      {/* Bouton "Annuler" */}
                      <button
                        className="btn bg-gray-300 text-darkGrey"
                        onClick={() =>
                          document.getElementById("my_modal_3").close()
                        }
                      >
                        Annuler
                      </button>
                      {/* Bouton "Supprimer" */}
                      <button
                        className="btn bg-red-500 text-white"
                        onClick={() => {
                          console.log("Compte supprimé");
                          document.getElementById("my_modal_3").close();
                        }}
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
