import { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (userData) => {
    setIsConnected(true);
    setUser(userData);
    localStorage.setItem('token', userData.token);
    localStorage.setItem('userId', userData.userId);
    localStorage.setItem('userId', userData);
    console.log("Utilisateur connecté, token validé:", userData)
  };

  const logout = () => {
    setIsConnected(false);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/');
    console.log("Token retiré, utilisateur déconnecté");
    
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const validateToken = async () => {
        try {
          const response = await fetch('http://localhost:4000/auth/validate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });
  
          const data = await response.json();
          if (data.valid) {
            setIsConnected(true);
            setUser({ token, ...data.user });
            console.log('utilisateur connecté avec son token:', data.user);
          } else {
            logout();  // Si le token n'est pas valide, on déconnecte l'utilisateur
          }
        } catch (error) {
          console.log('Erreur lors de la validation du token:', error);
          logout();  // En cas d'erreur, on déconnecte également l'utilisateur
        }
      };
      validateToken();
    }
  }, []);
  
  
  return (
    <AuthContext.Provider value={{ isConnected, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default function useAuth() {
  return useContext(AuthContext);
}

