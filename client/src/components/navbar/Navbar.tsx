import { type FC, useEffect, useState } from "react";
import LogoIcon from "/logo.svg";
import "./navbar.css";

interface User {
  email: string;
  name: string;
  picture?: string;
}

export const Navbar: FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const isHomePage = window.location.pathname === "/";

  // Vérifie si un code Google est présent dans l’URL (retour d’OAuth)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    // Si l’utilisateur revient de Google avec un code, on l’envoie au backend
    if (code) {
      fetch(`http://localhost:8000/auth/google/callback?code=${code}`, {
        credentials: "include",
      })
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (data?.user) {
            setUser(data.user);
            window.history.replaceState({}, "", "/"); // Nettoie l’URL
          }
        })
        .catch(() => setUser(null));
    } else {
      // Sinon on vérifie s’il est déjà connecté
      fetch("http://localhost:8000/auth/me", { credentials: "include" })
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => setUser(data))
        .catch(() => setUser(null));
    }
  }, []);

  const logout = () => {
    fetch("http://localhost:8000/auth/logout", {
      method: "POST",
      credentials: "include",
    }).finally(() => {
      setUser(null);
    });
  };

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
        {user ? (
          <>
            <img
              src={user.picture || "https://avatar.iran.liara.run/public/31"}
              alt="User Avatar"
              className="user-avatar"
            />
            <span>{user.name}</span>
            <button onClick={logout} className="link">
              Déconnexion
            </button>
          </>
        ) : (
          <button
            onClick={() =>
              (window.location.href = "http://localhost:8000/auth/google/login")
            }
          >
            Se connecter
          </button>
        )}
      </div>
    </nav>
  );
};
