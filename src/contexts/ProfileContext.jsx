import React, { createContext, useState, useContext, useEffect } from 'react';
import useAuth from './AuthContext';
import { useParams } from 'react-router-dom';
import fetchAPI from '../utils/fetchAPI';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
	const { user } = useAuth();
	//const { senderId } = useParams();
	const [profile, setProfile] = useState();
	const [senderProfile, setSenderProfile] = useState();

	useEffect(() => {
		const fetchProfile = async () => {
			if (!user) {
				return;
			}			
			const profile = await fetchAPI(`/profiles/${user?.userId}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${user?.accessToken}`,
				},
			});
			if (!profile) {
				console.error('Erreur lors de la récupération de l\'utilisateur');
				return;
			}
			setProfile(profile);
		};
		fetchProfile();
	}, [user]);
	
	// Create a profile from a user 
  /*const createProfile = async (userId, profileData) => {
    const data = await fetchAPI(`/users/${userId}/profile`, {
      method: "POST",
      headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${user?.accessToken}`,
						},
      body: JSON.stringify(profileData) //check profileData
    });
    if (!data.ok) return console.log(data);
    const profileCreated = await data.json();
    const newProfiles = [...profiles, profileCreated];
    setProfiles(newProfiles);
  };
  createProfile(userId, profileData);
	*/
  
  // Update a profile 
  const updateProfile = async (profileId, profileData) => {
    const updatedProfile = await fetchAPI(`/profiles/${profileId}`, {
      method: "PATCH",
      headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user?.accessToken}`,
			},
      body: JSON.stringify(profileData)
    });
    if (!updatedProfile) return null;
    //const profileUpdated = await data.json();
    //const updatedProfiles = [...profiles, profileUpdated];
    setProfile(updatedProfile);
  };
  

	/*
  // Delete a profile
  const deleteProfile = async (profileId) => {
    const status = await fetchAPI(`/profiles/${profileId}`, { 
      method: "DELETE"
    })
    return status;
  };
  deleteProfile();
*/
	

	return (
		<ProfileContext.Provider value={{ profile, senderProfile, updateProfile }}>
				{children}
		</ProfileContext.Provider>
	);
};
export default function useProfile() {
	return useContext(ProfileContext);
}
