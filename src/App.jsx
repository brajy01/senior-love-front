import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./assets/pages/Homepage";
import Layout from "./assets/pages/Layout";
import Profiles from "./assets/pages/Profiles";
import Events from "./assets/pages/Events";
import Messages from "./assets/pages/Messages";
import MyAccount from "./assets/pages/MyAccount";
import LoginModal from "./assets/components/LoginModal";
import RegisterModal from "./assets/components/RegisterModal";
import ProfileDetail from "./assets/pages/ProfileDetail";

function App() {
  // State to manage the visibility of login and register modals
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  // Functions to handle opening and closing modals
  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const openRegisterModal = () => setIsRegisterModalOpen(true);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);

  return (
    <>
      {/* Conditionally render modals */}
      {isLoginModalOpen && <LoginModal onClose={closeLoginModal} />}
      {isRegisterModalOpen && <RegisterModal onClose={closeRegisterModal} />}

      <Routes>
        {/* Pass the modal functions to Layout */}
        <Route
          path="/"
          element={
            <Layout
              onLoginClick={openLoginModal}
              onRegisterClick={openRegisterModal}
            />
          }
        >
          <Route index element={<Homepage />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/events" element={<Events />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile-detail" element={<ProfileDetail />} />
          <Route path="/legal-notice" element={<p>Mentions légales</p>} />
          <Route path="/site-map" element={<p>Plan du site</p>} />
          <Route path="/contact" element={<p>Contact</p>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
