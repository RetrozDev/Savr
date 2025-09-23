import  { type FC } from "react";
import LogoIcon from "/logo.svg";
import './navbar.css'
import { Link } from "react-router";

export const Navbar: FC = () => {
  const isLoggedIn = false; // TODO: replace with  authentication logic
  return (
    <nav className="navbar">
      <img src={LogoIcon} alt="savr-logo" className="navbar-logo" />
      <div className="links">
        <Link to="/" className="link">Accueil</Link>
        <Link to="/about" className="link">À propos</Link>
        <Link to="/recipes" className="link">Recettes</Link>
      </div>
      <div className="auth-links">
        {isLoggedIn ? (
          <img src="https://avatar.iran.liara.run/public/31" alt="User Avatar" className="user-avatar" />
        ) : (
          <>
            <button onClick={() => window.location.href = "/login"} className="link">Se connecter</button>
            <button onClick={() => window.location.href = "/register"} className="link">S'inscrire</button>
          </>
        )}
      </div>
    </nav>
  );
};
