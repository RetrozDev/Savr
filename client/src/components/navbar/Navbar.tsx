import { useUser } from "../../contexts/UserContext";
import LogoIcon from "/logo.svg";
import "./navbar.css";
import { useState } from "react";

export const Navbar = () => {
  const { user, signInWithGoogle, signOut } = useUser();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  return (
    <>
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
                src={
                  user?.picture
                    ? `https://images.weserv.nl/?url=${encodeURIComponent(
                        user.picture
                      )}`
                    : "https://avatar.iran.liara.run/public/31"
                }
                alt="User Avatar"
                className="user-avatar"
                onClick={toggleProfile}
              />
            </>
          ) : (
            <button onClick={signInWithGoogle}>Se connecter</button>
          )}
        </div>
      </nav>

      {isProfileOpen && user && (
        <div className="profile-overlay" onClick={toggleProfile}>
          <div className="profile-card" onClick={(e) => e.stopPropagation()}>
            <img
              src={
                user?.picture
                  ? `https://images.weserv.nl/?url=${encodeURIComponent(
                      user.picture
                    )}`
                  : "https://avatar.iran.liara.run/public/31"
              }
              alt="User Avatar"
              className="profile-avatar"
            />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <button className="logout-btn" onClick={signOut}>
              Déconnexion
            </button>
          </div>
        </div>
      )}
    </>
  );
};
