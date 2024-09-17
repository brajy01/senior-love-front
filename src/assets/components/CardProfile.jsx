import  useAuth from '../../contexts/AuthContext.jsx';
import { Link } from 'react-router-dom'

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/fr";
dayjs.locale("fr");
dayjs.extend(relativeTime);


export default function CardProfile({profile}) {
	const { isConnected } = useAuth();

	return ( 
		<article className="card bg-base-100 w-80 shadow-xl">
			<figure className="px-10 pt-10">
				{isConnected ? (
					<Link to={`/profile/${profile.id}`}>
						<img
							src={profile.avatar}
							alt={`${profile.firstname} ${profile.lastname}`}
							className="rounded-xl cursor-pointer"
						/>
					</Link>	
				
				) : (
					<img
							src={profile.avatar}
							alt={`${profile.firstname} ${profile.lastname}`}
							className="rounded-xl blur cursor-pointer"
							onClick={() => document.getElementById("btn_connexion").showModal()}
						/>
				)}

			</figure>
			<div className="card-body items-center text-center">
				<h2 className="card-title">{profile.firstname} {profile.lastname.charAt(0)}.</h2>
				<p>{dayjs(profile.birthdate).toNow(true)}</p>

				<p>{profile.city}</p>
				<p>{profile.department}, {profile.departmentNumber}</p>
				<div className="card-actions mt-4">
					<button className="btn bg-fuchsia-300">Envoyer un message</button>
				</div>
			</div>
		</article>
	)
}

{/*ClassName pour image floue QUE si l'utilisateur n'est pas connecté:
	className={`rounded-xl ${!isConnected ? 'blur' : ''}`} 
Il faudra aussi passer le isConnected en props de CardProfile en plus de {profile} */}