import { type FC } from "react";
import LogoIcon from "/logo.svg";
import "./navbar.css";

export const Navbar: FC = () => {
  const isLoggedIn = false; // TODO: replace with  authentication logic
  const isHomePage = window.location.pathname === "/";
  return (
    <nav className="navbar">
      <img src={LogoIcon} alt="savr-logo" className="navbar-logo" />
      <div className="links">
        {!isHomePage && <a href="/">Accueil</a>}
        <a href="#categories">Catégories</a>
        <a href="#recipes">Recettes</a>
        <a href="#about">À propos</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="auth-links">
        {isLoggedIn ? (
          <img
            src="https://avatar.iran.liara.run/public/31"
            alt="User Avatar"
            className="user-avatar"
          />
        ) : (
          <>
            <button onClick={() => console.log("TO DO")} className="link">
              Se connecter
            </button>
            <button onClick={() => console.log("TO DO")} className="link">
              S'inscrire
            </button>
          </>
        )}
      </div>
    </nav>
  );
};
