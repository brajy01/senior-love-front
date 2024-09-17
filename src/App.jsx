import { Route, Routes } from "react-router-dom";
import Homepage from "./assets/pages/Homepage";
import Layout from "./assets/pages/Layout";
import Events from "./assets/pages/Events";
import EventDetail from "./assets/pages/EventDetail";
import MessagesList from "./assets/pages/MessagesList";
import MyProfile from "./assets/pages/MyProfile";
import ProfileDetail from "./assets/pages/ProfileDetail";
import ProfilesList from "./assets/pages/ProfilesList";
import ConversationDetail from "./assets/pages/ConversationDetail";
import Page404 from "./assets/pages/404";
import ConnexionPopup from "./assets/components/ConnexionPopup";
import PrivateRoute from "./assets/components/PrivateRoute";
import AdminPanel from "./assets/components/AdminPanel";

function App() {
  return (
      <Routes>
        {/* Pass the modal functions to Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/profiles" element={<ProfilesList />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="/login" element={<ConnexionPopup />} />

          {/*Privates routes*/} 
          <Route path="/profile/:profileId" element={<PrivateRoute><ProfileDetail /></PrivateRoute>} />
          <Route path="/events/:eventId" element={<PrivateRoute><EventDetail /></PrivateRoute>} />
          <Route path="/messages" element={<PrivateRoute><MessagesList /></PrivateRoute>} />
          <Route path="/messages/:senderId" element={<PrivateRoute><ConversationDetail /></PrivateRoute>} />
          <Route path="/my-profile" element={<PrivateRoute><MyProfile /></PrivateRoute>} />
          <Route path="/admin/*" element={<AdminPanel />} />

        </Route>
      </Routes>
  );
}

export default App;


/*
<Route path="/conversations" element={<PrivateRoute><ConversationList /></PrivateRoute>} />
*/
