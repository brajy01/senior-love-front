import React, { useState, useEffect } from 'react';
import fetchAPI from '../../utils/fetchAPI';
import { useNavigate } from 'react-router-dom';

export default function CardMessage({ senderId, message, createdAt }) {
  const [senderProfile, setSenderProfile] = useState(null);

  const formattedDate = new Date(createdAt).toLocaleDateString('fr-FR');
  const navigate = useNavigate();


  useEffect(() => {
    const fetchSenderProfile = async () => {
      const profile = await fetchAPI(`/profiles/${senderId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setSenderProfile(profile);
    };

    fetchSenderProfile();
  }, [senderId]);
  
  //function that keeps only the first x words of a message
  function truncateWords(text, maxWords) {
    const words = text.split(' ');
    if (words.length <= maxWords) {
      return text;
    }
    return words.slice(0, maxWords).join(' ') + '...';
  }

  //variable storing the truncated message 
  const truncatedMessage = truncateWords(message, 10);

  //Displays a message while data is loading
  if (!senderProfile) {
    return <p>Chargement...</p>; // Affiche un message ou un spinner pendant le chargement
  }
  const handleClick = () => {
    console.log("Profil envoyé de CardMessage a ConversationDetail:", senderProfile)
    navigate(`/messages/${senderId}`, { state: { senderProfile, formattedDate } });
  }

  
  return (
    <>
      
        <figure className="bg-slate-100">
          <img
            className="w-full h-full"
            src={senderProfile.avatar}
            alt={senderProfile.firstname} />
        </figure>

        <div className="card-body">
          <h2 className="card-title">{senderProfile.firstname}</h2>
          <p>{truncatedMessage}</p>
          <p>Message &#233;crit le {formattedDate}</p>
          <div className="card-actions justify-end">
              <button 
                onClick={handleClick}
                className="btn text-white bg-fuchsia-400 mt-6">
                  Répondre
              </button>
          </div>
        </div>
      
    </>
  );
}

/*const handleResponse = (senderId) => {
  navigate(`/conversation/${senderId}`);
};
onReply={() => handleResponse(message.senderId)}
 */
