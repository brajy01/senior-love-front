
//import { useState } from "react";
//import useAuth from "../../contexts/AuthContext";
import useMessage from "../../contexts/MessageContext";
import CardMessage from "../components/CardMessage";

export default function MessagesList() {
  //const [receivedMessages, setReceivedMessages] = useState([]);
  //const { user } = useAuth();
  const {latestReceivedMessages} = useMessage();
  console.log("latestMessages:", latestReceivedMessages);
  
  if (!latestReceivedMessages) {
    return <p>Chargement des messages...</p>; // Afficher un message de chargement si nécessaire
  }

  return (
    <>
      <div className="bg-gradient-to-b from-fuchsia-300 to-fuchsia-100 p-4 mb-4">
        <h1 className="text-3xl text-gray-600 font-semibold text-center">
          Mes messages
        </h1>
      </div>
      <div className="lg:flex lg:flex-wrap lg:justify-center">

      {latestReceivedMessages.map((message) => (
        <div key={message.id} className="card my-10 mx-4 lg:card-side bg-base-100 shadow-xl lg:w-1/3 lg:h-64">
          <CardMessage  
            senderAvatar={message.senderProfileId.avatar}
            senderId={message.senderProfileId}
            message={message.content}
            createdAt={message.createdAt}
          />
        </div>
      ))}
        
      </div>
    </>
  );
  /*
  /Combine sent and received messages
  const { user } = useAuth();

  const [messages, setMessages] = useState([]);
  /const [receivedMessages, setReceivedMessages] = useState([]);
  useEffect(() => {
  const fetchMessagesData = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/messages/${user.userId}`, {
          method: 'GET',
          headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user?.accessToken}`,
          },  
        },
      );
      const data = await response.json();

     

    setMessages(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchMessagesData();
}, [user]);
  */
}
/*useEffect(() => {
    const fetchSenderProfile = async () => {
      try {
        const senderProfile = await fetchAPI(`/profiles/${senderId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setSenderProfile(senderProfile);
        //console.log(data);
      } catch (error) {
        console.error('Erreur lors de la récupération du profil:', error);
      }
    };
    
    fetchSenderProfile();
  }, [senderId]);*/

