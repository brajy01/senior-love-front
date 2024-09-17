import React, { createContext, useState, useContext } from 'react';
import fetchAPI from '../utils/fetchAPI';
//import useAuth from "./AuthContext";
//import { useParams } from "react-router-dom";

const UserContext = createContext();
  
  function showErrorModal (status) {
   const message = "Message d'erreur";
   messageElem = `${status} - ${message}`;
    console.log(messageElem);
}


export const UserProvider = ({ children }) => {
    //const [isConnected, setIsConnected] = useState(false);
    const [user, setUser] = useState(null);

    //const { userId } = useParams();
    //const { isConnected } = useAuth();


    // Get all users
    /*const getAllUsers = async () => {
        const response = await fetchAPI('/users');
        const allUsers = await response.json();
        const newUsers = [...user, allUsers];
        setUser(newUsers);
    };
    getAllUsers();

    // Get one user
    const getOneUser = async (userId) => {
        const response = await fetchAPI(`/users/${userId}`);
        const oneUser = await response.json();
        setUser(oneUser);
    };
    getOneUser();
    */

    // Create user
    const createUser = async (userData) => {
        const userCreated = await fetchAPI ('/auth/signin', {
            method: "POST",
            headers: { 
              'Content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!userCreated) return null;
        console.log(userCreated)
        setUser(userCreated);
    };
    
    /*
    // Update user
    const updateUser = async (userId, userData) => {
        const response = await fetchAPI(`/users/${userId}`, {
            method: "PATCH",
            headers: { "Content-type":"application/json"},
            body: JSON.stringify(userData)
        });
        if (!response.ok) return console.log(response);
        const userUpdated = await response.json();

        const newUsers = [...user, userUpdated];
        setUser(newUsers);
    };
    updateUser();


    // Delete a user
    const deleteUser = async () => {
        const status = await fetchAPI (`/users/${userId}`, { 
            method: "DELETE"
        });
        return status;
    };
    deleteUser();
    */
  
  
  return (
    <UserContext.Provider value={{ createUser, user }}>
        {children}
    </UserContext.Provider>
  );
};
export default function useData() {
    return useContext(UserContext);
}