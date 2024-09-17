/* eslint-disable react/prop-types */
import useAuth from '../../contexts/AuthContext.jsx';
import { Link } from 'react-router-dom'
export default function CardEvent({ event }) {
  const { isConnected } = useAuth();

  return (
    <>
    
	  <figure>
		<img className="w-full h-full" src={event.photo} alt="" />
	  
    </figure>
      <div className="card-body lg:w-2/3">
        <h2 className="card-title">{event.name}</h2>
        <p>12/{event.maxnumberpeople} participants</p>
        <h2 className="card-title">{event.location}</h2>
        <p>
          {event.date} à {event.hour}
        </p>
        <div className="card-actions justify-end">
          {isConnected ? (
            <Link to={`/events/${event.id}`}>
              <button className="btn btn-sm text-white bg-fuchsia-400">
                Je participe
              </button>
            </Link>

          ) : (

            <button className="btn btn-sm text-white bg-fuchsia-400"
              onClick={() => document.getElementById("btn_connexion").showModal()}>
              Je participe
            </button>
          )}
        </div>
      </div>   
	
    </>
  );
}
