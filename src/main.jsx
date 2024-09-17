import App from "./App.jsx";
import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from './contexts/AuthContext';
import { UserProvider } from './contexts/UserContext.jsx';
import { ProfileProvider } from './contexts/ProfileContext.jsx'
import { MessageProvider } from './contexts/MessageContext.jsx';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <ProfileProvider>
            <MessageProvider>
              <App />
            </MessageProvider>  
          </ProfileProvider>  
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);


