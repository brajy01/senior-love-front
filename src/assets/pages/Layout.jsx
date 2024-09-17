import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// eslint-disable-next-line react/prop-types
export default function Layout({ onLoginClick, onRegisterClick }) {
  return (
    <div>
      {/* Render the Header with modal handlers */}
      <Header onLoginClick={onLoginClick} onRegisterClick={onRegisterClick} />
      <Outlet />
      <Footer />
    </div>
  );
}
