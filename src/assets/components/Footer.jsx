import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className=" text-center font-semibold text-darkGrey bg-neutral-300 lg:hidden p-2">
        <p className="mb-2">© 2024 by Happy Retired</p>
        <nav className="flex flex-col">
          <Link to={"/legal-notice"}>Mentions légales</Link>
          <Link to={"/site-map"}>Plan du site</Link>
          <Link to={"/contact"}>Contact</Link>
        </nav>
      </footer>

      <footer className="hidden lg:flex lg:justify-between items-center py-4 border-t-2 border-mediumGrey w-11/12 mx-auto mt-8">
        <p className="w-1/4 text-center">© 2024 by Happy Retired</p>
        <nav className="w-3/4 flex justify-around">
          <Link to={"/legal-notice"} className="hover:underline">
            Mentions légales
          </Link>
          <Link to={"/site-map"} className="hover:underline">
            Plan du site
          </Link>
          <Link to={"/contact"} className="hover:underline">
            Contact
          </Link>
        </nav>
      </footer>
    </>
  );
}
