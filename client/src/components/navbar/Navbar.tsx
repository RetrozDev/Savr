import { useUser } from "../../contexts/UserContext";
import LogoIcon from "/logo.svg";
import "./navbar.css";

export const Navbar = () => {
  const { user, signInWithGoogle, signOut } = useUser();

  return (
    <nav className="navbar">
      <img src={LogoIcon} alt="savr-logo" className="navbar-logo" />
      <div className="links">
        <a href="/">Accueil</a>
        <a href="#categories">Catégories</a>
        <a href="#recipes">Recettes</a>
      </div>
      <div className="auth-links">
        {user ? (
          <>
            <img
              src={user.picture || "https://avatar.iran.liara.run/public/31"}
              alt="User Avatar"
              className="user-avatar"
            />
            <button onClick={signOut}>Déconnexion</button>
          </>
        ) : (
          <button onClick={signInWithGoogle}>Se connecter</button>
        )}
      </div>
    </nav>
  );
};
