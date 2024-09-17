import React, { createContext, useState, useContext, useEffect } from 'react';
import useAuth from './AuthContext';
import fetchAPI from '../utils/fetchAPI';
//import useData from "./UserContext";
//import { useParams } from "react-router-dom";

const MessageContext = createContext();

export const MessageProvider = ({children}) => {
	const [latestReceivedMessages, setLatestReceivedMessages] = useState([]);
	const [sentMessages, setSentMessages] = useState([]);
	const [receivedMessages, setReceivedMessages] = useState([]);
	const { user } = useAuth();

	//Fetch all received messages and keep only the most recent ones
	useEffect(() => {
		if (!user) return;
			const fetchAllReceivedMessages = async () => {
				const allReceivedMessages = await fetchAPI(`/messages/${user.userId}`,{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${user?.accessToken}`,
						},
				});
				
				if (!allReceivedMessages) {
					console.error("Erreur lors de la récupération des messages", error);
					return;
				}		
				
				const uniqueMessages = {};
				for (const message of allReceivedMessages) {
					const { senderProfileId, createdAt } = message;
					if (!uniqueMessages[senderProfileId] || new Date(createdAt) > new Date(uniqueMessages[senderProfileId].createdAt)) {
						uniqueMessages[senderProfileId] = message;
					}
				}
				// Convertir l'objet en tableau
				const latestMessages = Object.values(uniqueMessages);

				setLatestReceivedMessages(latestMessages);	
				
			};
		fetchAllReceivedMessages();	
  }, [user]);

	//Fetch all sent messages to someone
	const fetchSentMessagesToSomeone = async (targetId) => {
		if (!user) return;
		//console.log("Fetching sent messages to:", targetId);
		const sentMessages = await fetchAPI(`/messages/${user.userId}/sent/${targetId}`,{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user?.accessToken}`,
			},
		});
		
		if (!sentMessages) {
			console.error("Erreur lors de la récupération des messages", error);
			return 
		};	
		setSentMessages(sentMessages);
	};	

	//Fetch all received messages from someone
	const fetchReceivedMessagesFromSomeone = async (targetId) => {
		if (!user) return;
		//console.log("Fetching received messages from:", targetId);
		const receivedMessages = await fetchAPI(`/messages/${user.userId}/received/${targetId}`,{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user?.accessToken}`,
			},
		});
		
		if (!receivedMessages) {
			console.error("Erreur lors de la récupération des messages", error);
			return 
		};		
		setReceivedMessages(receivedMessages);
	};	

	return (
		<MessageContext.Provider value={{ latestReceivedMessages, sentMessages, receivedMessages, fetchSentMessagesToSomeone, fetchReceivedMessagesFromSomeone }}>
				{children}
		</MessageContext.Provider>
	);
};
export default function useMessage() {
	return useContext(MessageContext);
}
