import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import ChatInput from "../components/ChatInput.jsx";
import useAuth from "../../contexts/AuthContext.jsx";
import useMessage from "../../contexts/MessageContext.jsx";
import useData from "../../contexts/ProfileContext.jsx"

export default function ConversationDetail() {
  const location = useLocation();
  const { profile } = useData();
  const { senderId } = useParams();
  const { senderProfile, formattedDate } = location.state;
  const { receivedMessages, sentMessages, fetchSentMessagesToSomeone, fetchReceivedMessagesFromSomeone } = useMessage();
  
  useEffect(() => {
    if (!profile || !senderId) return;
    try {
    fetchSentMessagesToSomeone(senderId);
    fetchReceivedMessagesFromSomeone(senderId);
    } catch (error) {
      console.error("Erreur:", error);
    }
  }, [profile, senderId]);
 
  const allMessages = [...receivedMessages, ...sentMessages];
  const sortedMessages = allMessages.sort((a, b) => a.id - b.id);
  
  
  if (!senderProfile || !sortedMessages || !profile) {
    return <p>Chargement des messages...</p>;  // Ou affiche un message d'erreur approprié
  }
  console.log("senderProfile:", senderProfile);
  console.log(profile);
  return (
    <>
    <div className="bg-gradient-to-b from-fuchsia-300 to-fuchsia-100 p-4 mb-4">
        <h1 className="text-3xl text-gray-600 font-semibold text-center">
          Conversation avec {senderProfile.firstname}
        </h1>
      </div>
     <div className="m-1">
        {sortedMessages.map((message) =>(
           <div key={message.id} className={`${message.senderProfileId === senderProfile.id ? "chat chat-start items-center" : "chat chat-end items-center"}`}>
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Avatar"
                  src={message.senderProfileId === senderProfile.id ? `.${senderProfile.avatar}` : `.${profile.avatar}`}
                  className="w-10 rounded-full"
                />
              </div>
            </div>
            <div
              className={`chat-bubble ${message.senderProfileId === senderProfile.id ? "ml-4 bg-fuchsia-200" : "mr-4 bg-gray-200"} text-black text-xl shadow-md p-3`}
            >
              {message.content}
            </div>
            <div className="chat-footer opacity-50">{formattedDate}</div>
          </div>
        ))}
  
    </div>      
      <ChatInput />
    </>
  );
}

/*
        <div className="chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Avatar"
                src={senderProfile.avatar}
              />
            </div>
          </div>
          <div
            className="chat-bubble bg-fuchsia-200 text-black text-xl shadow-md p-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis explicabo, natus est doloribus sequi molestiae!
          </div>
          <div className="chat-footer opacity-50">12h00</div>
        </div>

        
        <div className="chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Avatar"
                src="../../img/Gisele.jpg"
              />
            </div>
          </div>
          <div
            className="chat-bubble bg-gray-200 text-black text-xl shadow-md p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quibusdam asperiores. Perferendis dolor voluptate iste aspernatur. Architecto vitae reprehenderit qui.
          </div>
          <div className="chat-footer opacity-50">13h00</div>
        </div>
*/